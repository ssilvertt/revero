import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OpenSVG from '@svg/open.svg?react';
import TrxbackSVG from '@svg/trxback.svg?react';
import TrxfrontSVG from '@svg/trxfront.svg?react';
import CardiconSVG from '@svg/cardicon.svg?react';

interface MenuItem {
    name: string;
    desc: string;
    icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
    { name: 'Банковская карта', desc: 'Карта', icon: <CardiconSVG className="mt-px" /> },
    {
        name: 'USDT(TRC20)',
        desc: 'Tron',
        icon: <img src="src/assets/imgs/cryptos/tether.png" alt="USDT" className="w-[35px] h-[35px] object-contain" />,
    },
    {
        name: 'TON',
        desc: 'Toncoin',
        icon: <img src="src/assets/imgs/cryptos/ton.png" alt="TON" className="w-[35px] h-[35px] object-contain" />,
    },
    {
        name: 'TRX',
        desc: 'TRON',
        icon: (
            <div className="relative w-[35px] h-[35px]">
                <div className="absolute inset-0">
                    <TrxbackSVG className="w-full h-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <TrxfrontSVG className="w-1/2 h-1/2" />
                </div>
            </div>
        ),
    },
];

const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

    return (
        <div className="relative">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    box-border border-2 border-solid border-[rgb(70,70,70)]
                    rounded-[25.88px] bg-gradient-to-b from-[#1C1D28] to-[#1A1C26] flex justify-between items-center
                    py-1 pl-6 pr-5 cursor-pointer
                    ${isOpen ? 'rounded-b-none' : ''}
                `}
                style={{
                    boxSizing: 'border-box',
                }}
            >
                <div className="flex items-center gap-x-1">
                    {selectedItem.icon}
                    <p className="text-[18.82px] font-bold font-proxima leading-[23px]">{selectedItem.name}</p>
                </div>
                <OpenSVG className={`-translate-y-px transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="
                            absolute left-0 right-0
                            border-2 border-t-0 border-solid border-[rgba(70,70,70,0.5)]
                            rounded-b-[25.88px]
                        "
                        style={{
                            boxSizing: 'border-box',
                            backdropFilter: 'blur(46.4px)',
                            WebkitBackdropFilter: 'blur(46.4px)', // для Safari
                            background: 'rgba(17, 17, 17, 0.4)',
                        }}
                    >
                        <div className="p-2">
                            {menuItems
                                .filter((item) => item.name !== selectedItem.name)
                                .map((item, index, filteredArray) => (
                                    <React.Fragment key={item.name}>
                                        <div
                                            className="flex items-center gap-x-3 px-3 py-2 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] rounded-[20px] transition-colors"
                                            onClick={() => {
                                                setSelectedItem(item);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {item.icon}
                                            <div className="flex flex-col">
                                                <span className="text-white font-proxima font-bold text-[14.44px] leading-[110%] tracking-[-2%]">
                                                    {item.name}
                                                </span>
                                                <span className="font-proxima leading-[110%] tracking-[-2%] opacity-50">
                                                    {item.desc}
                                                </span>
                                            </div>
                                        </div>
                                        {index < filteredArray.length - 1 && (
                                            <hr className="my-1 border-[rgba(255,255,255,0.2)]" />
                                        )}
                                    </React.Fragment>
                                ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownMenu;
