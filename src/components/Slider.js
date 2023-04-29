import React from 'react'
// import template_slide1 from '../images/template_slides/template_slide1.png'
// import formatState1 from '../formatStates/formatState1'

function Slide(props){
    return (
        <div className="slide" onClick={() => props.changeFormat(props.format)}>
            <img className="template-slide-image" src={props.slide}></img>
        </div>
    )
}

export default function Slider(props) {
  return (
    <div className="slider-container">
        <div className="slider-track">
            <div className="slide-carrier">
                {props.formatStates.map((formatState) => {
                    return (<Slide format={formatState.format} slide={formatState.slide} changeFormat={props.changeFormat}/>)
                })}
            </div>
            <div className="slide-carrier">
                {props.formatStates.map((formatState) => {
                    return (<Slide format={formatState.format} slide={formatState.slide} changeFormat={props.changeFormat}/>)
                })}
            </div>
            <div className="slide-carrier">
                {props.formatStates.map((formatState) => {
                    return (<Slide format={formatState.format} slide={formatState.slide} changeFormat={props.changeFormat}/>)
                })}
            </div>

        </div>
    </div>
  )
}
