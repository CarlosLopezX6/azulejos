'use client'

import Image from 'next/image';

/*
    Este slider fue creado con swiperjs en su version de React.
    https://swiperjs.com/react
    https://swiperjs.com/demos
*/
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';              //Estilos personalizados por mi.


interface Props {
    title: string;
    images: string[];
    className?: string;
}

export const ProductMobileSlideshow = ({ title, images, className }: Props) => {

    return (
        <div className={ className }>

            <Swiper
                style={{ width: "100vw", height: "500px" }}
                pagination
                autoplay={{ delay: 2500 }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper2"
            >
                {
                    images.map( image => (
                        <SwiperSlide key={ image }>
                            <Image
                                width={ 600 }
                                height={ 500 }
                                src={`/products/${ image }`}
                                alt={ title }
                                className='object-fill'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}
