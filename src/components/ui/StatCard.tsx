export function StatCard() {
    return (
        <div className="relative box-border rounded-[14px] backdrop-blur-custom bg-[rgba(17,17,17,0.55)] p-4 w-full h-[100px] overflow-hidden">
            <p className="absolute top-2 left-2 text-white font-proxima text-[30px] leading-[110%] tracking-[-2%] font-bold">300<span className='font-normal'>₽</span></p>

            <p className="absolute bottom-2 left-2 font-proxima text-white text-[15px] leading-[110%] font-light">Минимальная сумма</p>

            <div className="absolute top-2 right-2 text-white">
                <div className='h-5 w-5 bg-gradient-to-b from-[#401dff] to-[#3891ff] rounded-full '>
	               
                </div>
            </div>

            <img
                src="src/assets/imgs/minimal.png"
                alt="Centered"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
            />
        </div>
    );
}
