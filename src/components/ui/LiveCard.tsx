interface LiveCardProps{
    username: string;
    action: string;
    amount: string;
    time: string;
}

export function LiveCard({ username, action, amount, time }: LiveCardProps) {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex">
                <img src="src/assets/imgs/avatar2.png" className="rounded-full w-[45px] h-[45px]" alt="User avatar" />
                <div className='flex flex-col ml-2 justify-center gap-y-[4px]'>
                    <p className='font-proxima text-[16px] leading-[110%] tracking-[-2%] font-bold'>{username}</p>
                    <p className='font-proxima text-[#44FF84] text-[16px] leading-[110%] tracking-[-2%] font-bold'>{action}</p>
                </div>
            </div>
            <div className='flex flex-col items-end gap-y-[4px]'>
                <p className='font-proxima text-white text-[16px] leading-[110%] tracking-[-2%] font-bold'>{amount}</p>
                <p className='font-proxima text-white text-[11.72px] leading-[12.89px] tracking-[-2%] font-normal opacity-50'>{time}</p>
            </div>
        </div>
    );
}