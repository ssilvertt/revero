import { useState, useEffect } from 'react';

interface UseLoadingReturn {
    isLoading: boolean;
    loadingProgress: number;
}

export const useLoading = (): UseLoadingReturn => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setLoadingProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return Math.min(oldProgress + 1, 100);
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    return { isLoading, loadingProgress };
};
