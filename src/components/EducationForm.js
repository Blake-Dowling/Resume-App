import React from "react"
export default function EducationForm(props){
    //Passed data object
    const dataObj = props.formData[props.dataset][props.index]
    return(
<form>
                    <div>
                        {/* For passed data object, map all of its properties to input fields 
                        (if their values are strings) */}
                        {Object.keys(dataObj).map((fieldKey) => {
                            {console.log(fieldKey)}
                            return ( (typeof dataObj[fieldKey] === 'string') ? 
                                <input
                                type="text"
                                placeholder={fieldKey}
                                onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                                name={fieldKey}
                                value={dataObj[fieldKey]}
                            /> : <></>
                        )})}
                        {/* <input
                            type="text"
                            placeholder="certificate"
                            onChange={(event) => props.handleChange(event, props.dataset, props.index)}

                            name="certificate"
                            value={dataObj.certificate}
                        /> */}
                        {/* <input
                            type="text"
                            placeholder="institution"
                            onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                            name="institution"
                            value={dataObj.institution}
                        />
                        <input
                            type="text"
                            placeholder="dates"
                            onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                            name="dates"
                            value={dataObj.dates}
                        />
                        <input
                            type="text"
                            placeholder="location"
                            onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                            name="location"
                            value={dataObj.location}
                        /> */}
                        {/* Check that information section's data object has a 'points' property. (Personal information
                            does not have this property, so do not attempt to render.) */}
                        {dataObj.points === undefined ? <></> : (
                            <div>
                                <button
                                    type="button"
                                    onMouseDown={() => props.addPoint(props.index, props.dataset)}
                                    >Add Point
                                </button>
                                {dataObj.points.map(({pointIndex, pointContent}) => {
                                        return (<div>
                                                    <input
                                                        type="text"
                                                        onChange={(event) => props.handleChange(event, props.dataset, props.index, pointIndex)}
                                                        name="points"
                                                        value={dataObj.points[pointIndex].pointContent}
                                                    />
                                                    <button
                                                    type="button"
                                                    onMouseDown={() => props.removePoint(props.index, props.dataset, pointIndex)}
                                                    >Remove Point
                                                    </button>
                                                </div>
                                        )
                                    }
                                )}
                            </div>
                        )}
                        
                        <button 
                            type="button" 
                            onMouseDown={() => props.removeEducation(props.index, props.dataset)}>Remove 
                                {props.dataset === "educationList" ? " Education" :
                                  props.dataset === "experienceList" ? " Experience" :
                                  props.dataset === "projectList" ? " Project" :
                                                   "Item" }
                        </button>
                    </div>
                {/* } */}
</form>
    )
}