import CartSVG from '@svg/cart.svg?react';
import BinanceSVG from '@svg/binance.svg?react';
import HrSVG from '@svg/hr.svg?react';
import InvestSVG from '@svg/invest.svg?react';
export function DepositCard() {
    return (
        <div
            className="w-full h-[457px] mx-auto border-t-[2.5px] border-[#282a35] rounded-[25px] relative overflow-hidden p-6"
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
                        <p className="font-gilroy text-[40.84px] leading-[50px] ml-[px]">10000</p>
                        <p className="opacity-50 text-[24.5px] leading-[30px] mb-2">₽</p>
                    </div>
                </div>
                <div className="flex -mt-5">
                    <BinanceSVG />
                </div>
            </div>
            <div className="flex items-center gap-x-1">
                <p className="font-proxima font-bold text-[21.24px] leading-[26px]">Накоплено:</p>
                <p className="bg-[#16191E] px-2 rounded-[10px] text-[#5FFF9F]">34000₽</p>
                <p className="font-proxima font-bold text-[21.24px] leading-[26px]">Прибыль:</p>
                <p className="bg-[#16191E] px-2 rounded-[10px] text-[#5FFF9F]">11%</p>
            </div>
            <HrSVG className="mt-2" />
            <div className="flex justify-around mt-3">
                <button className="rounded-[10.5px] bg-gradient-to-b from-[#4204ff] to-[#2e9cfe] px-4 py-2 border-t border-[#3D4AFF] flex gap-x-1">
                    <InvestSVG />
                    <p className="font-proxima font-bold text-[13.75px] leading-[110%] tracking-[-2%]">Инвестировать</p>
                </button>
            </div>
        </div>
    );
}
