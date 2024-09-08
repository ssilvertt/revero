import { Header } from '../components/Header.tsx';
import { NewsCard } from '../components/ui/NewsCard.tsx';
import { motion } from 'framer-motion';
export function News() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
            <Header />
            <div className="border-t-2 border-active rounded-t-2xl pt-6 "></div>

            <p className="font-proxima text-[20px] leading-[24px] text-center">Новости Revero</p>

            <p className="font-proxima text-[15px] leading-[18px] text-center mx-4 mt-2">
                Оставайтесь в курсе всех актуальных событий и последних новостей о нашей компании
            </p>

            <div className="w-full flex justify-center mt-4">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>
            <p className="font-proxima text-[20px] font-bold leading-[24px] mt-2 mx-2">2024</p>
            <div className="flex flex-col gap-y-2 px-2">
                <NewsCard
                    type="text"
                    date="Авг 1, 2024 11:35"
                    title="Страховой фонд нашей компании защищает ваши вклады"
                    content="Теперь вы полностью под защитой нашей страховой системы. Наши партнеры, а также администрация компании обеспечит защиту ваших средств"
                    buttonText="Читать статью"
                />

                <NewsCard type="image" imageUrl="src/assets/imgs/ton.png" imageAlt="Описание новостного изображения" />
                <NewsCard
                    type="text"
                    date="Авг 1, 2024 11:35"
                    title="Страховой фонд нашей компании защищает ваши вклады"
                    content="Теперь вы полностью под защитой нашей страховой системы. Наши партнеры, а также администрация компании обеспечит защиту ваших средств"
                    buttonText="Читать статью"
                />

                <NewsCard type="image" imageUrl="src/assets/imgs/ton.png" imageAlt="Описание новостного изображения" />
                <NewsCard
                    type="text"
                    date="Авг 1, 2024 11:35"
                    title="Страховой фонд нашей компании защищает ваши вклады"
                    content="Теперь вы полностью под защитой нашей страховой системы. Наши партнеры, а также администрация компании обеспечит защиту ваших средств"
                    buttonText="Читать статью"
                />

                <NewsCard type="image" imageUrl="src/assets/imgs/ton.png" imageAlt="Описание новостного изображения" />
            </div>
            <div className="h-16"></div>
        </motion.div>
    );
}
