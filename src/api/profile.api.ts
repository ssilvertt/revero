import {apiInstance} from '../utils/axios.ts';
import { ProfileResponse } from '../shared/types';

class ProfileApi {
    private static instance: ProfileApi;
    private readonly BASE_PATH = '/profile/me';
    
    private constructor() {}
    
    public static getInstance(): ProfileApi {
        if (!ProfileApi.instance) {
            ProfileApi.instance = new ProfileApi();
        }
        return ProfileApi.instance;
    }
    
    public async getProfile(): Promise<ProfileResponse> {
        const { data } = await apiInstance.get<ProfileResponse>(`${this.BASE_PATH}/me`);
        return data;
    }
}

export const profileApi = ProfileApi.getInstance();
