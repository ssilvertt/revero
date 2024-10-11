import { AnimatedButton } from './ui/AnimatedButton.tsx';

export function CopyButton() {
    return (
        <AnimatedButton className="relative inline-flex items-center justify-center p-1 overflow-hidden">
            <img
                src="src/assets/imgs/rectright.png"
                alt="Back image"
                className="absolute  w-3 h-3 transform -translate-y-[2px] translate-x-[2px]"
            />
            <img src="src/assets/imgs/rectleft.png" alt="Front image" className="relative z-10 w-3 h-3" />
        </AnimatedButton>
    );
}
