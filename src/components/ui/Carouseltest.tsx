'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { InvestCard } from './InvestCard';
const CRYPTO_TYPES = ['Tether', 'Binance', 'Ethereum', 'Bitcoin'] as const;
type CryptoType = (typeof CRYPTO_TYPES)[number];

export function CarouselTest() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        dragFree: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-[15%] touch-pan-y">
                {CRYPTO_TYPES.map((type, index) => (
                    <div
                        key={type}
                        className={`flex-[0_0_70%] min-w-0 pl-[15%] relative transition-all duration-300 ease-out ${
                            index === selectedIndex
                                ? 'scale-100 z-10'
                                : index === (selectedIndex + 1) % CRYPTO_TYPES.length ||
                                    index === (selectedIndex - 1 + CRYPTO_TYPES.length) % CRYPTO_TYPES.length
                                  ? 'scale-95 -translate-y-2 opacity-70 z-0'
                                  : 'scale-90 -translate-y-4 opacity-50 z-0'
                        }`}
                        style={{
                            transform: `translateX(${index === selectedIndex ? '0' : index < selectedIndex ? '-5%' : '5%'})`,
                        }}
                    >
                        <InvestCard cryptoType={type as CryptoType} />
                    </div>
                ))}
            </div>
        </div>
    );
}
