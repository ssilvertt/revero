import React from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import { Header } from '../components/Header.tsx';
import EmblaCarousel from '../components/ui/Carousel/Carousel.tsx';
import '../components/ui/Carousel/css/embla.css';
import LiveSVG from '@svg/live.svg?react';
import { LiveCard } from '../components/ui/LiveCard.tsx';
import ArrowSVG from '@svg/arrow.svg?react';
import ArrowblurSVG from '@svg/arrowblur.svg?react';
export function Cabinet() {
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    
    const liveCardData = [
        { username: "User1", action: "Пополнение счета", amount: "99914194 ₽", time: "Несколько секунд назад" },
        { username: "User2", action: "Вывод средств", amount: "50000 ₽", time: "2 минуты назад" },
        { username: "User3", action: "Пополнение счета", amount: "75000 ₽", time: "5 минут назад" },
    ];
    
    return (
        <div>
            <Header />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <div className="w-full flex justify-center">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>
            <div className="flex ml-6 gap-x-1 items-center mt-4">
                <LiveSVG />
                <p className="font-proxima text-[16px] font-bold leading-[110%] tracking-[-2%]">Live</p>
            </div>
            <div className="flex flex-col mx-4 mt-4">
                {liveCardData.map((data, index) => (
                    <React.Fragment key={index}>
                        <div className={`
                            ${index === liveCardData.length - 1 ? 'opacity-30' : ''}
                            ${index === liveCardData.length - 2 ? 'opacity-80' : ''}
                        `}>
                            <LiveCard
                                username={data.username}
                                action={data.action}
                                amount={data.amount}
                                time={data.time}
                            />
                        </div>
                        {index < liveCardData.length - 1 && (
                            <div className="w-full h-px bg-[rgb(27,38,69)] rounded-[22px] my-1"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            
            <div className='flex flex-row mx-4 mt-5 items-center justify-between'>
                <p className='font-proxima text-white text-[15px] leading-[110%] tracking-[-2%] font-bold'>Тарифы и
                    условия</p>
                <p className='text-[#8F97AE] font-proxima text-white text-[15px] leading-[110%] tracking-[-2%] font-bold'>DAO?</p>
            </div>
            <div
                className="border-b border-t border-[#2F364A] backdrop-blur-[18px] bg-[linear-gradient(45deg,_rgba(255,255,255,0.06)_5.646%,_rgba(94,87,87,0.15)_94.354%)] mt-8 flex justify-between pt-[11px] pb-3 bg-opacity-50 px-4 items-center">
                <p className="text-[15px] font-bold font-proxima leading-[110%] tracking-[-2%] relative opacity-100">
                    Страховый фонд 500.00₽
                </p>
                <div className="relative w-6 h-6">
                    <ArrowSVG className="absolute inset-0" />
                    <ArrowblurSVG className="absolute inset-0 transform translate-x-[-10px] translate-y-[-10px]" />
                </div>
            </div>
        </div>
    );
}