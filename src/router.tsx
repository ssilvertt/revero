import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout.tsx';
import { Cabinet } from './pages/Cabinet.tsx';
import { Main } from './pages/Main.tsx';
import { News } from './pages/News.tsx';
import { Partners } from './pages/Partners.tsx';
import { Wallet } from './pages/Wallet.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Cabinet />,
            },
            {
                path: '/wallet',
                element: <Wallet />,
            },
            {
                path: '/cabinet',
                element: <Main />,
            },
            {
                path: '/partners',
                element: <Partners />,
            },
            {
                path: '/news',
                element: <News />,
            },
        ],
    },
]);
