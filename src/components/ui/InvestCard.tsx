import React from 'react';
import { CardProgressBar } from './CardProgressBar';

import TetherSVG from '@svg/tether.svg?react';
import SmallbinanceSVG from '@svg/smallbinance.svg?react';
import EthereumSVG from '@svg/ethereum.svg?react';
import BitcoinSVG from '@svg/bitcoin.svg?react';

type CryptoType = 'Tether' | 'Binance' | 'Ethereum' | 'Bitcoin';

interface CryptoConfig {
    name: CryptoType;
    textColor: string;
    gradientFrom: string;
    gradientTo: string;
    bgGradientFrom: string;
    bgGradientTo: string;
    icon: React.ComponentType;
}

const cryptoConfigs: Record<CryptoType, CryptoConfig> = {
    Tether: {
        name: 'Tether',
        textColor: 'text-[#6DDAB6]',
        gradientFrom: 'from-[#1F3832]',
        gradientTo: 'to-[#151B19]',
        bgGradientFrom: 'from-[#222]',
        bgGradientTo: 'to-[#2C3B37]',
        icon: TetherSVG,
    },
    Binance: {
        name: 'Binance',
        textColor: 'text-[#F7C853]',
        gradientFrom: 'from-[#423A26]',
        gradientTo: 'to-[#1C1700]',
        bgGradientFrom: 'from-[#222]',
        bgGradientTo: 'to-[#3B372C]',
        icon: SmallbinanceSVG,
    },
    Ethereum: {
        name: 'Ethereum',
        textColor: 'text-[#869FFE]',
        gradientFrom: 'from-[#292E42]',
        gradientTo: 'to-[#111]',
        bgGradientFrom: 'from-[#222]',
        bgGradientTo: 'to-[#2F313B]',
        icon: EthereumSVG,
    },
    Bitcoin: {
        name: 'Bitcoin',
        textColor: 'text-[#F7C853]',
        gradientFrom: 'from-[#3F301C]',
        gradientTo: 'to-[#111]',
        bgGradientFrom: 'from-[#2A1C00]',
        bgGradientTo: 'to-[#393228]',
        icon: BitcoinSVG,
    },
};

interface InvestCardProps {
    cryptoType: CryptoType;
}

export function InvestCard({ cryptoType }: InvestCardProps) {
    const config = cryptoConfigs[cryptoType];
    const IconComponent = config.icon;

    return (
        <div className={`w-44 rounded-2xl bg-gradient-to-t ${config.bgGradientFrom} ${config.bgGradientTo}`}>
            <div
                className={`w-[174px] mx-auto p-[2px] bg-gradient-to-b ${config.gradientFrom} ${config.gradientTo} backdrop-blur-[147px] rounded-2xl px-4 pt-4 flex flex-col relative`}
            >
                <div className="absolute top-3 right-0 ">
                    <IconComponent />
                </div>

                <p className={`font-proxima text-[12.65px] leading-[15px] font-bold ${config.textColor}`}>
                    {config.name}
                </p>
                <p className="font-proxima text-[8.43px] leading-[10px] opacity-50 mt-1">Награда</p>
                <p className="text-[33.15px] font-bold leading-10 ml-1">+2.4%</p>
                <p className="font-proxima text-[8.43px] leading-[10px] opacity-50">Стоимость</p>
                <p className="font-proxima text-[11.6px] font-bold leading-[14px]">От 10.000 до 100.000</p>
                <p className="font-proxima text-[5.03px] font-bold leading-[6px]">Срок тарифа: 120 дней</p>
                <CardProgressBar progress={40} />
                <p className="font-proxima text-[8.43px] leading-[10px] opacity-50 mt-1">Открыто тарифов 1/1000</p>

                <div className="mt-8">
                    <div className="flex justify-between">
                        <p className="font-proxima text-[7.38px] font-bold leading-[9px]">Текущий цикл:</p>
                        <p className="font-proxima text-[7.38px] font-bold leading-[9px]">0</p>
                    </div>
                    <div className="w-full h-[1.05px] bg-[#343434] rounded-[23.19px]"></div>
                    <div className="flex justify-between">
                        <p className="font-proxima text-[7.38px] font-bold leading-[9px]">Коэффицент прибыли:</p>
                        <p className="font-proxima text-[7.38px] font-bold leading-[9px]">130%</p>
                    </div>
                </div>
                <button className="w-full rounded-[11.6px] bg-[#869FFE] font-proxima text-[10.54px] font-bold leading-[13px] pt-[4.22px] pb-[3.87px] mt-4 mb-4">
                    Инвестировать
                </button>
            </div>
        </div>
    );
}
