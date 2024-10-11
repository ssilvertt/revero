import { useState } from 'react';
import { useModal } from '../shared/hooks.ts';
import { Modal } from './Modal.tsx';
import { motion } from 'framer-motion';
import { TopupContent } from './TopupContent.tsx';
import TrxbackSVG from '@svg/trxback.svg?react';
import TrxfrontSVG from '@svg/trxfront.svg?react';

export function CryptoList() {
    interface Crypto {
        name: string;
        desc: string;
        imageSrc: string;
        isSvg?: boolean;
    }

    const cryptos: Crypto[] = [
        { name: 'USDT(TRC20)', desc: 'Tron', imageSrc: 'src/assets/imgs/cryptos/tether.png' },
        { name: 'TON', desc: 'Toncoin', imageSrc: 'src/assets/imgs/cryptos/ton.png' },
        { name: 'TRX', desc: 'TRON', imageSrc: '', isSvg: true },
    ];

    const { isOpen, openModal, closeModal } = useModal();
    const [selectedCrypto, setSelectedCrypto] = useState('');
    console.log(selectedCrypto);
    const handleCryptoClick = (cryptoName: string) => {
        setSelectedCrypto(cryptoName);
        openModal();
    };

    const renderCryptoIcon = (crypto: Crypto) => {
        if (crypto.isSvg) {
            return (
                <div className="relative w-[35px] h-[35px]">
                    <div className="absolute inset-0">
                        <TrxbackSVG className="w-full h-full" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <TrxfrontSVG className="w-1/2 h-1/2" />
                    </div>
                </div>
            );
        }
        return <img src={crypto.imageSrc} alt={crypto.name} className="w-[35px] h-[35px]" />;
    };

    return (
        <>
            <div className="bg-[#131D39] rounded-[25px] flex flex-col py-4 px-6">
                {cryptos.map((crypto, index) => (
                    <motion.div
                        key={crypto.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCryptoClick(crypto.name)}
                        className="cursor-pointer"
                    >
                        {index > 0 && <div className="h-[2px] bg-[#1D2B51] rounded-full my-[6px] max-w-full" />}
                        <div className="flex items-center">
                            {renderCryptoIcon(crypto)}
                            <div className="flex flex-col gap-x-1">
                                <p className="text-[15px] font-bold leading-[110%] tracking-[-2%] ml-3 text-white">
                                    {crypto.name}
                                </p>
                                <p className="text-[10px] leading-[110%] tracking-[-2%] ml-3 text-white opacity-50">
                                    {crypto.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <TopupContent onClose={closeModal} isCrypto={true} />
            </Modal>
        </>
    );
}
