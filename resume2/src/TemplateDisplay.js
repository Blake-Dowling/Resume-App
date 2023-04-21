import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import './styles/styles.css'

import template1 from "./template1.json"
import template2 from "./template2.json"

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper'

import testImage from './santacruz.jpeg'

export default function TemplateDisplay(props) {
  return (
    <div>TemplateDisplay
        <Swiper
            //effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            freemode={true}
            speed={10000}
            autoplay={
                {
                    delay: 1,
                    disableInInteraction: true,
                }
            }

            // coverflowEffect={
            //     {
            //         rotate: 0,
            //         stretch: 0,
            //         depth: 100,
            //         modifier: 2.5
            //     }
            // }
            //pagination={{el: '.swiper-pagination', clickable: true}}
            // navigation={{
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            //     clickable: true
            // }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            // className="swiper_container"
        >
            <SwiperSlide>
                <img src={testImage} onClick={()=>props.changeTemplate(template1)}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={testImage} onClick={()=>props.changeTemplate(template2)}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={testImage}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={testImage}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={testImage}/>
            </SwiperSlide>

            {/* <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-next-prev slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div> */}
        </Swiper>
    </div>
  )
}
