import React from "react"
export default function FormSection(props){
    //Passed data object
    const dataObj = props.formData[props.dataset][props.index]

    //Adds a bullet point field to the given info section
    function addPoint(index, dataset){
        props.setFormData(prevFormData => {
                let newArr = prevFormData[dataset].map(i => ({...i})) //Copy
                //old data object array
                newArr[index].points.push({
                    pointIndex: newArr[index].points.length,
                    pointContent: ""}) //Add a point object to the
                //points property of the specified info section
                return ({
                    ...prevFormData,
                    [dataset]: newArr
                })
            }
        )
    }
    function removePoint(index, dataset, pointNum){
        props.setFormData(prevFormData => {
            let newArr = prevFormData[dataset].map(i => ({...i})) //Copy old data object array
            let pointsList = newArr[index].points //points array
            for(let i = pointsList.length - 1; i > pointNum; i --){ //decrement succeeding indices
                pointsList[i].pointIndex --
            }
            pointsList.splice(pointNum, 1) //remove point object at given index
            return ({
                ...prevFormData,
                [dataset]: newArr
            })
        })
    }
    

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
                                    onMouseDown={() => addPoint(props.index, props.dataset)}
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
                                                        onMouseDown={() => removePoint(props.index, props.dataset, pointIndex)}
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