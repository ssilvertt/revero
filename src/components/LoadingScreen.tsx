import { motion } from 'framer-motion';
import React from 'react';
import { ProgressBar } from './ui/ProgressBar.tsx';

export const LoadingScreen: React.FC<{ progress: number }> = ({ progress }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-[#111930] z-50"
    >
        <div className="">
            <img src="/src/assets/imgs/HeaderLogo.png" className="h-[103.54px] w-[270.45px] mr-4 mb-4" />
            
            <ProgressBar progress={progress} />
        </div>
    </motion.div>
);