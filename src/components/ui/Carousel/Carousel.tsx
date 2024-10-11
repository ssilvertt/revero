import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from './EmbaCarouselDotButton';

type PropType = {
    slides: { id: number; imageUrl: string }[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
    const defaultOptions: EmblaOptionsType = {
        loop: false,
        containScroll: 'trimSnaps',
        ...options,
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions, [Autoplay()]);

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;
        resetOrStop();
    }, []);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);

    return (
        <div className="embla">
            <div className="embla_viewport" ref={emblaRef}>
                <div className="embla__container flex">
                    {slides.map((slide) => (
                        <div key={slide.id} className="embla__slide ">
                            <img
                                src={slide.imageUrl}
                                alt={`Slide ${slide.id}`}
                                className="embla__slide__img block w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__dots mt-1 flex space-x-2">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={`w-1 h-1 rounded-full transition-all duration-300 ${
                            index === selectedIndex ? 'bg-gradient-to-b from-[#4201FF] to-[#3891FF]' : 'bg-[#172244]'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default EmblaCarousel;
