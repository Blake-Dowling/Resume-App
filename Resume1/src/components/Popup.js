import React from "react"

export default function Popup(props){
    const formatArray = props.attributeIndices.map(i => (props.format[i]))
    console.log(props.attributeIndices)
    return (
        
        // <div className="popupEnv" style={props.popupStyle}>
            <div className="popup" style={props.popupStyle} hidden={!props.visible} onMouseLeave={props.popupHide}>
                
                {formatArray.map( formatObj => {
                    const formatId = formatObj.formatId
                    const formatValue = formatObj.formatValue
                    const formatName = formatObj.formatName
                    const formatOptions = formatObj.formatOptions
                    return (
                        <div className="form-input-object">
                                                <div className="form-input-object">
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
                                                    <p className="form-input-field" htmlFor="form-input">
                                                        {formatName}
                                                    </p>
                                                </div>
                        </div>)}
                )}
            </div>
        // </div>
    )
}