import React, { useState, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const toggleBodyScroll = (disable: boolean) => {
    if (disable) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const root = document.getElementById('modal-root') || document.body;
        setModalRoot(root);
    }, []);

    useEffect(() => {
        if (isOpen) {
            toggleBodyScroll(true);
        } else {
            toggleBodyScroll(false);
        }

        return () => {
            toggleBodyScroll(false);
        };
    }, [isOpen]);

    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '100%', opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 500 }}
                        className="relative box-border rounded-[25.88px] opacity-32 w-full max-w-sm overflow-hidden"
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#2A2C34] to-[#222224]" />
                        <div className="absolute inset-[2px] bg-gradient-to-b from-[#1F2332] to-[#0E0F13] rounded-[23.88px]" />
                        <div className="relative z-10">{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        modalRoot
    );
};
