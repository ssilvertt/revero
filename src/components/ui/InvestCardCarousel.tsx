import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { InvestCard } from './InvestCard.tsx';
export function InvestCardCarousel() {
    return (
        <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
            <SwiperSlide>
                <InvestCard cryptoType="Tether" />
            </SwiperSlide>
            <SwiperSlide>
                <InvestCard cryptoType="Ethereum" />
            </SwiperSlide>
            <SwiperSlide>
                <InvestCard cryptoType="Binance" />
            </SwiperSlide>
            <SwiperSlide>
                <InvestCard cryptoType="Bitcoin" />
            </SwiperSlide>
        </Swiper>
    );
}
