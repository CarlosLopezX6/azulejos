'use client'

import { useState } from 'react';
import Image from 'next/image';

/*
    Este slider fue creado con swiperjs en su version de React.
    https://swiperjs.com/react
    https://swiperjs.com/demos

    Demo que se utilizo para este swiper, el que tiene los thumbs:  
    https://codesandbox.io/p/devbox/swiper-react-thumbs-gallery-k3cyyc?file=%2Fsrc%2FApp.jsx%3A63%2C7-71%2C8
*/
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';              //Estilos personalizados por mi.


interface Props {
    title: string;
    images: string[];
    className?: string;
}

export const ProductSlideshow = ({ title, images, className }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={ className }>

            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    'height': '400px',
                } as React.CSSProperties } 
                spaceBetween={10}
                navigation={true}
                autoplay={{ delay: 2500 }}
                thumbs={{ 
                    //swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null   //fix de posible error si sale en otras versiones.
                    swiper: thumbsSwiper 
                }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {
                    images.map( image => (
                        <SwiperSlide key={ image }>
                            <Image
                                width={ 1024 }
                                height={ 400 }
                                src={`/products/${ image }`}
                                alt={ title }
                                className='rounded-lg object-fill'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map( image => (
                        <SwiperSlide key={ image }>
                            <Image
                                width={ 300 }
                                height={ 300 }
                                src={`/products/${ image }`}
                                alt={ title }
                                className='rounded-lg object-fill'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}
