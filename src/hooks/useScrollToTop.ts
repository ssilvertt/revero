import { useEffect, RefObject } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (ref: RefObject<HTMLElement>) => {
    const location = useLocation();

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo(0, 0);
        }
    }, [location.pathname]);
};