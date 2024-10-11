import { useEffect } from 'react';
import { Header } from '../components/Header.tsx';
import { NewsCard } from '../components/ui/NewsCard.tsx';
import { motion } from 'framer-motion';
export function News() {
    useEffect(() => window.scrollTo(0, 0), []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Header />
            <div className="border-t-2 border-active rounded-t-2xl pt-6 "></div>

            <div className="flex justify-center items-center gap-x-[6px]">
                <p className="font-proxima text-[20px] leading-[24px]">Новости</p>
                <div className="relative mt-px">
                    <p className="font-proxima text-[20px] leading-[24px] text-center bg-gradient-to-b from-[#412EFF] to-[#3B70FF] text-transparent bg-clip-text font-bold">
                        Revero
                    </p>

                    <p className="font-proxima text-[20px] leading-[24px] text-center text-[#412EFF] absolute top-0 left-0 blur-[10px] font-bold">
                        Revero
                    </p>
                </div>
            </div>

            <p className="font-proxima text-[15px] leading-[18px] text-center mx-4 mt-2">
                Оставайтесь в курсе всех актуальных событий и последних новостей о нашей компании
            </p>

            <div className="w-full flex justify-center mt-4">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>
            <p className="font-proxima text-[20px] font-bold leading-[24px] mt-4 mx-4">2024</p>
            <div className="flex flex-col gap-y-2 mt-4 px-2">
                <NewsCard type="image" imageUrl="src/assets/imgs/ton.png" imageAlt="Описание новостного изображения" />
                <NewsCard
                    type="text"
                    date="Авг 1, 2024 11:35"
                    title="Инвестиционная платформа Revero добавила поддержку монеты TON"
                    content="Инвесторы Reverо теперь смогут использовать монету Топcoin для стейкинга и вывода своих средств"
                    buttonText="Читать статью"
                />

                <NewsCard
                    type="image"
                    imageUrl="src/assets/imgs/safetyfund.png"
                    imageAlt="Описание новостного изображения"
                />
                <NewsCard
                    type="text"
                    date="Авг 1, 2024 11:35"
                    title="Страховой фонд нашей компании защищает ваши вклады"
                    content="Теперь вы полностью под защитой нашей страховой системы. Наши партнеры, а также администрация компании обеспечит защиту ваших средств"
                    buttonText="Читать статью"
                />

                <NewsCard
                    type="image"
                    imageUrl="src/assets/imgs/newhorizons.png"
                    imageAlt="Описание новостного изображения"
                />
                <NewsCard
                    type="text"
                    date="Авг 3, 2024 10:45"
                    title="Мы ищем новые горизонты в инвестициях"
                    content="Наша команда активно мониторит рынок монет, альткоинов а также мемкоинов и перспективных проектов, позволяя приумножать ваши средства, ежедневно"
                    buttonText="Читать статью"
                />

                <NewsCard
                    type="image"
                    imageUrl="src/assets/imgs/staking.png"
                    imageAlt="Описание новостного изображения"
                />
                <NewsCard
                    type="text"
                    date="Авг 4, 2024 9:05"
                    title="Стейкинг с Reveго уже доступен каждому"
                    content="Попробуйте себя в инвестициях с нашей замечательной платформой прямо в Telegram, мы первые и единственные на рынке!"
                    buttonText="Читать статью"
                />
            </div>
            <div className="h-16"></div>
        </motion.div>
    );
}
