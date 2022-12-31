import React from "react"
import ReactDOM from "react-dom"
import Pdf from "react-to-pdf"
import ReactToPdf from "react-to-pdf"
import "./style.css"
import Heading from "./components/Heading.js"
import Education from "./components/Education.js"
import Form from "./components/Form.js"
import EducationForm from "./components/EducationForm.js"
const ref = React.createRef()
const options = {

}
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
            educationList: [],
            experienceList: [],
            projectList: []
    })

    /* Function to change state objects */
    function handleChange(event, dataset, index, pointNum){
        // name: input name property, value: input field value
        const {name, value, type, checked} = event.target
        // Replacing entire form data state object
        setFormData(prevFormData => {
             return {
                    ...prevFormData,
                    //Replacing dataset property i.e. information section object
                    //If array, it's a data section
                    [dataset]: Array.isArray(prevFormData[dataset]) ?
                        //Find desired index. Do so by
                        //mapping over each object in the data section.
                        prevFormData[dataset].map(dataObj => {
                            return dataObj.index === index ? {
                                    ...dataObj,
                                    //Desired property within data object
                                    [name]: [name] == "points" ?
                                                dataObj[name].map(pointObj => {
                                                return (pointObj.pointIndex === pointNum ? {pointIndex: pointNum, pointContent: value} : pointObj)
                                    }) : value
                                } : dataObj
                        }) : value
                 }
        })
    }
    function addEducation(dataset){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [dataset]: prevFormData[dataset].concat(
                    {
                        index: prevFormData[dataset].length,
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
    function removeEducation(index, dataset){
        setFormData(prevFormData => {
            let newArr = prevFormData[dataset].map(i => ({...i})) //Copy
            //old data array
            for(let i = newArr.length - 1; i > index; i --){ //Decrement indices
                //of succeeding elements
                newArr[i].index = newArr[i].index - 1;
            }
            newArr.splice(index, 1) //Remove element at index
                return ({ //return new data object with updated array
                    ...prevFormData,
                    [dataset]: newArr
                })
            }
        )
    }
    function addPoint(index, dataset){
        setFormData(prevFormData => {
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
        setFormData(prevFormData => {
            let newArr = prevFormData[dataset].map(i => ({...i})) //Copy old data object array
            let pointsList = newArr[index].points //points array
            for(let i = pointsList.length - 1; i > pointNum; i --){ //decrement succeeding indices
                pointsList[i].pointIndex --
            }
            pointsList.splice(pointNum, 1) //remove point object at given index
            console.log("ARR: " + JSON.stringify(newArr))
            return ({
                ...prevFormData,
                [dataset]: newArr
            })
        })
    }

    /* Layout of main app page */

    return(
        <div className="page">
            {/************************************************************/}
            {/******************** Left: resume view ********************/}
            {/************************************************************/}
            <div ref={ref} className="view">
                {/******************** View: Personal Information ********************/}
                <Heading personalInfo={formData.personalInformation[0]}/> 
                {/******************** View: Education ********************/}
                {formData.educationList.length > 0 && 
                    <div>
                        <h1 className="heading-text">Education</h1>
                        <hr/>
                        {formData.educationList.map(educationObject => {
                            return (
                                <Education dataset={educationObject}/>
                            )}
                        )}
                    </div>
                    }
                {/******************** View: Experience ********************/}
                {formData.experienceList.length > 0 && 
                    <div>
                        <h1 className="heading-text">Experience</h1>
                        <hr/>
                        {formData.experienceList.map(experienceObject => {
                            return (
                                <Education dataset={experienceObject}/>
                            )}
                        )}
                    </div>
                    }
                {/******************** View: Projects ********************/}
                {formData.projectList.length > 0 && 
                    <div>
                        <h1 className="heading-text">Projects</h1>
                        <hr/>
                        {formData.projectList.map(projectObject => {
                            return (
                                <Education dataset={projectObject}/>
                            )}
                        )}
                    </div>
                    }
            </div>
            {/************************************************************/}
            {/******************** Right: input form ********************/}
            {/************************************************************/}
            <div className="control">
                <Form 
                    index={0}
                    formData={formData}
                    dataset="personalInformation"
                    handleChange={handleChange}
                    addEducation={addEducation}
                />
                {/********************Form: Education ********************/}
                <h1>Education</h1>
                <button type="button" onMouseDown={() => (addEducation("educationList"))}>Add Education</button>
                {formData.educationList.map(educationObject => {
                    return (
                        <EducationForm
                            index={educationObject.index}
                            dataset="educationList"
                            formData={formData}
                            handleChange={handleChange}
                            removeEducation={removeEducation}
                            addPoint={addPoint}
                            removePoint={removePoint}
                        />
                    )
                })}
                {/******************** Form: Experience ********************/}
                <h1>Experience</h1>
                <button type="button" onMouseDown={() => (addEducation("experienceList"))}>Add Experience</button>
                {formData.experienceList.map(experienceObject => {
                    return (
                        <EducationForm
                            index={experienceObject.index}
                            dataset="experienceList"
                            formData={formData}
                            handleChange={handleChange}
                            removeEducation={removeEducation}
                            addPoint={addPoint}
                            removePoint={removePoint}
                        />
                    )
                })}
                {/******************** Form: Projects ********************/}
                <h1>Projects</h1>
                <button type="button" onMouseDown={() => (addEducation("projectList"))}>Add Project</button>
                {formData.projectList.map(projectObject => {
                    return (
                        <EducationForm
                            index={projectObject.index}
                            dataset="projectList"
                            formData={formData}
                            handleChange={handleChange}
                            removeEducation={removeEducation}
                            addPoint={addPoint}
                            removePoint={removePoint}
                        />
                    )
                })}
            </div>
            
            <div>
                <Pdf targetRef={ref} filename="file.pdf" options={options} scale={1}>
                    {({toPdf}) => (
                        <button onClick={toPdf}>Generate pdf</button>
                    )}
                </Pdf>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))