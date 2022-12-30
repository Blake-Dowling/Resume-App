import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Heading from "./components/Heading.js"
import Education from "./components/Education.js"
import Form from "./components/Form.js"

function App(){
    const [formData, setFormData] = React.useState(
        {
            name: "",
            objective: "",
            phone: "",
            email: "",
            website: "",
            github: "",
            linkedin: "",
    })
    function handleChange(event){
        const {name, value} = event.target
        console.log(name + ", " + value)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    return(
        <div className="page">
            <div className="view">
                <Heading formData={formData}/> 
                <Education/>
            </div>
            <div className="control">
                <Form formData={formData} handleChange={handleChange}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))