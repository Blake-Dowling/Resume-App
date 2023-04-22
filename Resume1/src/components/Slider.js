import React from 'react'
import template_slide1 from '../images/template_slide1.png'
import formatState1 from '../formatStates/formatState1'

export default function Slider(props) {
  return (
    <div className="slider-container">
        <div className="slider-track">
            <div className="slide" onClick={() => props.changeFormat(formatState1)}>
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
