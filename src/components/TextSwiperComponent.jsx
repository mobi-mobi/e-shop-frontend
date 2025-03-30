import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';

import "./TextSwiperComponent.css";

const TextSwiperComponent = ({textArray}) => {

    if(!Array.isArray(textArray)){
        return(
            null
        )
    }


  return (
    <>
      <Swiper className="mySwiper"
        effect={'fade'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
      >
        {
            textArray.map((singleText, index) => (
                <SwiperSlide key={index}>{singleText}</SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}

export default TextSwiperComponent