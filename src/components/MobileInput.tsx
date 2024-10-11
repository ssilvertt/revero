import React, { useRef, useEffect, ChangeEvent } from 'react';

interface MobileNumberInputProps {
    value: string;
    onChange: (value: string) => void;
}

const MobileNumberInput: React.FC<MobileNumberInputProps> = ({ value, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.width = `${Math.max(value.length, 1) * 36}px`;
        }
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value.replace(/^0+/, '').replace(/[^0-9]/g, '');

        // Convert to number and check if it's within the limit
        const numValue = parseInt(newValue, 10);
        if (numValue > 9999999) {
            newValue = '9999999';
        }

        if (newValue === '') {
            newValue = '0';
        } else if (newValue.length > 1 && newValue.startsWith('0')) {
            newValue = newValue.slice(1);
        }

        onChange(newValue);
    };

    return (
        <div className="flex justify-center items-baseline mb-8">
            <div className="relative inline-flex items-baseline">
                <input
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={value}
                    onChange={handleChange}
                    className="text-white font-proxima text-[60px] font-bold leading-[110%] tracking-[-2%] bg-transparent border-none outline-none text-right min-w-[60px]"
                />
                <span className="text-[30px] leading-[110%] tracking-[-2%] text-white opacity-50">₽</span>
            </div>
        </div>
    );
};

export default MobileNumberInput;
