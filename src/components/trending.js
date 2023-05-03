import React, {useRef} from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';

import PropTypes from 'prop-types'

import './trending.css'
import {Navigation} from "swiper";

const Trending = (props) => {
    const swiperRef = useRef();

    return (
        <>
        <Swiper
            slidesPerView={'auto'}
            loop={true}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className={'trending-item red'}></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={'trending-item blue'}></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={'trending-item red'}></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={'trending-item blue'}></div>
            </SwiperSlide>
        </Swiper>
            <div>
                <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
                <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
            </div>
        </>
    )
}


export default Trending
