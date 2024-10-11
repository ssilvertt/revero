import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { InvestCard, CryptoType } from './InvestCard';

const cryptoTypes: CryptoType[] = ['Tether', 'Ethereum', 'Bitcoin', 'Binance'];

const InvestCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const constraintsRef = useRef<HTMLDivElement>(null);

    const calculateIndex = (index: number) => {
        return (index + cryptoTypes.length) % cryptoTypes.length;
    };

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 30;
        const velocity = 0.3;

        if (info.offset.x > threshold || (info.velocity.x > velocity && info.offset.x > 0)) {
            setCurrentIndex((prevIndex) => calculateIndex(prevIndex - 1));
        } else if (info.offset.x < -threshold || (info.velocity.x < -velocity && info.offset.x < 0)) {
            setCurrentIndex((prevIndex) => calculateIndex(prevIndex + 1));
        }
    };

    const getCardStyle = (index: number) => {
        const difference = calculateIndex(index - currentIndex);
        const styles = {
            zIndex: 30,
            x: '0%',
            y: '0%',
            scale: 1,
        };

        switch (difference) {
            case 1:
            case -3:
                styles.x = '55%';
                styles.y = '5%';
                styles.scale = 0.9;
                styles.zIndex = 20;
                break;
            case 2:
            case -2:
                styles.y = '2%';
                styles.scale = 0.8;
                styles.zIndex = 10;
                break;
            case 3:
            case -1:
                styles.x = '-55%';
                styles.y = '5%';
                styles.scale = 0.9;
                styles.zIndex = 20;
                break;
        }

        return styles;
    };

    return (
        <div className="relative w-full flex flex-col items-center justify-center">
            <div
                ref={constraintsRef}
                className="relative w-full h-[350px] flex items-center justify-center overflow-hidden"
            >
                <AnimatePresence initial={false}>
                    {cryptoTypes.map((crypto, index) => (
                        <motion.div
                            key={crypto}
                            className="absolute"
                            style={{ zIndex: getCardStyle(index).zIndex }}
                            initial={false}
                            animate={getCardStyle(index)}
                            transition={{
                                type: 'tween',
                                ease: 'easeOut',
                                duration: 0.2,
                            }}
                            drag={index === currentIndex ? 'x' : false}
                            dragConstraints={constraintsRef}
                            onDragEnd={handleDragEnd}
                            dragElastic={0.05}
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                            whileDrag={{ cursor: 'grabbing' }}
                        >
                            <InvestCard cryptoType={crypto} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <div className="w-full max-w-[200px] -translate-y-5 relative h-[5px]">
                <div className="w-full h-[1px] rounded-[22px] bg-[#283969] absolute top-[2px]" />
                <motion.div
                    className="absolute top-0 left-0 w-1/4 h-full"
                    animate={{
                        left: `${currentIndex * 25}%`,
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                    <div className="w-full h-[1px] rounded-[22px] bg-[#869FFE] absolute top-[2px]" />
                    <div className="w-full h-full rounded-[22px] bg-[#869FFE] filter blur-[4px] opacity-80" />
                </motion.div>
            </div>
        </div>
    );
};

export default InvestCarousel;
