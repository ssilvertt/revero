import React from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import { Header } from '../components/Header.tsx';
import EmblaCarousel from '../components/ui/Carousel/Carousel.tsx';
import '../components/ui/Carousel/css/embla.css';
import LiveSVG from '@svg/live.svg?react';
import HeadphonesSVG from '@svg/headphones.svg?react';
import { InvestCardCarousel } from '../components/ui/InvestCardCarousel.tsx';
import { LiveCard } from '../components/ui/LiveCard.tsx';
import ArrowSVG from '@svg/arrow.svg?react';
import ArrowblurSVG from '@svg/arrowblur.svg?react';
import TelegramSVG from '@svg/telegram.svg?react';
import SmsSVG from '@svg/sms.svg?react';
import TrxSVG from '@svg/trx.svg?react';
import Tonsvg from '@svg/ton.svg?react';
import TetherroundSVG from '@svg/tetherround.svg?react';
export function Cabinet() {
    const OPTIONS: EmblaOptionsType = { dragFree: false, loop: true };
    const SLIDES = [
        { id: 1, imageUrl: 'src/assets/imgs/banners/banner1.png' },
        { id: 2, imageUrl: 'src/assets/imgs/banners/banner2.png' },
        { id: 3, imageUrl: 'src/assets/imgs/banners/banner3.png' },
        { id: 4, imageUrl: 'src/assets/imgs/banners/banner4.png' },
        { id: 5, imageUrl: 'src/assets/imgs/banners/banner5.png' },
    ];

    const liveCardData = [
        { username: 'User1', action: 'Пополнение счета', amount: '99914194 ₽', time: 'Несколько секунд назад' },
        { username: 'User2', action: 'Вывод средств', amount: '50000 ₽', time: '2 минуты назад' },
        { username: 'User3', action: 'Пополнение счета', amount: '75000 ₽', time: '5 минут назад' },
    ];

    return (
        <div>
            <Header />
            <div className="border-t-2 border-active rounded-t-2xl pt-6"></div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <div className="w-full flex justify-center mt-2">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>
            <div className="flex ml-6 gap-x-1 items-center mt-4">
                <LiveSVG />
                <p className="font-proxima text-[16px] font-bold leading-[110%] tracking-[-2%]">Live</p>
            </div>
            <div className="flex flex-col mx-4 mt-4 transition-all">
                {liveCardData.map((data, index) => (
                    <React.Fragment key={index}>
                        <div
                            className={`
                            ${index === liveCardData.length - 1 ? 'opacity-30' : ''}
                            ${index === liveCardData.length - 2 ? 'opacity-80' : ''}
                        `}
                        >
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

            <div className="flex flex-row mx-4 mt-8 items-center justify-between ">
                <p className="font-proxima text-white text-[15px] leading-[110%] tracking-[-2%] font-bold">
                    Тарифы и условия
                </p>
                <p className="text-[#8F97AE] font-proxima text-[15px] leading-[110%] tracking-[-2%] font-bold">DAO?</p>
            </div>
            <div className="border-b border-t border-[#2F364A] backdrop-blur-[18px] bg-[linear-gradient(45deg,_rgba(255,255,255,0.06)_5.646%,_rgba(94,87,87,0.15)_94.354%)] mt-2 flex justify-between pt-[11px] pb-3 bg-opacity-50 px-4 items-center">
                <p className="text-[15px] font-bold font-proxima leading-[110%] tracking-[-2%] relative opacity-100">
                    Страховый фонд 500.00₽
                </p>
                <div className="relative w-6 h-6">
                    <ArrowSVG className="absolute inset-0" />
                    <ArrowblurSVG className="absolute inset-0 transform translate-x-[-10px] translate-y-[-10px]" />
                </div>
            </div>
            <div className="mt-10 ">
                <InvestCardCarousel />
            </div>
            <div className="relative">
                <div
                    className="h-px rounded-[22px] mt-12 relative "
                    style={{
                        background:
                            'linear-gradient(64.13deg, rgb(40, 57, 105) -8.256%, rgba(32, 45, 83, 0) 43.375%, rgba(27, 38, 69, 0) 65.009%, rgb(40, 57, 105) 100%)',
                    }}
                >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background rounded-full flex items-center justify-center">
                        <img src="src/assets/imgs/HeaderLogo.png" alt="Divider icon" className="h-[43px] w-[111px]" />
                    </div>
                </div>
            </div>

            <div className="mx-4 border border-[#A3FFCC] rounded-[38px] bg-[#131D39] mt-12 h-[54px] flex items-center   ">
                <div className="w-11 h-11 bg-[#18264D] rounded-full flex items-center justify-center ml-5">
                    <HeadphonesSVG />
                </div>
                <div className="flex flex-col ml-4">
                    <div className="flex items-center gap-x-1">
                        <p className="font-proxima text-[#8A91BD] text-[13px] leading-[110%] tracking-[-2%]">
                            Онлайн-менеджер
                        </p>
                        <p className="font-proxima text-[10.46px] leading-[110%] tracking-[-2%] text-[#A2FFCC] bg-[#A3FFCC] bg-opacity-20 rounded-[20px] backdrop-blur-[21.5px] px-1 py-px">
                            Онлайн
                        </p>
                    </div>
                    <div className="flex gap-x-1">
                        <p className="font-proxima font-bold text-[13px] leading-[110%] tracking-[-2%]">
                            У вас возник вопрос?
                        </p>
                        <p className="font-proxima text-[13px] leading-[110%] tracking-[-2%] text-[#37BBFE] underline">
                            Подключиться
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mt-10">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>

            <div className="ml-4 mt-3 flex gap-x-2">
                <TelegramSVG />
                <div className="flex flex-col justify-center gap-y-1">
                    <p className="font-proxima text-[10px] font-bold leading-[110%] text-[#8A91BD]">Telegram форум</p>
                    <p className="font-proxima text-[10px] font-bold leading-[110%] text-[#37BBFE] underline">
                        Подписаться на чате
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center mt-3">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>

            <div className="ml-4 mt-3 flex gap-x-2">
                <div className="w-[35px] h-[35px] bg-[#18264D] rounded-full flex items-center justify-center">
                    <SmsSVG />
                </div>
                <div className="flex flex-col justify-center gap-y-1">
                    <p className="font-proxima text-[10px] font-bold leading-[110%] text-[#8A91BD]">Поддержка</p>
                    <div className="flex gap-x-[2px]">
                        <p className="font-proxima text-[10px] font-bold leading-[110%]">support@jetton.games или</p>
                        <p className="font-proxima text-[10px] leading-[110%] text-[#37BBFE] underline">
                            telegram manager
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-center gap-x-2 mt-10">
                <img className="w-[62.9px] h-[35.83px]" src="src/assets/imgs/visa.png" />
                <img className="w-[70.69px] h-[35.18px]" src="src/assets/imgs/mir.png" />
            </div>
            <div className="flex w-full justify-center gap-x-2 mt-4">
                <TrxSVG />
                <Tonsvg />
                <TetherroundSVG />
            </div>

            <p className="mt-12 font-gilroy text-[10px]  tracking-[2%] leading-3 text-[#A2A8CC] ml-6">
                © 2024 Revero | <span className="font-medium leading-[12.13px]">Все права защищены.</span>{' '}
            </p>
            {/* <InvestCard cryptoType="Tether" /> */}
            {/* <InvestCard cryptoType="Binance" /> */}
            {/* <InvestCard cryptoType="Ethereum" /> */}
            {/* <InvestCard cryptoType="Bitcoin" /> */}
            {/* <div className='mt-8'> */}
            {/*     <CarouselTest/> */}
            {/* </div> */}

            <div className="h-20"></div>
        </div>
    );
}
