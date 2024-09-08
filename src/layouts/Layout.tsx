import CabinetSVG from '@svg/cabinet.svg?react';
import HomeSVG from '@svg/home.svg?react';
import NewsSVG from '@svg/news.svg?react';
import PartnersSVG from '@svg/partners.svg?react';
import WalletSVG from '@svg/wallet.svg?react';
import { useExpand, WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/ui/Navigation';
import type { NavLinkProps } from '../components/ui/NavLink';
import { LoadingScreen } from '../components/LoadingScreen.tsx';

declare global {
    interface Window {
        Telegram: any;
    }
}



export function Layout() {
    const [isExpanded, expand] = useExpand();
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

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

    const navLinks: NavLinkProps[] = [
        { to: '/', Icon: HomeSVG, label: 'Главная' },
        { to: '/wallet', Icon: WalletSVG, label: 'Кошелек' },
        { to: '/cabinet', Icon: CabinetSVG, label: 'Кабинет' },
        { to: '/partners', Icon: PartnersSVG, label: 'Партнеры' },
        { to: '/news', Icon: NewsSVG, label: 'Новости' },
    ];

    return (
        <WebAppProvider>
            <div className="flex flex-col min-h-screen bg-main">
               
                    {isLoading ? (
                        <LoadingScreen progress={loadingProgress} />
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col min-h-screen"
                        >
                            <main className="flex-grow overflow-y-auto text-white pb-[110px]">
                                <Outlet />
                            </main>
                            <motion.div
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="fixed bottom-0 left-0 right-0 z-40"
                            >
                                <Navigation links={navLinks} />
                            </motion.div>
                        </motion.div>
                    )}
     
            </div>
        </WebAppProvider>
    );
}
