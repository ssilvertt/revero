import StaffSVG from '@svg/staff.svg?react';
import WalletinviteSVG from '@svg/walletinvite.svg?react';

export function PartnerCard({ type = 'staff', title = 'Партнеры', value = 0 }) {
    const IconComponent = type === 'walletinvite' ? WalletinviteSVG : StaffSVG;

    return (
        <div className="flex rounded-[38px] bg-[#131D39] mx-5 py-1">
            <div className="relative w-[44px] h-[44px] bg-[rgb(24,38,77)] rounded-full flex items-center justify-center ml-5">
                <IconComponent className="absolute" />
            </div>
            <div className="flex flex-col justify-center gap-y-px ml-3">
                <p className="text-[13px] font-proxima font-bold leading-[110%] tracking-[-2%] text-[#8A91BD]">
                    {title}
                </p>
                <p className="text-[13px] font-proxima font-bold leading-[110%] tracking-[-2%]">{value}</p>
            </div>
        </div>
    );
}
