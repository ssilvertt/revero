import { AnimatedButton } from './ui/AnimatedButton.tsx';

interface PriceCardProps {
    amount: number;
    isPopular?: boolean;
    onClick: (amount: number) => void;
}

export function PriceCard({ amount, isPopular = false, onClick }: PriceCardProps) {
    return (
        <AnimatedButton className="relative" onClick={() => onClick(amount)}>
            {isPopular && (
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#4204FF] to-[#3992FF] text-white text-[8.45px] leading-[9.34px] font-bold font-proxima py-1 px-2 rounded-[15.5px] before:content-[""] before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-[#4204FF] before:to-[#3992FF] before:blur-[10px] before:opacity-70'>
                    ПОПУЛЯРНО
                </div>
            )}
            <div
                className={`rounded-[15.5px] bg-[#18264D] flex py-3 px-1 justify-center cursor-pointer hover:bg-[#1e2f5d] transition-colors`}
            >
                <p className="text-[18.43px] font-bold leading-[110%] tracking-[-2%] text-white">
                    {amount.toLocaleString()} <span className="text-[#8B92A6]">₽</span>
                </p>
            </div>
        </AnimatedButton>
    );
}
