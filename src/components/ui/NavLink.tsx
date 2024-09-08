import { ComponentType } from 'react';
import { Link } from 'react-router-dom';

export interface NavLinkProps {
    to: string;
    Icon: ComponentType;
    label: string;
}

export function NavLink({ to, Icon, label }: NavLinkProps) {
    return (
        <>
            <Link to={to} className="flex flex-col items-center text-gray-600 hover:text-blue-500">
                <div className="h-6 flex items-center justify-center mb-2">
                    <Icon />
                </div>
                <span className="text-[15px] text-white leading-[110%] tracking-[-2%] font-bold font-proxima">
                    {label}
                </span>
            </Link>
        </>
    );
}
