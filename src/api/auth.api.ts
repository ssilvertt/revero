import { apiInstance } from '../utils/axios.ts';
import { GetTokenResult } from '../shared/types.ts';
import { tokenStorage } from '../utils/token-storage.ts';

class AuthApi {
    private static instance: AuthApi;

    private constructor() {}

    public static getInstance(): AuthApi {
        if (!AuthApi.instance) {
            AuthApi.instance = new AuthApi();
        }
        return AuthApi.instance;
    }

    public async initTelegram(initData: string): Promise<GetTokenResult> {
        const { data } = await apiInstance.post<GetTokenResult>(`/get_token`, { initdata: initData });

        tokenStorage.setTokens(data.access_token, data.refresh_token);

        return data;
    }

    public async refreshToken(refreshToken: string): Promise<GetTokenResult> {
        const { data } = await apiInstance.post<GetTokenResult>(`/refresh`, { refresh_token: refreshToken });
        return data;
    }
}

export const authApi = AuthApi.getInstance();
