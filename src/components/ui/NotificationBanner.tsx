import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WarningsignSVG from '@svg/warningsign.svg?react';
import WarninglightSVG from '@svg/warninglight.svg?react';
import ClosenotificationSVG from '@svg/closenotification.svg?react';
import ApprovedlightSVG from '@svg/approvedlight.svg?react';
import ApprovedsignSVG from '@svg/approvedsign.svg?react';

interface NotificationBannerProps {
    show: boolean;
    onClose: () => void;
    title: string;
    description: string | React.ReactNode;
    type: 'warning' | 'success';
    autoHideDuration?: number;
}

export const NotificationBanner: React.FC<NotificationBannerProps> = ({
    show,
    onClose,
    title,
    description,
    type,
    autoHideDuration = 3000,
}) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, autoHideDuration);

            return () => clearTimeout(timer);
        }
    }, [show, onClose, autoHideDuration]);

    const getBgGradient = () => {
        return type === 'warning'
            ? 'bg-gradient-to-t from-[#392128] to-[#171922]'
            : 'bg-gradient-to-t from-[#192A2B] to-[#171922]';
    };

    const getIcon = () => {
        if (type === 'warning') {
            return (
                <div className="relative mr-4 mt-1">
                    <WarninglightSVG className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    <WarningsignSVG className="relative z-10" />
                </div>
            );
        } else {
            return (
                <div className="relative mr-4 mt-1">
                    <ApprovedlightSVG className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    <ApprovedsignSVG className="relative z-10" />
                </div>
            );
        }
    };

    const renderDescription = () => {
        if (typeof description === 'string') {
            return description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    {index < description.split('\n').length - 1 && <br />}
                </React.Fragment>
            ));
        }
        return description;
    };

    const notificationContent = (
        <AnimatePresence>
            {show && (
                <motion.div
                    className={`fixed top-4 left-0 right-0 mx-auto w-[93vw] max-w-md h-[70px] ${getBgGradient()} text-white px-4 py-4 rounded-[16.39px] border-t-[1.6px] border-[#181C25] z-50`}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3, ease: 'easeIn' }}
                >
                    <div className="flex items-start">
                        {getIcon()}
                        <div className="flex-grow">
                            <div className="flex justify-between items-center">
                                <p className="font-proxima text-[15px] font-bold leading-[110%] tracking-[-2%]">
                                    {title}
                                </p>
                                <ClosenotificationSVG className="cursor-pointer text-[#83868F]" onClick={onClose} />
                            </div>
                            <p className="font-proxima text-[10px] leading-[110%] tracking-[-2%] text-[#B5B8C1] mt-1">
                                {renderDescription()}
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return createPortal(notificationContent, document.getElementById('notification-root') || document.body);
};
