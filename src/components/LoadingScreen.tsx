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
        <div className="p-12">
            <img src="/src/assets/imgs/HeaderLogo.png" className="scale-75 mr-4 " />

            <ProgressBar progress={progress} />
        </div>
    </motion.div>
);
