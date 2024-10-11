import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CopyButton } from './CopyButton.tsx';
import { PaymentCard } from './PaymentCard.tsx';
import CardiconSVG from '@svg/cardicon.svg?react';
import VerifedSVG from '@svg/verifed.svg?react';
import OutlinecardSVG from '@svg/outlinecard.svg?react';
import WarningSVG from '@svg/warning.svg?react';
import { AnimatedButton } from './ui/AnimatedButton.tsx';
import Cryptowallet from '@svg/cryptowallet.svg?react';

interface TopupProps {
    onClose: () => void;
    isCrypto?: boolean;
}

export function TopupContent({ onClose, isCrypto = false }: TopupProps) {
    const [copiedText, setCopiedText] = useState<string>('');

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            setTimeout(() => setCopiedText(''), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="px-8 py-6 text-white flex flex-col">
            <p className="font-proxima text-[28.24px] leading-[34px]">Пополнение</p>

            <PaymentCard amount={15000} onClose={onClose} />

            <div className="box-border border-2 border-solid border-[#282A32] flex  rounded-[25.88px] opacity-32 items-center py-1 mt-5 pl-6 gap-x-2">
                {isCrypto ? <Cryptowallet className="" /> : <CardiconSVG className="mt-1" />}

                <p className="text-[18.82px] font-bold font-proxima leading-[23px]">
                    {' '}
                    {isCrypto ? <span>Перевод на кошелек</span> : <span>Перевод на карту банка</span>}{' '}
                </p>
            </div>

            <p className="font-proxima text-[15px] leading-[18px] mt-4">Номер для перевода</p>
            <motion.div
                className="box-border border-2 border-solid border-[#282A32] flex items-center rounded-[25.88px] opacity-32 mt-1"
                whileTap={{ scale: 0.98 }}
                onClick={() => copyToClipboard('2200 2000 2000 2000')}
            >
                <VerifedSVG className="ml-2" />
                <p className="text-[15px] font-bold font-proxima leading-[18px] ml-4">2200 2000 2000 2000</p>
                <div className="ml-auto mr-3 translate-y-px">
                    <CopyButton />
                </div>
            </motion.div>

            <p className="font-proxima text-[15px] leading-[18px] mt-1">Точная сумма перевода</p>
            <motion.div
                className="box-border border-2 border-solid border-[#282A32] flex items-center rounded-[25.88px] opacity-32 mt-1"
                whileTap={{ scale: 0.98 }}
                onClick={() => copyToClipboard('1500₽')}
            >
                <OutlinecardSVG className="ml-2" />
                <p className="text-[15px] font-bold font-proxima leading-[18px] ml-[14px]">1500₽</p>
                <div className="ml-auto mr-3 translate-y-px">
                    <CopyButton />
                </div>
            </motion.div>

            <div className="w-full rounded-[35px] mt-2">
                <div className="mt-2 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <WarningSVG className="w-11 h-11" />
                    </div>
                    <p className="flex-grow font-proxima text-xs leading-tight text-[#FF535A]">
                        Внимание! После того как вы совершили перевод денежных средств на карту платформы, отправьте чек
                        перевода нашему менеджеру нажав на кнопку «Отправить чек».
                    </p>
                </div>
            </div>

            <div className="flex justify-between mt-3">
                <AnimatedButton className="relative" onClick={onClose}>
                    <div className="absolute inset-0 rounded-[25.88px] bg-[#FF535A] opacity-30 blur-[9.41px]"></div>
                    <div className="relative rounded-[25.88px] bg-[#FF535A] font-proxima text-[23.53px] font-bold leading-[29px] px-3 py-1 text-white">
                        Отмена
                    </div>
                </AnimatedButton>

                <AnimatedButton className="relative">
                    <div className="absolute inset-0 rounded-[25.88px] bg-[#869FFE] opacity-30 blur-[9.41px]"></div>
                    <div className="relative rounded-[25.88px] bg-[#869FFE] font-proxima text-[23.53px] font-bold leading-[29px] px-3 py-1 text-white">
                        Отправить чек
                    </div>
                </AnimatedButton>
            </div>

            <AnimatePresence>
                {copiedText && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
                    >
                        Скопировано: {copiedText}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
