import { useCallback, useState } from 'react';
import type { UseModalResult } from './types.ts';

export const useModal = (): UseModalResult => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    return { isOpen, openModal, closeModal };
};
