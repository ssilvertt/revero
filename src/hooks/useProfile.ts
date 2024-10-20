import { useEffect } from 'react';
import { useUnit } from 'effector-react';
import {
    fetchProfileFx,
    $profile,
    $user,
    $balance,
    $isAdmin,
    $isProfileLoading,
} from '../model/profile';

export const useProfile = () => {
    const profile = useUnit($profile);
    const user = useUnit($user);
    const balance = useUnit($balance);
    const isAdmin = useUnit($isAdmin);
    const isLoading = useUnit($isProfileLoading);
    
    useEffect(() => {
        fetchProfileFx();
    }, []);
    
    return {
        profile,
        user,
        balance,
        isAdmin,
        isLoading,
        refetch: fetchProfileFx
    };
};