import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const AnimatedButton = ({ children, className }: {children:ReactNode, className: string}) => (
    <motion.button
        className={className}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
        {children}
    </motion.button>
);