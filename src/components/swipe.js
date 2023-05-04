import {useRef, useEffect} from 'react';
import {register} from 'swiper/element/bundle';

import './swipe.css';

register();

const SwiperContainer = (props) => {

    const swiperElRef = useRef(null);
    const params = {
        // array with CSS styles
        injectStyles: [
            `
      :host(.red) .swiper-wrapper {
        background-color: red;
      }
      `,
        ],

        // array with CSS urls
        injectStylesUrls: ['path/to/one.css', 'path/to/two.css'],
    };

    Object.assign(swiperElRef, params);

    swiperElRef.initialize();
    return (
        <>
            <swiper-container init="false" ref={swiperElRef} speed="500" loop="true" css-mode="false" slides-per-view="auto"
            >
                <swiper-slide>
                    <div className={'trending-item red'}></div>
                </swiper-slide>
                <swiper-slide>
                    <div className={'trending-item red'}></div>
                </swiper-slide>
                <swiper-slide>
                    <div className={'trending-item red'}></div>
                </swiper-slide>
            </swiper-container>
            <div>
                <button >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="23.5" transform="rotate(90 24 24)" stroke="#716B7C"/>
                        <path d="M25.9988 30L27.4088 28.59L22.8288 24L27.4088 19.41L25.9988 18L19.9988 24L25.9988 30Z"
                              fill="white"/>
                    </svg>
                </button>
                <button >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="23.5" transform="rotate(-90 24 24)" stroke="#716B7C"/>
                        <path d="M22.0012 18L20.5912 19.41L25.1712 24L20.5912 28.59L22.0012 30L28.0012 24L22.0012 18Z"
                              fill="white"/>
                    </svg>
                </button>
            </div>
        </>
    )
}


export default SwiperContainer
