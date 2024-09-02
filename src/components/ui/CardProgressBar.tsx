export function CardProgressBar({ progress }: { progress: number }) {
    return (
        <div className="relative w-full h-[2.11px]">
            <div
                className="absolute inset-0 rounded-[44.31px] bg-[#5F8CDA] opacity-57 blur-[24.37px]"
                style={{ width: `${progress}%` }}
            ></div>

            <div className="relative w-full h-full rounded-[44.31px] bg-[#212121] overflow-hidden">
                <div className="h-full rounded-[44.31px] bg-[#5F8CDA]" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}
