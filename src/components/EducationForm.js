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
                        <button type="button" onMouseDown={() => props.removeEducation(props.index, props.dataset)}>Remove {props.dataset === "educationList"? "Education" : "Experience"}</button>
                    </div>
                {/* } */}
</form>
    )
}