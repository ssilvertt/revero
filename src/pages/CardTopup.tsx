import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BanksList } from '../components/BanksList.tsx';
import { AnimatedButton } from '../components/ui/AnimatedButton.tsx';
import RectsmallSVG from '@svg/rectsmall.svg?react';
import RectbigSVG from '@svg/rectbig.svg?react';
export function CardTopup() {
    const location = useLocation();
    const inputValue = location.state?.inputValue || '1000';
    useEffect(() => window.scrollTo(0, 0), []);
    return (
        <motion.div
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <AnimatedButton className="flex bg-gradient-to-b from-[#4202FF] to-[#3891FF] items-center rounded-xl py-[10px] px-4 justify-center text-white ml-4 mt-5">
                <Link to="/maintopup">
                    <p className="font-proxima text-[15.98px] font-bold leading-[110%] tracking-[-2%] ml-1">
                        К вводу суммы
                    </p>
                </Link>
            </AnimatedButton>

            <div className="border-t-2 border-active rounded-t-2xl pt-6 mt-4"></div>

            <div className="p-4">
                <div className="flex bg-gradient-to-b from-[#4205FF] to-[#3891FF] items-center rounded-[16.39px] py-[16px] justify-between text-white border-t-[1px] border-[#3D4AFF] px-7 relative overflow-hidden mb-4">
                    <div className="flex items-center z-10">
                        <p className="font-proxima text-[21.46px] font-bold leading-[110%] tracking-[-2%] ml-2">
                            Сумма пополнения:
                        </p>
                    </div>
                    <div className="flex items-baseline">
                        <p className="text-[21.46px] leading-[110%] tracking-[-2%] font-proxima font-bold">
                            {inputValue}
                        </p>
                        <p className="text-[21.46px] leading-[110%] tracking-[-2%] font-proxima">₽</p>
                    </div>

                    <div className="absolute right-1 top-1/2 transform -translate-y-1/3 flex items-center justify-end pr-1">
                        <RectbigSVG className="translate-x-1 -ml-1" />
                        <RectsmallSVG className="-translate-y-2" />
                    </div>
                </div>

                <p className="font-proxima text-[20px] font-bold leading-[110%} tracking-[-2%]">Выберите ваш банк</p>

                <BanksList />
            </div>
        </motion.div>
    );
}
