import CartSVG from '@svg/cart.svg?react';
import { Cabinet } from '../pages/Cabinet.tsx';

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
        <div className="flex flex-col"></div>
        <div className="flex gap-x-2 items-center">
          <CartSVG />
          <p className="font-proxima text-[21px] leading-[26px] tracking-normal">Ваш депозит</p>
        </div>
        <div className="flex items-end mt-5">
          <p className="font-gilroy text-[40.84px] leading-[50px]">10000</p>
          <p className="opacity-50 text-[24.5px] leading-[30px] mb-2">₽</p>
        </div>
      </div>
    );
}
