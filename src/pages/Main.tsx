import { useState } from 'react';
import { DepositCard } from '../components/DepositCard.tsx';
import { Header } from '../components/Header.tsx';
import MobileIncomeChart from '../components/ui/Chart.tsx';
import { IncomeStats } from '../components/ui/IncomeStats.tsx';
import { StatCard } from '../components/ui/StatCard.tsx';
import { motion } from 'framer-motion';
export function Main() {
    const [balance] = useState(31113);

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <Header />
            <div className="flex justify-between px-2 items-center">
                <div className="rounded-[8.61px] shadow-[1.48px_2.08px_4.04px_0px_rgba(0,0,0,0.25)] bg-[rgb(20,29,55)]  mt-5 mb-5 w-[190px] flex flex-col py-1">
                    <p className="font-proxima text-[11.22px] font-bold leading-[110%] tracking-[-2%] text-center">
                        Ваш баланс
                    </p>
                    <p className="text-[30.76px] font-bold leading-[110%] tracking-[-2%] text-center">
                        {balance.toFixed(0)}₽
                    </p>
                </div>
                <motion.button
                    className="text-[16px] font-bold leading-[110%] tracking-[-2%] rounded-[14px] bg-gradient-to-b from-[#4201FF] to-[#3891FF] h-11 px-8 text-white shadow-lg"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                    Пополнить
                </motion.button>
            </div>

            <div className="flex flex-col h-full relative w-full">
                <div className="absolute left-0 right-0 top-0 h-2 -mt-2 bg-active opacity-20 blur-sm rounded-t-[10px]"></div>
                <div className="border-t-2 border-active rounded-t-2xl pt-6"></div>
                <div className="mx-2">
                    <DepositCard />
                </div>
                <div className="border border-[rgba(255,255,255,0.2)] backdrop-blur-[18px] bg-[linear-gradient(45deg,_rgba(255,255,255,0.06)_5.646%,_rgba(94,87,87,0.15)_94.354%)] mt-8 flex justify-center pt-[11px] pb-3 bg-opacity-50">
                    <p className="text-[15px] font-bold font-proxima leading-[110%] tracking-[-2%] relative opacity-100">
                        Заработано на платформе
                    </p>
                </div>
                <div className="mx-2 mt-3">
                    <IncomeStats />
                </div>
                <div className="mx-2 my-5 ">
                    <MobileIncomeChart />
                </div>
                <div className="mx-2 mt-1 flex flex-col gap-y-3">
                    <StatCard variant="invest" />
                    <StatCard variant="minimal" />
                    <StatCard variant="income" />
                </div>
                <div className="mb-20"></div>
            </div>
        </motion.div>
    );
}
