import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import { Navigation } from '../components/ui/Navigation';
import { LoadingScreen } from '../components/LoadingScreen';
import { useLoading } from '../hooks/useLoading';
import { useTelegramInit } from '../hooks/useTelegraminit';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { NAV_LINKS } from '../constants/navigation';

export function Layout() {
    const mainRef = useRef<HTMLElement>(null);
    const { isLoading, loadingProgress } = useLoading();

    useTelegramInit();
    useScrollToTop(mainRef);

    return (
        <WebAppProvider>
            <div className="fixed inset-0 bg-main">
                <div className="flex flex-col h-full overflow-hidden">
                    {isLoading ? (
                        <LoadingScreen progress={loadingProgress} />
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col h-full"
                        >
                            <main
                                ref={mainRef}
                                className="flex-grow overflow-y-auto text-white pb-[110px] overscroll-contain"
                            >
                                <Outlet />
                            </main>
                            <motion.div
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="flex-shrink-0 z-40"
                            >
                                <Navigation links={NAV_LINKS} />
                            </motion.div>
                        </motion.div>
                    )}
                </div>
                <div id="modal-root"></div>
                <div id="notification-root"></div>
            </div>
        </WebAppProvider>
    );
}
