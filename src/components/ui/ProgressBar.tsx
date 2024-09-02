import { motion } from 'framer-motion';

export function ProgressBar({ progress }: { progress: number }) {
    return (
        <div className="relative w-full h-2">
            <motion.div
                className="absolute inset-0 rounded-[44.31px] bg-gradient-to-b from-[#4200ff] to-[#3891ff] opacity-57 blur-[24.37px]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            
            <div className="relative w-full h-full rounded-[44.31px] bg-[#212121] overflow-hidden">
                <motion.div
                    className="h-full rounded-[44.31px] bg-gradient-to-b from-[#4200ff] to-[#3891ff]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                ></motion.div>
            </div>
        </div>
    );
}