import CabinetSVG from '@svg/cabinet.svg?react';
import HomeSVG from '@svg/home.svg?react';
import NewsSVG from '@svg/news.svg?react';
import PartnersSVG from '@svg/partners.svg?react';
import WalletSVG from '@svg/wallet.svg?react';

export const NAV_LINKS = [
    { to: '/', Icon: HomeSVG, label: 'Главная' },
    { to: '/wallet', Icon: WalletSVG, label: 'Кошелек' },
    { to: '/cabinet', Icon: CabinetSVG, label: 'Кабинет' },
    { to: '/partners', Icon: PartnersSVG, label: 'Партнеры' },
    { to: '/news', Icon: NewsSVG, label: 'Новости' },
];
