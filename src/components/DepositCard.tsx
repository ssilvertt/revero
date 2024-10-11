import CartSVG from '@svg/cart.svg?react';
import BinanceSVG from '@svg/binance.svg?react';
import HrSVG from '@svg/hr.svg?react';
import InvestSVG from '@svg/invest.svg?react';
import CollectSVG from '@svg/collect.svg?react';
import CalcSVG from '@svg/calc.svg?react';
import { useState } from 'react';
import { useModal } from '../shared/hooks.ts';
import { InvestContent } from './InvestContent.tsx';
import { Modal } from './Modal.tsx';
import { NotificationBanner } from './ui/NotificationBanner.tsx';
import { ProgressBar } from './ui/ProgressBar.tsx';
import { AnimatedButton } from './ui/AnimatedButton.tsx';
export function DepositCard() {
    const [showBanner, setShowBanner] = useState(false);
    const { isOpen, openModal, closeModal } = useModal();
    return (
        <div
            className="w-full mx-auto border-t-[2.5px] border-[#282a35] rounded-[25px] relative overflow-hidden p-6"
            style={{
                backgroundColor: '#1c2133',
                backgroundImage: 'radial-gradient(circle at bottom right, var(--color-white), transparent 70%)',
                backgroundBlendMode: 'screen',
            }}
        >
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex gap-x-2 items-center">
                        <CartSVG />
                        <p className="font-proxima text-[21px] leading-[26px] tracking-normal">Ваш депозит</p>
                    </div>
                    <div className="flex items-end mt-5">
                        <p className="font-gilroy text-[40.84px] leading-[50px] ml-[px] font-semibold">10000</p>
                        <p className="opacity-50 text-[24.5px] leading-[30px] mb-2">₽</p>
                    </div>
                </div>
                <div className="flex -mt-5">
                    <BinanceSVG />
                </div>
            </div>
            <div className="flex justify-between items-center gap-x-1">
                <div className="flex">
                    <p className="font-proxima font-bold text-[18.24px] leading-[22px]">Накоплено:</p>
                    <p className="bg-[#16191E] px-2 rounded-[10px] text-[#5FFF9F]">34000₽</p>
                </div>
                <div className="flex">
                    <p className="font-proxima font-bold text-[18.24px] leading-[26px]">Прибыль:</p>
                    <p className="bg-[#16191E] px-2 rounded-[10px] text-[#5FFF9F]">+11%</p>
                </div>
            </div>
            <HrSVG className="mt-2" />
            <div className="flex justify-between mt-3 gap-x-4">
                <AnimatedButton
                    className="rounded-[10.5px] bg-gradient-to-b from-[#4204ff] to-[#2e9cfe] px-4 py-2 border-t border-[#3D4AFF] flex gap-x-1 items-center justify-center text-white flex-1 min-w-0"
                    onClick={() => openModal()}
                >
                    <InvestSVG className="flex-shrink-0" />
                    <p className="font-proxima font-bold text-[11.75px] leading-[110%] tracking-[-2%] whitespace-nowrap overflow-hidden text-ellipsis">
                        Инвестировать
                    </p>
                </AnimatedButton>
                <AnimatedButton
                    className="rounded-[10.5px] bg-gradient-to-b from-[#181921] to-[#181A22] px-4 py-2 border-t border-[#0F1014] flex gap-x-1 items-center justify-center text-white flex-1 min-w-0"
                    onClick={() => setShowBanner(true)}
                >
                    <CollectSVG className="flex-shrink-0" />
                    <p className="font-proxima font-bold text-[11.75px] leading-[110%] tracking-[-2%] whitespace-nowrap overflow-hidden text-ellipsis">
                        Собрать
                    </p>
                </AnimatedButton>
            </div>
            <HrSVG className="mt-2" />
            <div>
                <div className="flex mt-3 items-center gap-x-2">
                    <CalcSVG />
                    <p className="font-proxima text-[21px] leading-[26px] tracking-normal">Калькулятор дохода</p>
                </div>
                <div className="flex justify-between mt-1">
                    <div className="flex flex-col">
                        <p className="text-[11.6px] font-bold font-proxima leading-4 text-[#F7C853]">Binance</p>
                        <p className="text-[7.73px] leading-[9px] opacity-50">Текущий тариф</p>
                        <p className="text-[17.23px] leading-[21px] font-bold mt-1">0₽</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[11.6px] font-bold font-proxima leading-4 text-[#6DDAB6]">Tether</p>
                        <p className="text-[7.73px] leading-[9px] opacity-50">Следующий</p>
                        <p className="text-[17.23px] leading-[21px] font-bold mt-1">0₽</p>
                    </div>
                </div>
                <div className="mt-3">
                    <ProgressBar progress={50} />
                </div>
                <div className="flex flex-col mt-4 gap-y-2">
                    <p className="text-[17.23px] leading-[21px] font-bold mt-1">Личный депозит: 0₽ </p>
                    <p className="text-[17.23px] leading-[21px] font-bold mt-1">До следующего тарифа: 9222₽ </p>
                </div>
            </div>
            <NotificationBanner
                show={showBanner}
                onClose={() => setShowBanner(false)}
                title="Ваши средства зачислены"
                description={
                    <>
                        Инвестируйте, чтобы зарабатывать
                        <br />
                        больше
                    </>
                }
                type="success"
            />
            <Modal isOpen={isOpen} onClose={closeModal}>
                <InvestContent close={closeModal} />
            </Modal>
        </div>
    );
}
