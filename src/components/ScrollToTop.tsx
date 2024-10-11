import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
    const { pathname } = useLocation();
    const prevPathRef = useRef(pathname);

    useEffect(() => {
        if (prevPathRef.current !== pathname) {
            const scrollToTop = () => {
                window.scrollTo(0, 0);
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                const mainContent = document.querySelector('main');
                if (mainContent) {
                    mainContent.scrollTop = 0;
                }
            };

            // Attempt to scroll immediately
            scrollToTop();

            // Attempt to scroll after a short delay
            const immediateTimeout = setTimeout(scrollToTop, 0);

            // Attempt to scroll after a longer delay
            const delayedTimeout = setTimeout(scrollToTop, 100);

            prevPathRef.current = pathname;

            return () => {
                clearTimeout(immediateTimeout);
                clearTimeout(delayedTimeout);
            };
        }
    }, [pathname]);

    return null;
}
