import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Heading from "./components/Heading.js"
import Education from "./components/Education.js"
import Form from "./components/Form.js"
import EducationForm from "./components/EducationForm.js"

function App(){
    /* State object for all resume information */
    const [formData, setFormData] = React.useState(
        {
            /* fields for personal information */
            personalInformation: [
                {
                    index: 0,
                    name: "",
                    objective: "",
                    phone: "",
                    email: "",
                    website: "",
                    github: "",
                    linkedin: ""
                }
            ],
            /* fields for education information */
            educationList: []
    })
    /* Function to change state objects */
    function handleChange(event, dataset, index){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
             return {
                    ...prevFormData,
                    [dataset]: Array.isArray(prevFormData[dataset]) ?
                        prevFormData[dataset].map(dataObj => {
                            return dataObj.index === index ? {
                                    ...dataObj,
                                    [name]: value
                                } : dataObj
                        }) : value
                 }
        })
    }
    function addEducation(){
        console.log("Called")
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                educationList: prevFormData.educationList.concat(
                    {
                        index: prevFormData.educationList.length,
                        certificate: "",
                        institution: "",
                        dates: "",
                        location: "",
                        points: []
                    }
                )
            }
        })
    }
    function removeEducation(index){
        setFormData(prevFormData => {
            let newArr = prevFormData.educationList.map(i => ({...i})) //Copy
            //old education data array
            for(let i = newArr.length - 1; i > index; i --){ //Decrement indices
                //of succeeding elements
                newArr[i].index = newArr[i].index - 1;
            }
            newArr.splice(index, 1) //Remove element at index
                return ({ //return new data object with updated array
                    ...prevFormData,
                    educationList: newArr
                })
            }
        )
    }

    /* Layout of main app page */
    return(
        <div className="page">
            {/* Left: resume view */}
            <div className="view">
                {/* Personal Information */}
                <Heading personalInfo={formData.personalInformation[0]}/> 
                {/* Education */}
                {formData.educationList.map(educationObject => {
                    return (
                        <Education educationData={educationObject}/>
                    )}
                )}
            </div>
            {/* Right: input form */}
            <div className="control">
                <Form 
                    index={0}
                    formData={formData}
                    dataset="personalInformation"
                    handleChange={handleChange}
                    addEducation={addEducation}
                />
                {formData.educationList.map(educationObject => {
                    return (
                        <EducationForm
                            index={educationObject.index}
                            dataset="educationList"
                            formData={formData}
                            handleChange={handleChange}
                            removeEducation={removeEducation}
                        />
                    )
                })}
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))