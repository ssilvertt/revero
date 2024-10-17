import axios from 'axios';
import { API_CONFIG } from '../config/api_config.ts';
import { tokenStorage } from './token-storage';
import { authApi } from '../api';

export const apiInstance = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

apiInstance.interceptors.request.use(
    (config) => {
        const token = tokenStorage.getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = tokenStorage.getRefreshToken();

            if (refreshToken) {
                try {
                    const { access_token, refresh_token } = await authApi.refreshToken(refreshToken);
                    tokenStorage.setTokens(access_token, refresh_token);
                    originalRequest.headers.Authorization = `Bearer ${access_token}`;
                    return apiInstance(originalRequest);
                } catch (refreshError) {
                    tokenStorage.clearTokens();
                    return Promise.reject(refreshError);
                }
            }
        }

        return Promise.reject(error);
    }
);
