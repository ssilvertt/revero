import CabinetSVG from '@svg/cabinet.svg?react';
import { Link } from 'react-router-dom';
import { NavLink, NavLinkProps } from './NavLink';

interface NavigationProps {
    links: NavLinkProps[];
}

export function Navigation({ links }: NavigationProps) {
    return (
        <nav className="bg-nav shadow-lg relative rounded-t-[20px] h-[90px]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[96px] h-[42px] bg-main rounded-b-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-[51px]">
                <div className="absolute w-[84px] h-[84px] rounded-full bg-gradient-to-b from-[#4200ff] to-[#3891ff] opacity-[24%] blur-xl"></div>
                <Link
                    to="/cabinet"
                    className="relative flex items-center justify-center w-[84px] h-[84px] rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-b from-[#4200ff] to-[#3891ff] text-white hover:from-[#3700d6] hover:to-[#3182e8] transition-colors"
                >
                    <CabinetSVG className="w-10 h-10" />
                </Link>
            </div>
            <ul className="flex justify-around items-center h-full pt-2 px-4">
                {links.map((link, index) => (
                    <li key={link.to} className="flex flex-col items-center w-1/5">
                        {index === 2 ? (
                            <>
                                <div className="h-[52px]"></div>
                                <span className="text-[15px] text-white leading-[110%] tracking-[-2%] font-bold font-proxima -mt-[20px]">
                                    Кабинет
                                </span>
                            </>
                        ) : (
                            <NavLink {...link} />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
