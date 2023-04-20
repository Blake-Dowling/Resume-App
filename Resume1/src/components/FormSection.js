import React from "react"
export default function FormSection(props){
    //Passed data object
    const dataObj = props.formData[props.dataset][props.index]
    return(
        <form>
                    <div className="form-object-container">
                        {/************************************************************/}
                        {/******************** Form Inputs ********************/}
                        {/************************************************************/}
                        {/* For passed data object, map all of its properties to input fields 
                        (if their values are strings) */}
                        <div className="form-input-container">
                            {Object.keys(dataObj).map((fieldKey, keyIndex) => {
                                return ( (typeof dataObj[fieldKey] === 'string') ? 
                                    <div className="form-input-object">
                                        <input
                                            className="form-input"
                                            type="text"
                                            // placeholder={fieldKey}
                                            onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                                            name={fieldKey}
                                            value={dataObj[fieldKey]}
                                        /> 
                                        <p className="form-input-field">
                                            {/* {fieldKey} */}
                                            {props.infoFields[keyIndex - 1]}
                                        </p>
                                    </div> : <></>
                            )})}
                        </div>
                        {/************************************************************/}
                        {/******************** Add-Points Button ********************/}
                        {/************************************************************/}
                        {/* Check that information section's data object has a 'points' property. (Personal information
                            does not have this property, so do not attempt to render.) */}
                        {dataObj.points === undefined ? <></> : (
                            <div>
                                <button
                                    className="form-button"
                                    type="button"
                                    onMouseDown={() => props.addPoint(props.index, props.dataset)}
                                    >Add Point
                                </button>
                                {/************************************************************/}
                                {/******************** Point Inputs ********************/}
                                {/************************************************************/}
                                {dataObj.points.map(({pointIndex, pointContent}) => {
                                        return (<div className="point-input">
                                                    <input
                                                        className="form-input"
                                                        type="text"
                                                        onChange={(event) => props.handleChange(event, props.dataset, props.index, pointIndex)}
                                                        name="points"
                                                        value={dataObj.points[pointIndex].pointContent}
                                                    />
                                                    {/******************** Remove-Points Button ********************/}
                                                    <button
                                                        className="remove-point"
                                                        type="button"
                                                        onMouseDown={() => props.removePoint(props.index, props.dataset, pointIndex)}
                                                    >
                                                    </button>
                                                </div>
                                        )
                                    }
                                )}
                            </div>
                        )}
                        {/************************************************************/}
                        {/******************** Remove-Section Button ********************/}
                        {/************************************************************/}
                        {props.dataset === "personalInformation" ? <></> :
                            <button 
                                className="form-button-remove"
                                type="button" 
                                onMouseDown={() => {props.removeSection(props.index, props.dataset)}
                                    }>Remove 
                                    {props.dataset === "educationList" ? " Education" :
                                    props.dataset === "experienceList" ? " Experience" :
                                    props.dataset === "projectList" ? " Project" :
                                                    "Item" }
                            </button>
                        }
                    </div>
        </form>
    )
}