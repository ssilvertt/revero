import { useState, useEffect } from 'react';
import ZadnikSVG from '@svg/zadnik.svg?react';
import OutlinecardSVG from '@svg/outlinecard.svg?react';

interface PaymentCardProps {
    amount: number;
    onClose: () => void;
}

export function PaymentCard({ amount, onClose }: PaymentCardProps) {
    const [timeLeft, setTimeLeft] = useState(600);

    useEffect(() => {
        if (timeLeft <= 0) {
            onClose();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onClose]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full h-[90px] bg-[#869FFE] rounded-[25.88px] mt-5 p-2 flex justify-between relative overflow-hidden">
            <div className="absolute right-0">
                <ZadnikSVG className="w-full h-full" />
            </div>

            <div className="flex flex-col justify-between w-full relative z-10">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-start ml-1">
                        <OutlinecardSVG />
                        <p className="font-proxima text-[16.41px] font-bold leading-[20px] ml-2">Revero</p>
                    </div>
                    <span className="font-proxima text-[16.41px] font-bold leading-[20px] mr-3">
                        {formatTime(timeLeft)}
                    </span>
                </div>
                <div className="flex justify-between items-end w-full mt-2">
                    <div className="ml-2 translate-y-1">
                        <p className="font-proxima text-[25px] font-bold leading-[30px]">{amount}</p>
                        <p className="text-[9.94px] font-proxima leading-3 mb-1">Без комиссии</p>
                    </div>
                    <span className="text-[9.94px] font-proxima leading-3 mb-1 mr-3 translate-y-1">Заявка активна</span>
                </div>
            </div>
        </div>
    );
}
