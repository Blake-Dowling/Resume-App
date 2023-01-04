import React from "react"
export default function Popup(props){
    return (
        // <div className="popupEnv" style={props.popupStyle}>
            <div className="popup" style={props.popupStyle} hidden={!props.visible} onMouseOut={props.popupHide}>
                
            </div>
        // </div>
    )
}