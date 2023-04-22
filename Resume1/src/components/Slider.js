import React from 'react'
import template_slide1 from '../images/template_slide1.png'


export default function Slider() {
  return (
    <div className="slider-container">
        <div className="slider-track">
            <div className="slide">
                <img className="template-slide-image" src={template_slide1}></img>
            </div>
            <div className="slide">
                <img className="template-slide-image" src={template_slide1}></img>
            </div>
            <div className="slide">
                <img className="template-slide-image" src={template_slide1}></img>
            </div>
            <div className="slide">
                <img className="template-slide-image" src={template_slide1}></img>
            </div>
            <div className="slide">
                <img className="template-slide-image" src={template_slide1}></img>
            </div>
            <div className="slide">
                <img className="template-slide-image" src={template_slide1}></img>
            </div>
            <div className="slide">
                <img className="template-slide-image" src={template_slide1}></img>
            </div>
        </div>
    </div>
  )
}
