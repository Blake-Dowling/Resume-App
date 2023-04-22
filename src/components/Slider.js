import React from 'react'
import template_slide1 from '../images/template_slides/template_slide1.png'
import formatState1 from '../formatStates/formatState1'

function Slide(props){
    return (
        <div className="slide" onClick={() => props.changeFormat(formatState1)}>
            <img className="template-slide-image" src={template_slide1}></img>
        </div>
    )
}

export default function Slider(props) {
  return (
    <div className="slider-container">
        <div className="slider-track">
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
            <Slide props={props}/>
        </div>
    </div>
  )
}
