import React, { useState } from 'react';
import { AnimatedButton } from './AnimatedButton.tsx';
import SafeiconSVG from '@svg/safeicon.svg?react';
import SafeiconmaskSVG from '@svg/safeiconmask.svg?react';

export function FundCard() {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Allow only digits, including leading zeros
        if (/^\d*$/.test(value)) {
            setInputValue(value);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handleBlur = () => {
        // On blur, if the input is not empty, remove leading zeros
        if (inputValue !== '') {
            const parsedValue = parseInt(inputValue, 10).toString();
            setInputValue(parsedValue);
        }
    };

    return (
        <div className="relative p-[1.5px] bg-gradient-to-t from-[#3991FF] to-[#410FFF] h-32 mx-4 rounded-xl overflow-hidden">
            <div className="relative h-full bg-main rounded-xl flex flex-col pl-3 pr-3 pt-3 z-10 overflow-hidden">
                <div className="absolute bottom-[0%] right-[-20%] w-1/2 h-1/2 bg-[#4112FF] rounded-full filter blur-[30px] opacity-40"></div>
                <div className="grid grid-cols-10 gap-2 h-full">
                    <div className="col-span-6 flex flex-col justify-between">
                        <div>
                            <p className="font-proxima text-[30px] font-bold leading-[37px] relative z-20">
                                78,602,21 <span className="font-bold font-gilroy">₽</span>
                            </p>
                            <p className="font-proxima text-[11.62px] font-bold leading-[14px] relative z-20">
                                Страховой фонд REVERO
                            </p>
                        </div>
                        <div className="relative border border-[#343949] rounded-[6px] w-full px-2 h-[35px] flex items-center mb-3">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                className={`w-full bg-transparent font-proxima text-[15px] font-bold leading-[18px] ${isValid ? 'text-white' : 'text-red-500'}`}
                                placeholder="0"
                            />
                            <span className="absolute right-2 font-proxima text-[16.67px] leading-[20px] opacity-50">
                                ₽
                            </span>
                        </div>
                    </div>
                    <div className="col-span-4 flex flex-col justify-end relative">
                        <div className="absolute top-[-12px] left-[70%] transform -translate-x-1/2">
                            <SafeiconSVG className="" />
                            <SafeiconmaskSVG className="absolute top-0 left-0" />
                        </div>
                        <AnimatedButton className="bg-gradient-to-t from-[#3891FF] to-[#3D4AFF] rounded-[6px] h-[35px] mb-3 mx-3">
                            <div className="rounded-[6px] w-full bg-gradient-to-t from-[#388EFF] to-[#4206FF] px-2 h-[34px] flex items-center justify-center">
                                <p className="font-proxima text-[15px] font-bold leading-[18px]">Донат</p>
                            </div>
                        </AnimatedButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
