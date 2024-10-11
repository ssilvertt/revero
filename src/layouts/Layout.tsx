import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useExpand, WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import { Navigation } from '../components/ui/Navigation';
import { LoadingScreen } from '../components/LoadingScreen.tsx';
import CabinetSVG from '@svg/cabinet.svg?react';
import HomeSVG from '@svg/home.svg?react';
import NewsSVG from '@svg/news.svg?react';
import PartnersSVG from '@svg/partners.svg?react';
import WalletSVG from '@svg/wallet.svg?react';
import { useInitData } from '@vkruglikov/react-telegram-web-app';

declare global {
    interface Window {
        Telegram: any;
    }
}

export function Layout() {
    const [isExpanded, expand] = useExpand();
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const location = useLocation();
    const mainRef = useRef<HTMLElement>(null);
    const [, initData] = useInitData();
    useEffect(() => {
            console.log('initData', initData);
            const tgWebApp = window.Telegram.WebApp;
            const data = tgWebApp.initData;
            console.log(data);
        
    }, []);
    
    useEffect(() => {
        window.Telegram.WebApp.setHeaderColor('#000000');
        if (!isExpanded) {
            expand();
        }
        
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
    }, [expand, isExpanded]);
    
    useEffect(() => {
        console.log()
    }, []);
    
    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTo(0, 0);
        }
    }, [location.pathname]);
    

    const navLinks = [
        { to: '/', Icon: HomeSVG, label: 'Главная' },
        { to: '/wallet', Icon: WalletSVG, label: 'Кошелек' },
        { to: '/cabinet', Icon: CabinetSVG, label: 'Кабинет' },
        { to: '/partners', Icon: PartnersSVG, label: 'Партнеры' },
        { to: '/news', Icon: NewsSVG, label: 'Новости' },
    ];
    
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
                            <main ref={mainRef} className="flex-grow overflow-y-auto text-white pb-[110px] overscroll-contain">
                                <Outlet />
                            </main>
                            <motion.div
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="flex-shrink-0 z-40"
                            >
                                <Navigation links={navLinks} />
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