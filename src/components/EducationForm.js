import React from "react"
export default function EducationForm(props){
    return(
<form>
    
        
                {/* {props.formData.educationList.length > 0 && */}
                    <div>
                        <input
                            type="text"
                            placeholder="certificate"
                            onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                            name="certificate"
                            value={props.formData[props.dataset][props.index].certificate}
                        />
                        <input
                            type="text"
                            placeholder="institution"
                            onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                            name="institution"
                            value={props.formData[props.dataset][props.index].institution}
                        />
                        <input
                            type="text"
                            placeholder="dates"
                            onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                            name="dates"
                            value={props.formData[props.dataset][props.index].dates}
                        />
                        <input
                            type="text"
                            placeholder="location"
                            onChange={(event) => props.handleChange(event, props.dataset, props.index)}
                            name="location"
                            value={props.formData[props.dataset][props.index].location}
                        />
                        <button
                            type="button"
                            onMouseDown={() => props.addPoint(props.index, props.dataset)}
                            >Add Point
                        </button>
                        {props.formData[props.dataset][props.index].points.map(({pointIndex, pointContent}) => {
                            // {console.log("points: " + JSON.stringify(props.formData[props.dataset][props.index].points[pointIndex].pointContent))}
                                return (<div>
                                            <input
                                                type="text"
                                                onChange={(event) => props.handleChange(event, props.dataset, props.index, pointIndex)}
                                                // name={`points[${pointIndex}].pointContent`}
                                                name="points"
                                                value={props.formData[props.dataset][props.index].points[pointIndex].pointContent}
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