import { api } from '../utils/axiosInstance.ts';

interface GetTokenResponse {
    token: string;
}

export const getToken = async (initData: string): Promise<string> => {
    try {
        const response = await api.post<GetTokenResponse>('/get_token', { init_data: initData });
        return response.data.token;
    } catch (error) {
        console.error('Error fetching token:', error);
        throw new Error('Failed to fetch token');
    }
};
