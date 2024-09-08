export function StepCard({ step = 1, title = 'Партнеры' }) {
    return (
        <div className="flex rounded-[38px] bg-[#131D39] mx-5 py-1">
            <div className="relative w-[44px] h-[44px] bg-[rgb(24,38,77)] rounded-full flex items-center justify-center ml-5">
                <span className="text-[16px] font-proxima font-bold text-white">#{step}</span>
            </div>
            <div className="flex flex-col justify-center ml-3">
                <p className="text-[13px] font-proxima font-bold leading-[110%] tracking-[-2%] text-white">{title}</p>
            </div>
        </div>
    );
}
