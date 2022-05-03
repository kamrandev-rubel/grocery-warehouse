import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import carouselImg1 from '../../../images/carousel1.png'
import carouselImg2 from '../../../images/carousel2.png'
import carouselImg3 from '../../../images/carousel3.png'

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='brightness-50' src={carouselImg1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brightness-50' src={carouselImg2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brightness-50' src={carouselImg3} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;