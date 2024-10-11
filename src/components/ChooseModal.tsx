import { useState } from 'react';
import ChevronleftSVG from '@svg/chevronleft.svg?react';
import TonbuttonSVG from '@svg/tonbutton.svg?react';
import Walletbutton from '@svg/walletbutton.svg?react';
import RectsmallSVG from '@svg/rectsmall.svg?react';
import RectbigSVG from '@svg/rectbig.svg?react';
import MobileNumberInput from './MobileInput';
import { AnimatedButton } from './ui/AnimatedButton';

interface PriceCardProps {
    amount: number;
    isPopular?: boolean;
    onClick: (amount: number) => void;
}

function PriceCard({ amount, isPopular = false, onClick }: PriceCardProps) {
    return (
        <AnimatedButton className="relative" onClick={() => onClick(amount)}>
            {isPopular && (
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#4204FF] to-[#3992FF] text-white text-[8.45px] leading-[9.34px] font-bold font-proxima py-1 px-2 rounded-[15.5px] before:content-[""] before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-[#4204FF] before:to-[#3992FF] before:blur-[10px] before:opacity-70'>
                    ПОПУЛЯРНО
                </div>
            )}
            <div
                className={`rounded-[15.5px] bg-[#18264D] flex py-3 px-1 justify-center cursor-pointer hover:bg-[#1e2f5d] transition-colors`}
            >
                <p className="text-[18.43px] font-bold leading-[110%] tracking-[-2%] text-white">
                    {amount.toLocaleString()} <span className="text-[#8B92A6]">₽</span>
                </p>
            </div>
        </AnimatedButton>
    );
}

export function ChooseModal() {
    const [inputValue, setInputValue] = useState('0');

    const amounts = [
        { value: 1000, isPopular: false },
        { value: 5000, isPopular: false },
        { value: 10000, isPopular: true },
        { value: 25000, isPopular: false },
        { value: 50000, isPopular: false },
        { value: 100000, isPopular: false },
    ];

    const handlePriceCardClick = (amount: number) => {
        setInputValue(amount.toString());
    };

    return (
        <div className="p-4">
            <AnimatedButton className="flex bg-gradient-to-b from-[#4202FF] to-[#3891FF] items-center rounded-xl py-[10px] w-[144px] justify-center text-white ml-4 mt-5">
                <p className="font-proxima text-[16.33px] font-bold leading-[110%] tracking-[-2%] ml-1">Вывести</p>
            </AnimatedButton>
            <div className="border-t-2 border-active rounded-t-2xl pt-6 mt-4"></div>

            <p className="text-white font-proxima text-[25.82px] font-bold leading-[110%] tracking-[-2%] text-center mb-6">
                Введите сумму пополнения чтобы увидеть доступный <br />{' '}
                <span className="bg-gradient-to-b from-[#4201FF] to-[#3987FF] rounded-lg px-1">Бонус</span> на депозит:
            </p>

            <MobileNumberInput value={inputValue} onChange={setInputValue} />

            <div className="grid grid-cols-3 gap-x-2 gap-y-3">
                {amounts.map((amount, index) => (
                    <PriceCard
                        key={index}
                        amount={amount.value}
                        isPopular={amount.isPopular}
                        onClick={handlePriceCardClick}
                    />
                ))}
            </div>

            <p className="font-proxima text-white text-[15px] font-bold leading-[110%] tracking-[-2%] text-center mt-6">
                Каким методом хотите сделать <br />
                депозит?
            </p>
            <div className="flex flex-col px-5 gap-y-4 mt-4">
                <AnimatedButton className="flex bg-gradient-to-b from-[#4205FF] to-[#3891FF] items-center rounded-[16.39px] py-[10px] justify-between text-white border-t-[1.6px] border-[#3D4AFF] px-7 relative overflow-hidden">
                    <div className="flex items-center z-10">
                        <TonbuttonSVG />
                        <p className="font-proxima text-[16.33px] font-bold leading-[110%] tracking-[-2%] ml-2">
                            Криптовалюта
                        </p>
                    </div>
                    <div className="flex items-center z-10">
                        <ChevronleftSVG />
                    </div>
                    <div className="absolute right-1 top-1/2 transform -translate-y-1/3 flex items-center justify-end pr-1">
                        <RectbigSVG className="translate-x-1 -ml-1" />
                        <RectsmallSVG className="-translate-y-2" />
                    </div>
                </AnimatedButton>
                <AnimatedButton className="flex bg-gradient-to-b from-[#4205FF] to-[#3891FF] items-center rounded-[16.39px] py-[10px] justify-between text-white border-t-[1.6px] border-[#3D4AFF] px-7 relative overflow-hidden mb-4">
                    <div className="flex items-center z-10">
                        <Walletbutton />
                        <p className="font-proxima text-[16.33px] font-bold leading-[110%] tracking-[-2%] ml-2">
                            Банковская карта
                        </p>
                    </div>
                    <div className="flex items-center z-10">
                        <ChevronleftSVG />
                    </div>
                    <div className="absolute right-1 top-1/2 transform -translate-y-1/3 flex items-center justify-end pr-1">
                        <RectbigSVG className="translate-x-1 -ml-1" />
                        <RectsmallSVG className="-translate-y-2" />
                    </div>
                </AnimatedButton>
            </div>
        </div>
    );
}
