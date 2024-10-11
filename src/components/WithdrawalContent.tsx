import { type ChangeEvent, type ReactNode, useState } from 'react';
import OutlinecardSVG from '@svg/outlinecard.svg?react';
import CloseSVG from '@svg/close.svg?react';
import DropdownMenu from './DropdownMenu.tsx';
import { AnimatedButton } from './ui/AnimatedButton.tsx';
import { NotificationBanner } from './ui/NotificationBanner.tsx';

export function WithdrawalContent({ close }: { close: () => void }) {
    const [balance] = useState(1000);
    const [amount, setAmount] = useState('');
    const [requisites, setRequisites] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [notificationType, setNotificationType] = useState<'success' | 'warning'>('success');
    const [notificationTitle, setNotificationTitle] = useState('');
    const [notificationDescription, setNotificationDescription] = useState<ReactNode | string>('');

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Remove leading zeros and allow only valid numbers
        const sanitizedValue = value.replace(/^0+/, '').replace(/[^0-9.]/g, '');

        // Allow numbers with up to 2 decimal places
        if (/^\d*\.?\d{0,2}$/.test(sanitizedValue)) {
            setAmount(sanitizedValue);
        }
    };

    const handleRequisitesChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRequisites(e.target.value);
    };

    const handleSubmit = () => {
        if (!amount || !requisites) {
            setNotificationType('warning');
            setNotificationTitle('Ошибка');
            setNotificationDescription(
                <>
                    Пожалуйста, введите сумму вывода
                    <br />и укажите реквизиты
                </>
            );
        } else {
            const amountValue = parseFloat(amount);
            if (amountValue <= balance) {
                setNotificationType('success');
                setNotificationTitle('Ваша заявка успешно принята');
                setNotificationDescription(
                    <>
                        Время ожидание выплаты по
                        <br />
                        заявке до 24 часов!
                    </>
                );
            } else {
                setNotificationType('warning');
                setNotificationTitle('Ошибка');
                setNotificationDescription(
                    <>
                        Введите точную сумму для
                        <br />
                        вывода средств или проверьте баланс
                    </>
                );
            }
        }
        setShowNotification(true);
    };

    return (
        <div className="px-4 sm:px-8 py-6 text-white flex flex-col  max-w-md mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-[25.88px] bg-[#869FFE] opacity-30 blur-[9.41px]"></div>
                        <div className="relative rounded-[25.88px] bg-[#869FFE] font-proxima text-base sm:text-[20px] font-bold leading-[24px] px-3 py-2 text-white">
                            Новая выплата
                        </div>
                    </div>
                    <OutlinecardSVG className="text-[#8D9198] opacity-50 w-8 h-8 sm:w-[36px] sm:h-[36px]" />
                </div>
                <CloseSVG className="cursor-pointer w-6 h-6 sm:w-auto sm:h-auto" onClick={close} />
            </div>

            <p className="font-proxima text-sm sm:text-[16.41px] font-bold leading-[20px] mt-8 sm:mt-10">
                Метод выплаты
            </p>

            <DropdownMenu />
            <div className="flex justify-between">
                <p className="font-proxima text-sm sm:text-[16.41px] mt-4 sm:mt-5 font-bold leading-[20px]">
                    Сумма выплаты
                </p>
                <p className="font-proxima text-sm sm:text-[16.41px] mt-4 sm:mt-5 font-bold leading-[20px]">
                    Доступно: {balance}₽
                </p>
            </div>

            <div className="border-[2px] border-[#272931] rounded-[25.88px] flex justify-between h-[47px] items-center px-5 mt-1">
                <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    className="font-proxima text-base sm:text-[18.82px] font-bold leading-[23px] bg-transparent outline-none w-full"
                    placeholder="Введите сумму"
                />
                <p className="font-proxima text-lg sm:text-[20px] leading-[24px] opacity-50 text-white">₽</p>
            </div>

            <p className="font-proxima text-sm sm:text-[16.41px] mt-4 sm:mt-5 font-bold leading-[20px]">Реквизиты</p>
            <div className="border-[2px] border-[#272931] rounded-[25.88px] flex justify-between h-[47px] items-center px-5 mt-1">
                <input
                    type="text"
                    value={requisites}
                    onChange={handleRequisitesChange}
                    className="font-proxima text-base sm:text-[18.82px] font-bold leading-[23px] bg-transparent outline-none w-full"
                    placeholder="1234 5678 9012 3456"
                />
            </div>

            <div className="flex justify-around mt-14">
                <AnimatedButton className="relative" onClick={close}>
                    <div className="absolute inset-0 rounded-[25.88px] bg-[#FF535A] opacity-30 blur-[9.41px]"></div>
                    <div className="relative rounded-[25.88px] bg-[#FF535A] font-proxima text-[23.53px] font-bold leading-[29px] px-8 py-1 text-white">
                        Отмена
                    </div>
                </AnimatedButton>

                <AnimatedButton className="relative" onClick={handleSubmit}>
                    <div className="absolute inset-0 rounded-[25.88px] bg-[#869FFE] opacity-30 blur-[9.41px]"></div>
                    <div className="relative rounded-[25.88px] bg-[#869FFE] font-proxima text-[23.53px] font-bold leading-[29px] px-8 py-1 text-white">
                        Принять
                    </div>
                </AnimatedButton>
            </div>

            <NotificationBanner
                show={showNotification}
                onClose={() => setShowNotification(false)}
                title={notificationTitle}
                description={notificationDescription}
                type={notificationType}
            />
        </div>
    );
}
