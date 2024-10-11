import { useCallback, useEffect, useState } from 'react';
import { Header } from '../components/Header.tsx';
import UsericonSVG from '@svg/usericon.svg?react';
import MoneyiconSVG from '@svg/moneyicon.svg?react';
import ChainSVG from '@svg/chain.svg?react';
import { PartnerCard } from '../components/ui/PartnerCard.tsx';
import { StepCard } from '../components/ui/StepCard.tsx';
import { motion } from 'framer-motion';
export function Partners() {
    const [friendsAmount] = useState(1000);
    const [invitedMoney] = useState(999999);
    const [reflink] = useState('https://referaal/reflink/131313311313133');
    const [partners] = useState(0);
    const [activePartners] = useState(0);
    const [earned] = useState(0);
    const [copySuccess, setCopySuccess] = useState(false);
    useEffect(() => window.scrollTo(0, 0), []);
    const handleCopyClick = useCallback(() => {
        navigator.clipboard.writeText(reflink).then(
            () => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
            },
            (err) => {
                console.error('Failed to copy text: ', err);
            }
        );
    }, [reflink]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Header />
            <div className="border-t-2 border-active rounded-t-2xl pt-6 "></div>

            <img src="src/assets/imgs/invite1.png" className="px-5" />

            <div className="w-full flex justify-center mt-3">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>

            <div className="flex justify-around mt-4">
                <div className="flex gap-x-1 items-center">
                    <UsericonSVG />
                    <p className="text-[30px] font-bold leading-[37px]">{friendsAmount}</p>
                </div>
                <div className="flex gap-x-1 items-center">
                    <MoneyiconSVG />
                    <p className="text-[30px] font-bold leading-[37px]">{invitedMoney}₽</p>
                </div>
            </div>

            <div className="flex mx-5 gap-x-2 mt-8">
                <div
                    className="relative w-14 h-14 bg-[rgb(24,38,77)] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[rgb(34,48,87)] transition-colors"
                    onClick={handleCopyClick}
                >
                    <ChainSVG className="absolute" />
                    {copySuccess && (
                        <div className="absolute -top-8 left-12 transform -translate-x-1/2 bg-[#131D39] text-white px-2 py-1 rounded text-xs">
                            Скопировано!
                        </div>
                    )}
                </div>
                <div className="flex flex-col justify-center gap-y-1">
                    <p className="text-[15px] font-bold font-proxima leading-[18px]">Скопировать реферальнную ссылку</p>
                    <a className="text-[15px] font-proxima leading-[18px] text-[#3891FF]">{reflink}</a>
                </div>
            </div>

            <div className="w-full flex justify-center mt-4">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>
            <div className="flex justify-between mt-2 px-5 items-center">
                <p className="text-[15px] font-proxima leading-[18px]">Промо материалы</p>
                <button className="text-[12.85px] font-bold leading-[16px] bg-[#18264D] rounded-[4.46px] px-[6px] py-[4px]">
                    Получить
                </button>
            </div>

            <div className="w-full flex justify-center  mt-2">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>

            <div className="mt-5 flex flex-col gap-y-4">
                <PartnerCard type="staff" title="Партнеры" value={partners} />
                <PartnerCard type="staff" title="Активные партнеры" value={activePartners} />

                <PartnerCard type="walletinvite" title="Приглашения" value={earned} />
            </div>

            <div className="w-full flex justify-center  mt-5">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>

            <p className="font-proxima text-[25px] font-bold leading-[30px] text-center mt-2">Условия</p>

            <img src="src/assets/imgs/requirements1.png" className="px-5 mt-2" alt="requirements" />

            <p className="text-[15px] font-bold leading-[110%] tracking-[-2%] mt-3 ml-5">От вас требуется</p>

            <div className="mt-4 rounded-[15px] bg-[#131D39] mx-5 py-4 px-4 flex flex-col gap-y-2">
                <p className="text-[14px] font-bold leading-[110%] tracking-[-2%]">
                    Скопировать свою уникальную ссылку и отправить ее партнеру
                </p>
                <p className="text-[14px] opacity-50 text-[#3891FF] leading-[110%] tracking-[-2%]">
                    Выплаты начисляются автоматически при условии открытии вклада партнером
                </p>
            </div>

            <p className="text-[15px] font-bold leading-[110%] tracking-[-2%] mt-3 ml-5">От партнера требуется</p>
            <div className="flex flex-col gap-y-4 mt-2">
                <StepCard title="Перейти в бота по вашей ссылке" />
                <StepCard step={2} title="Пополнить свой кошелек от 300р" />
                <StepCard step={3} title="Открыть вклад по тарифу в боте" />
            </div>
            <p className="mt-5 font-gilroy text-[10px]  tracking-[2%] leading-3 text-[#A2A8CC] ml-6">
                © 2024 Revero | <span className="font-medium leading-[12.13px]">Все права защищены.</span>{' '}
            </p>

            <div className="h-14"></div>
        </motion.div>
    );
}
