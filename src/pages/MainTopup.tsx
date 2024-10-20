import { useEffect, useState } from 'react';
import ChevronleftSVG from '@svg/chevronleft.svg?react';
import TonbuttonSVG from '@svg/tonbutton.svg?react';
import Walletbutton from '@svg/walletbutton.svg?react';
import RectsmallSVG from '@svg/rectsmall.svg?react';
import RectbigSVG from '@svg/rectbig.svg?react';
import MobileNumberInput from '../components/MobileInput.tsx';
import { PriceCard } from '../components/PriceCard.tsx';
import { AnimatedButton } from '../components/ui/AnimatedButton.tsx';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { NotificationBanner } from '../components/ui/NotificationBanner.tsx';

export function MainTopup() {
    const [inputValue, setInputValue] = useState('0');
    const [showNotification, setShowNotification] = useState(false);
    const navigate = useNavigate();
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
    useEffect(() => window.scrollTo(0, 0), []);
    const handleNavigation = (path: string) => {
        if (parseInt(inputValue) < 300) {
            setShowNotification(true);
        } else {
            navigate(path, { state: { inputValue } });
        }
    };

    return (
        <motion.div
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <AnimatedButton className="flex bg-gradient-to-b from-[#4202FF] to-[#3891FF] items-center rounded-xl py-[10px] px-4 justify-center text-white ml-4 mt-5">
                <Link to="/wallet">
                    <p className="font-proxima text-[15.98px] font-bold leading-[110%] tracking-[-2%] ml-1">
                        Вернуться назад
                    </p>
                </Link>
            </AnimatedButton>
            
            <div className="border-t-2 border-active rounded-t-2xl pt-6 mt-4"></div>
            <div className="p-4">
                <p className="text-white font-proxima text-[25.82px] font-bold leading-[110%] tracking-[-2%] text-center mb-6">
                    Введите сумму пополнения чтобы увидеть доступный <br />{' '}
                    <span className="bg-gradient-to-b from-[#4201FF] to-[#3987FF] rounded-lg px-1">Бонус</span> на
                    депозит:
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
                    <AnimatedButton
                        className="flex bg-gradient-to-b from-[#4205FF] to-[#3891FF] items-center rounded-[16.39px] py-[10px] justify-between text-white border-t-[1.6px] border-[#3D4AFF] px-7 relative overflow-hidden"
                        onClick={() => handleNavigation('/cryptotopup')}
                    >
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
                    <AnimatedButton
                        className="flex bg-gradient-to-b from-[#4205FF] to-[#3891FF] items-center rounded-[16.39px] py-[10px] justify-between text-white border-t-[1.6px] border-[#3D4AFF] px-7 relative overflow-hidden mb-4"
                        onClick={() => handleNavigation('/cardtopup')}
                    >
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
            <NotificationBanner
                show={showNotification}
                onClose={() => setShowNotification(false)}
                title="Ошибка"
                description="Минимальная сумма от 300₽"
                type="warning"
            />
        </motion.div>
    );
}
