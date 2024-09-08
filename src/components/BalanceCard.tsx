import CollectSVG from '@svg/collect.svg?react';
import PolygontopSVG from '@svg/polygontop.svg?react';
import PolygonbotSVG from '@svg/polygonbot.svg?react';
import RoundsleftSVG from '@svg/roundsleft.svg?react';
import RoundsrightSVG from '@svg/roundsright.svg?react';
import InvestSVG from '@svg/invest.svg?react';
import { useState } from 'react';
import { AnimatedButton } from './ui/AnimatedButton.tsx';
export function BalanceCard() {
    const [balance] = useState(500000);

    return (
        <div className="h-[220px] rounded-[40.51px] bg-gradient-to-b from-[rgb(48,48,48)] from-14.674% to-[rgb(15,15,15)] to-69.022% opacity-90 mx-1 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 -translate-y-28 translate-x-1/3">
                    <PolygontopSVG />
                </div>
                <div className="absolute top-0 -translate-y-24 translate-x-[64px]">
                    <PolygonbotSVG />
                </div>
                <div className="absolute right-0 translate-x-2 rotate-[-6.52deg] transform-y-1">
                    <RoundsrightSVG />
                </div>
                <div className="absolute left-0">
                    <RoundsleftSVG />
                </div>
            </div>

            <div className="relative z-10 flex flex-col justify-center mt-10">
                <p className="font-gilroy text-[15px] font-semibold leading-[18px] opacity-50 text-center">
                    Общий баланс
                </p>
                <p className="font-gilroy text-[40.39px] leading-[49px] text-center font-semibold">
                    ₽ {balance.toFixed(2)}
                </p>
                <div className="flex w-[80%] justify-between mx-auto mt-5">
                    <AnimatedButton className='flex bg-gradient-to-b from-[#4202FF] to-[#3891FF] items-center rounded-[59.28px] py-[10px] px-[25px]'>
                        <InvestSVG />
                        <p className="font-proxima text-[16.33px] font-bold leading-[110%] tracking-[-2%] ml-1">
                            Вывести
                        </p>
                    </AnimatedButton>
                   
                    <AnimatedButton className="flex bg-gradient-to-b from-[#4202FF] to-[#3891FF] items-center rounded-[59.28px] py-[10px] px-[25px] translate-x-2">
                        <CollectSVG />
                        <p className="font-proxima text-[16.33px] font-bold leading-[110%] tracking-[-2%] ml-1">
                            Пополнить
                        </p>
                    </AnimatedButton>
                </div>
            </div>
        </div>
    );
}
