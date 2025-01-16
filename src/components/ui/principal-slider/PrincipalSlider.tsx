'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './principalslider.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';


export const PrincipalSlider = () => {
    return (
        <div className='px-0'>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                style={{
                    '--swiper-navigation-color': '#535353',
                    '--swiper-pagination-color': '#535353',
                } as React.CSSProperties } 
                className="mySwiper2"
                loop={true}
            >
                <SwiperSlide>
                    <Image
                        width={ 1500 }
                        height={ 400 }
                        src="/principal-slider-imgs/sliderimg1.webp"
                        alt='image1'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        width={ 1500 }
                        height={ 400 }
                        src="/principal-slider-imgs/sliderimg2.webp"
                        alt='image2'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        width={ 1500 }
                        height={ 400 }
                        src="/principal-slider-imgs/sliderimg3.webp"
                        alt='image3'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        width={ 1500 }
                        height={ 400 }
                        src="/principal-slider-imgs/sliderimg4.webp"
                        alt='image4'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        width={ 1500 }
                        height={ 400 }
                        src="/principal-slider-imgs/sliderimg5.webp"
                        alt='image5'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        width={ 1500 }
                        height={ 400 }
                        src="/principal-slider-imgs/sliderimg6.webp"
                        alt='image6'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        width={ 1500 }
                        height={ 400 }
                        src="/principal-slider-imgs/sliderimg7.webp"
                        alt='image7'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
