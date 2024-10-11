import { motion } from 'framer-motion';
import { Header } from '../components/Header.tsx';
import { FundCard } from '../components/ui/FundCard.tsx';

export function Fund() {
    return (
        <motion.div
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Header />
            <div className="border-t-2 border-active rounded-t-2xl pt-6 mt-2"></div>
            <FundCard />
            <div className="ml-4 mt-7 flex items-center">
                <div className="relative w-[43px] h-[43px] mr-2">
                    <div
                        className="absolute left-0 top-0 w-[43px] h-[43px] bg-gradient-to-b from-[#4200FF] to-[#3891FF] rounded-[7px] opacity-54"
                        style={{ filter: 'blur(41.8px)' }}
                    ></div>

                    <div className="absolute left-0 top-0 bg-gradient-to-b from-[#410FFF] to-[#3891FF] rounded-[7px] w-[43px] h-[43px] flex items-center justify-center">
                        <p className="font-proxima text-[40.71px] font-bold leading-[50px] text-white mt-[2px]">?</p>
                    </div>
                </div>

                <p className="font-proxima text-[15px] font-bold leading-[19px]">Что такое страховой фонд платформы?</p>
            </div>
            <div className='mx-4 mt-4'>
                <p className='font-proxima text-[12px] leading-[15px] text-left text-[#C1C1C1]'>
                    Страховой фонд компании Revero формируется из процентов
                    дохода наших инвесторов, также из личного дохода платформы.
                    Мы часто привлекаем различных спонсоров в нашу платформу
                    которые также имеют огромный вклад в наш страховой фонд.
                    В случае любых случайных происшествий мы распределим
                    страховой фонд между всеми участниками нашей компании
                    что гарантирует полную безопасность средств наших вкладчиков.
                </p>
            </div>
        </motion.div>
    );
}
