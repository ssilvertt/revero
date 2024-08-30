export function Header(){
	return (
		<div className="flex w-full justify-between p-4">
			<img src="/src/assets/imgs/HeaderLogo.png" className="h-[43px] w-[111px]" />
			<div className="flex gap-x-4">
				<img src="/src/assets/imgs/avatar.png" className="w-[50px] h-[50px]" />
				<div className="flex flex-col my-auto">
					<p className="text-[17.14px] text-white leading-[110%] tracking-[-2%] font-bold font-proxima">
						Shocon.on
					</p>
					<p className="text-[8.83px] text-white leading-[110%] tracking-[-2%] font-bold font-proxima">
						ВАШ ID: 1313313113
					</p>
				</div>
			</div>
		</div>
	)
}