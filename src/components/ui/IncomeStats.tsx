export function IncomeStats(){
	const rowTexts = [
		"На депозитах",
		"Собрано прибыли",
		"По партнерской программе",
		"Инвестированно за 7 дней",
		"Прибыль за 7 дней"
	]
	return(
		<div className="max-w-full rounded-[14px] backdrop-blur-[45.31px] bg-[rgba(17,17,17,0.55)] px-4 py-2">
			{rowTexts.map((text, index) => (
				<div key={index}>
					<div className="flex justify-between items-center py-3 text-white">
						<span className='font-proxima font-bold text-[15px] leading-[110%] tracking-[-2%]'>{text}</span>
						<span className='font-proxima font-bold text-[15px] leading-[110%] tracking-[-2%]'>0.00₽</span>
					</div>
					{index < 4 && <div className="border-b border-[#1B2645]"></div>}
				</div>
			))}
		</div>
	)
}