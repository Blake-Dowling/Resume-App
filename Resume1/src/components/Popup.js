import React from "react"

export default function Popup(props){
    const formatArray = props.attributeIndices.map(i => (props.format[i]))
    console.log(props.attributeIndices)
    // Style attributes used for popup
    const popupStyle = {
        position: "absolute",
        width: "auto",
        height: "auto",
        left: props.popupState.xpos,
        top: props.popupState.ypos,
        background: "white",
        // border: "1px solid black",
        padding: "4px"
    }

    return (
        
        // <div className="popupEnv" style={props.popupStyle}>
            <div className="popup" style={popupStyle} hidden={!props.visible} onMouseLeave={props.popupHide}>
                
                {formatArray.map( formatObj => {
                    const formatId = formatObj.formatId
                    const formatValue = formatObj.formatValue
                    const formatName = formatObj.formatName
                    const formatOptions = formatObj.formatOptions
                    return (
                        // Container for popup
                        <div className="form-input-object">
                                                <div className="form-input-object">
                                                    {/* Attribute name */}
                                                    <p className="form-input-field" htmlFor="form-input">
                                                        {formatName}
                                                    </p>
                                                    {/* Dropdown for attribute value options */}
                                                    <select
                                                        className="form-input"
                                                        id="form-input"
                                                        type="text"
                                                        onChange={(event) => props.changeFormat(event, formatId)}
                                                        name={formatId}
                                                        value={formatValue}
                                                    > 
                                                    {formatOptions.map(option => {
                                                        return (<option value={option}>{option}</option>)
                                                    })}
                                                    </select>
                                                    
                                                </div>
                        </div>)}
                )}
            </div>
        // </div>
    )
}