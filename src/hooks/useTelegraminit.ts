import { useEffect, useState } from 'react';
import { useExpand } from '@vkruglikov/react-telegram-web-app';
import { authApi } from '../api';
import { GetTokenResult } from '../shared/types';
import { updateUser } from '../model/user';

interface UseTelegramInitReturn {
    isLoading: boolean;
    error: Error | null;
    data: GetTokenResult | null;
}

declare global {
    interface Window {
        Telegram: any; // Изменено с never на any
    }
}

export const useTelegramInit = (): UseTelegramInitReturn => {
    const [isExpanded, expand] = useExpand();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<GetTokenResult | null>(null);
    
    useEffect(() => {
        const initTelegram = async () => {
            try {
                const tgWebApp = window.Telegram.WebApp;
                const initData = tgWebApp.initData;
                if (!initData) return;
                
                window.Telegram.WebApp.setHeaderColor('#000000');
                if (!isExpanded) {
                    expand();
                }
                
                const response = await authApi.initTelegram(initData);
                setData(response);
                console.log('Received user data:', response.user);
                // Убедимся, что updateUser вызывается с корректными данными
                if (response.user) {
                    updateUser(response.user);
                }
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to initialize'));
                console.error('Telegram init error:', err);
            } finally {
                setIsLoading(false);
            }
        };
        
        initTelegram();
    }, [expand, isExpanded]);
    
    return { isLoading, error, data };
};