import { useExpand, WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import HomeSVG from '@svg/home.svg?react';
import WalletSVG from '@svg/wallet.svg?react';
import CabinetSVG from '@svg/cabinet.svg?react';
import PartnersSVG from '@svg/partners.svg?react';
import NewsSVG from '@svg/news.svg?react';
import { Navigation } from '../components/ui/Navigation';
import type { NavLinkProps } from '../components/ui/NavLink';

export function Layout() {
    const [isExpanded, expand] = useExpand();

    useEffect(() => {
        window.Telegram.WebApp.setHeaderColor('#000000');
        if (!isExpanded) {
            expand();
        }
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
                <main className="flex-grow overflow-y-auto text-white pb-[110px]">
                    <Outlet />
                </main>
                <div className="fixed bottom-0 left-0 right-0 z-50">
                    <Navigation links={navLinks} />
                </div>
            </div>
        </WebAppProvider>
    );
}
