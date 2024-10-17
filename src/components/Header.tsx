import { $user, $isLoading } from '../model/user';
import { useUnit } from 'effector-react';

export function Header() {
    const user = useUnit($user);
    const isLoading = useUnit($isLoading);
    
    return (
        <div className="flex w-full justify-between p-4">
            <img src="/src/assets/imgs/HeaderLogo.png" className="h-[43px] w-[111px]" alt="Header Logo" />
            <div className="flex gap-x-4">
                <img src="/src/assets/imgs/avatar.png" className="w-[50px] h-[50px]" alt="Avatar" />
                <div className="flex flex-col my-auto">
                    <p className="text-[17.14px] text-white leading-[110%] tracking-[-2%] font-bold font-proxima">
                        {isLoading ? '...' : user?.first_name || 'Загрузка...'}
                    </p>
                    <p className="text-[8.83px] text-white leading-[110%] tracking-[-2%] font-bold font-proxima">
                        ВАШ ID: {isLoading ? '...' : user?.telegram_id || 'Загрузка...'}
                    </p>
                </div>
            </div>
        </div>
    );
}