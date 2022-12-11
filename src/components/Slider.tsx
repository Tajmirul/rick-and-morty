import React, { FC, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperRef } from 'swiper/react';
SwiperCore.use([Navigation]);

interface Props {
    children: React.ReactNode;
}

const Slider: FC<Props> = ({ children }) => {
    const swiper = useRef<SwiperRef>(null);
    const prevEl = useRef<HTMLButtonElement>(null);
    const nextEl = useRef<HTMLButtonElement>(null);

    const goNext = (): void => {
        if (swiper.current) {
            swiper.current.swiper.slideNext();
        }
    };

    const goPrev = (): void => {
        if (swiper.current) {
            swiper.current.swiper.slidePrev();
        }
    };

    const disableButtons = (): void => {
        // check swiper.current.swiper has previous and next slide
        if (swiper.current) {
            const { isBeginning, isEnd } = swiper.current.swiper;

            if (prevEl.current) {
                prevEl.current.disabled = isBeginning;
            }
            if (nextEl.current) {
                nextEl.current.disabled = isEnd;
            }
        }
    };

    return (
        <div className="relative">
            <button className={`swiper-button-prev`} onClick={goPrev} ref={prevEl}>
                <IoIosArrowBack />
            </button>
            <button className="swiper-button-next" onClick={goNext} ref={nextEl}>
                <IoIosArrowForward />
            </button>

            <Swiper
                spaceBetween={14}
                slidesPerView={2.2}
                breakpoints={{
                    420: {
                        slidesPerView: 2.2,
                    },
                    768: {
                        slidesPerView: 3.2,
                        spaceBetween: 32,
                    },
                    992: {
                        slidesPerView: 4.2,
                        spaceBetween: 32,
                    },
                    1200: {
                        slidesPerView: 4.2,
                        spaceBetween: 32,
                    },
                }}
                loop={false}
                autoHeight={true}
                className="swiper-container"
                onSlideChange={disableButtons}
                onInit={disableButtons}
                ref={swiper}>
                {children}
            </Swiper>
        </div>
    );
};

export default Slider;
