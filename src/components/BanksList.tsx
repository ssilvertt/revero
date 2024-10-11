import { useState } from 'react';
import { useModal } from '../shared/hooks.ts';
import { Modal } from './Modal.tsx';
import { motion } from 'framer-motion';
import { TopupContent } from './TopupContent.tsx';

export function BanksList() {
    interface Bank {
        name: string;
        imageSrc: string;
    }

    const banks: Bank[] = [
        { name: 'Сбербанк', imageSrc: 'src/assets/imgs/banks/sber.png' },
        { name: 'Тинькофф', imageSrc: 'src/assets/imgs/banks/tinkoff.png' },
        { name: 'Альфа-Банк', imageSrc: 'src/assets/imgs/banks/alpha.png' },
        { name: 'Райффайзен', imageSrc: 'src/assets/imgs/banks/raiffaisen.png' },
        { name: 'Газпромбанк', imageSrc: 'src/assets/imgs/banks/gazprom.png' },
        { name: 'Росбанк', imageSrc: 'src/assets/imgs/banks/rosbank.png' },
        { name: 'ВТБ', imageSrc: 'src/assets/imgs/banks/vtb.png' },
    ];

    const { isOpen, openModal, closeModal } = useModal();
    const [selectedBank, setSelectedBank] = useState('');
    console.log(selectedBank);
    const handleBankClick = (bankName: string) => {
        setSelectedBank(bankName);
        openModal();
    };

    return (
        <>
            <div className="bg-[#131D39] rounded-[25px] flex flex-col py-4 px-6">
                {banks.map((bank, index) => (
                    <motion.div
                        key={bank.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleBankClick(bank.name)}
                        className="cursor-pointer"
                    >
                        {index > 0 && <div className="h-[2px] bg-[#1D2B51] rounded-full my-[6px] max-w-full" />}
                        <div className="flex items-center">
                            <img src={bank.imageSrc} alt={bank.name} className="w-[35px] h-[35px]" />
                            <p className="text-[20px] font-bold leading-[110%] tracking-[-2%] ml-3 text-white">
                                {bank.name}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <TopupContent onClose={closeModal} />
            </Modal>
        </>
    );
}
