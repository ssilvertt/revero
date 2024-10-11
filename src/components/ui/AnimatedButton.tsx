import { motion } from 'framer-motion';
import type { ReactNode, MouseEvent } from 'react';

interface AnimatedButtonProps {
    children: ReactNode;
    className: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className, onClick }) => (
    <motion.button
        className={className}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        onClick={onClick}
    >
        {children}
    </motion.button>
);
