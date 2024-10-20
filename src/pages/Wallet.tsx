import { BalanceCard } from '../components/BalanceCard.tsx';
import { Header } from '../components/Header.tsx';
import { Transaction } from '../components/ui/Transaction.tsx';
import { motion } from 'framer-motion';
export function Wallet() {
   
    return (
        <motion.div
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Header />
            
            <div className="border-t-2 border-active rounded-t-2xl pt-6"></div>
            <BalanceCard />
            
            <div className=" ">
                <div className="h-[130px] rounded-[14px] backdrop-blur-[45.31px] bg-[#1111118C] mx-1 pt-4 mt-10">
                    <p className="font-proxima text-[20px] font-bold leading-[110%] text-center ">История транзакций</p>
                    <div className="h-px rounded-[22px] bg-[#1B2645] mx-1 -translate-y-[2px]"></div>
                    <div className="h-px w-[70%] mt-2 rounded-[22px] bg-[#3B3C40] mx-auto"></div>
                    <div className="flex w-[65%] mt-2 justify-between mx-auto">
                        <p className="font-proxima text-[10px] leading-[110%]">Статус</p>
                        <p className="font-proxima text-[10px] leading-[110%]">Дата</p>
                        <p className="font-proxima text-[10px] leading-[110%]">Сумма</p>
                    </div>
                </div>
            </div>
            <div className="h-px rounded-[22px] mt-5 bg-[#1B2645] mx-1 -translate-y-[2px]"></div>
            
            <Transaction type="incoming" status="accepted" amount={1000} />
            <Transaction type="withdrawal" status="failed" amount={1000} />
            <Transaction type="incoming" status="pending" amount={1000} />
            <Transaction type="incoming" status="accepted" amount={1000} />
            <Transaction type="withdrawal" status="pending" amount={1000} />
        </motion.div>
    );
}
