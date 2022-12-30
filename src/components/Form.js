import React from "react"
/* Props: 1. formData to maintain each form's value using the state object in index.js. 
 * 2. handleChange function to change the state of the form data */
export default function Form(props){
    
    
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={props.handleChange}
                    name="name"
                    value={props.formData.name}
                />
                <textarea
                    placeholder="objective"
                    onChange={props.handleChange}
                    name="objective"
                    value={props.formData.objective}
                />
                <input
                    type="text"
                    placeholder="phone"
                    onChange={props.handleChange}
                    name="phone"
                    value={props.formData.phone}
                />
                <input
                    type="text"
                    placeholder="email"
                    onChange={props.handleChange}
                    name="email"
                    value={props.formData.email}
                />
                <input
                    type="text"
                    placeholder="website"
                    onChange={props.handleChange}
                    name="website"
                    value={props.formData.website}
                />
                <input
                    type="text"
                    placeholder="Github"
                    onChange={props.handleChange}
                    name="github"
                    value={props.formData.github}
                />
                <input
                    type="text"
                    placeholder="Linkedin"
                    onChange={props.handleChange}
                    name="linkedin"
                    value={props.formData.linkedin}
                />
            </form>
        </div>
    )
}