import type { EmblaOptionsType } from 'embla-carousel';
import { Header } from '../components/Header.tsx';
import EmblaCarousel from '../components/ui/Carousel/Carousel.tsx';
import '../components/ui/Carousel/css/embla.css';
import LiveSVG from '@svg/live.svg?react';
export function Cabinet() {
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    return (
        <div>
            <Header />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <div className="w-full flex justify-center">
                <div className="w-[95%] h-px bg-[rgb(27,38,69)] rounded-[22px]"></div>
            </div>
            <div className="flex ml-6 gap-x-1 items-center mt-4">
                <LiveSVG />
                <p className="font-proxima text-[16px] font-bold leading-[110%] tracking-[-2%]">Live</p>
            </div>
        </div>
    );
}
