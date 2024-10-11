import CloseSVG from '@svg/close.svg?react';
import { type ChangeEvent, useState } from 'react';
import { AnimatedButton } from './ui/AnimatedButton.tsx';
import { NotificationBanner } from './ui/NotificationBanner.tsx';

export function InvestContent({ close }: { close: () => void }) {
    const [balance] = useState(1000);
    const [amount, setAmount] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [notificationType, setNotificationType] = useState<'success' | 'warning'>('success');
    const [notificationTitle, setNotificationTitle] = useState('');
    const [notificationDescription, setNotificationDescription] = useState<React.ReactNode | string>('');

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Remove leading zeros and allow only valid numbers
        const sanitizedValue = value.replace(/^0+/, '').replace(/[^0-9.]/g, '');

        // Allow numbers with up to 2 decimal places
        if (/^\d*\.?\d{0,2}$/.test(sanitizedValue)) {
            setAmount(sanitizedValue);
        }
    };

    const handleSubmit = () => {
        if (!amount) {
            setNotificationType('warning');
            setNotificationTitle('Ошибка');
            setNotificationDescription('Пожалуйста, введите сумму инвестиции');
        } else {
            const amountValue = parseFloat(amount);
            if (amountValue > balance) {
                setNotificationType('warning');
                setNotificationTitle('Ошибка');
                setNotificationDescription(
                    <>
                        Недостаточно средств на балансе.
                        <br />
                        Пожалуйста, введите сумму не больше {balance}₽
                    </>
                );
            } else {
                setNotificationType('success');
                setNotificationTitle('Успешно');
                setNotificationDescription(
                    <>
                        Ваша инвестиция на сумму {amount}₽
                        <br />
                        успешно размещена!
                    </>
                );
            }
        }
        setShowNotification(true);
    };

    return (
        <div className="text-white flex flex-col px-8 py-4 bg-gradient-to-b from-[#171B25] to-[#16181D] border border-[#26272E]">
            <div className="flex justify-between items-center relative">
                <div className="absolute inset-x-0 flex justify-center">
                    <p className="font-proxima text-[16.41px] font-bold leading-[20px]">Инвестировать</p>
                </div>
                <div className="ml-auto">
                    <CloseSVG className="cursor-pointer" onClick={close} />
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <p className="font-proxima text-sm sm:text-[16.41px] font-bold leading-[20px]">Сумма инвестиции</p>
                <p className="font-proxima text-sm sm:text-[16.41px] font-bold leading-[20px]">Доступно: {balance}₽</p>
            </div>

            <div className="border-[2px] border-[#272931] rounded-[25.88px] flex justify-between h-[47px] items-center px-5 mt-2">
                <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    className="font-proxima text-base sm:text-[18.82px] font-bold leading-[23px] bg-transparent outline-none w-full"
                    placeholder="Введите сумму"
                />
                <p className="font-proxima text-lg sm:text-[20px] leading-[24px] opacity-50 text-white">₽</p>
            </div>

            <AnimatedButton className="relative mt-8" onClick={handleSubmit}>
                <div className="absolute inset-0 rounded-[25.88px] bg-[#869FFE] opacity-30 blur-[9.41px]"></div>
                <div className="relative rounded-[25.88px] bg-[#869FFE] font-proxima text-[23.53px] font-bold leading-[29px] px-8 py-1 text-white">
                    Принять
                </div>
            </AnimatedButton>

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
