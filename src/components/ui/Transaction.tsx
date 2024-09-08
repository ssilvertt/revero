import IncomingSVG from '@svg/incoming.svg?react';
import WithdrawalSVG from '@svg/withdrawal.svg?react';
import PendingSVG from '@svg/pending.svg?react';
import SuccessminiSVG from '@svg/successmini.svg?react';
import FailedminiSVG from '@svg/failedmini.svg?react';
import PendingminiSVG from '@svg/pendingmini.svg?react';

type TransactionType = 'withdrawal' | 'incoming';
type TransactionStatus = 'accepted' | 'pending' | 'failed';

interface TransactionProps {
    type: TransactionType;
    status: TransactionStatus;
    amount: number;
}

export function Transaction({ type, status, amount }: TransactionProps) {
    const getIcon = () => {
        if (status === 'pending') {
            return <PendingSVG />;
        }
        return type === 'incoming' ? <IncomingSVG /> : <WithdrawalSVG />;
    };

    const getTextColor = () => {
        if (status === 'pending') return 'text-yellow-500';
        if (status === 'failed') return 'text-red-500';
        return type === 'incoming' ? 'text-green-500' : 'text-red-500';
    };

    const getStatusIcon = () => {
        switch (status) {
            case 'accepted':
                return <SuccessminiSVG />;
            case 'failed':
                return <FailedminiSVG />;
            case 'pending':
                return <PendingminiSVG />;
            default:
                return null;
        }
    };

    return (
        <div className="flex items-center justify-between rounded-lg shadow-sm pr-4">
            <div className="flex items-center ">
                <div className={`${getTextColor()}`}>{getIcon()}</div>
                <div className="flex flex-col gap-y-2 -translate-x-1">
                    <p className="text-[19.2px] font-bold leading-[110%] tracking-[-2%]">Банковская карта</p>
                    <p className="text-[12.8px] leading-[110%] tracking-[-2%] text-[#7B8396]">535・・・・952</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-y-2">
                <p className="text-[12.8px] leading-[110%] tracking-[-2%] text-[#7B8396] mt-3">
                    1 ноября 2022 г. | 16:52
                </p>
                <div className="flex items-center gap-x-[2px]">
                    <p className={`font-proxima text-[19.2px] leading-[110%] tracking-[-2%] ${getTextColor()}`}>
                        {type === 'incoming' ? '+' : '-'}
                        {amount.toFixed(0)}
                    </p>
                    <div className="">{getStatusIcon()}</div>
                </div>
            </div>
        </div>
    );
}
