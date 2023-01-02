import React from "react"
import ReactDOM from "react-dom"
import {jsPDF} from "jspdf"
import "./style.css"
import Heading from "./components/Heading.js"
import InfoItem from "./components/InfoItem.js"
import InfoSection from "./components/InfoSection.js"
import FormSection from "./components/FormSection.js"
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
    const [sectionList, setSectionList] = React.useState([])
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
    function addSection(dataset){
        setFormData(prevFormData => {
            if(prevFormData[dataset].length == 0){
                editSectionList(dataset, "add")
            }
            return {
                ...prevFormData,
                [dataset]: dataset !== "projectList" ? 
                    prevFormData[dataset].concat(
                        {
                            index: prevFormData[dataset].length,
                            certificate: "",
                            institution: "",
                            dates: "",
                            location: "",
                            points: []
                        }
                    ):
                    prevFormData[dataset].concat(
                        {
                            index: prevFormData[dataset].length,
                            certificate: "",
                            points: []
                        }
                    )
            }
        })
    }
    function removeSection(index, dataset){
        setFormData(prevFormData => {
            let newArr = prevFormData[dataset].map(i => ({...i})) //Copy
            //old data array
            for(let i = newArr.length - 1; i > index; i --){ //Decrement indices
                //of succeeding elements
                newArr[i].index = newArr[i].index - 1;
            }
            newArr.splice(index, 1) //Remove element at index
            if(newArr.length == 0){
                editSectionList(dataset, "remove")
            }
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
            return ({
                ...prevFormData,
                [dataset]: newArr
            })
        })
    }

    function editSectionList(sectionName, operation){
        
        setSectionList(prevSectionList => {
            let newSectionList = prevSectionList.map(i => (i))
            if(operation === "add"){
                newSectionList.push(sectionName)
            } else if(operation === "remove"){
                newSectionList.splice(newSectionList.indexOf(sectionName), 1)
            }
            return ( newSectionList )
        }
        )
    }
    function orderFormSectionList(sectionIndex, operation){
        setFormSectionList(prevFormSectionList => {
            let newArr = prevFormSectionList.map(i => (i))
            if(operation === "up" && sectionIndex - 1 >= 1){
                newArr[sectionIndex - 1] = newArr[sectionIndex]
                newArr[sectionIndex] = prevFormSectionList[sectionIndex - 1]
            }
            else if(operation === "down" && sectionIndex + 1 < prevFormSectionList.length){
                newArr[sectionIndex + 1] = newArr[sectionIndex]
                newArr[sectionIndex] = prevFormSectionList[sectionIndex + 1]
            }
            console.log(newArr)
            return (newArr)
        })
    }
    function generatePDF(){
        const doc = jsPDF("p", "pt", "a4")
        doc.html(document.querySelector(".view"), {
            callback: function(pdf){
                pdf.save("mypdf.pdf")
            }
        })
    }
    /* Layout of main app page */
    const personalInfoFields = ["name", "objective", "phone", "email", "website", "github", "linkedin"]
    const educationFields = ["certificate", "institution", "dates", "location"]
    const experienceFields = ["title", "company", "dates", "location"]
    const projectFields = ["project name"]

    const [formSectionList, setFormSectionList] = React.useState([
        {sectionName: "personalInformation", fields: personalInfoFields},
        {sectionName: "educationList", fields: educationFields},
        {sectionName: "experienceList", fields: experienceFields},
        {sectionName: "projectList", fields: projectFields}
    ])

    return(
        <div className="page">
            {/************************************************************/}
            {/******************** Left: resume view ********************/}
            {/************************************************************/}
            <div ref={ref} className="view">
                {/******************** View: Personal Information ********************/}
                <Heading personalInfo={formData.personalInformation[0]}/> 
                {/******************** View: Information Sections ********************/}
                {formSectionList.map((formSectionObject) =>
                    {const section = formSectionObject.sectionName
                        console.log(formData[section].length && section !== "personalInformation")
                        return (
                        formData[section].length > 0 && section !== "personalInformation" &&
                        <div>
                            <h2 className="heading-text">{section}</h2>
                            <hr/>
                            {formData[section].map(sectionObject => {
                                return (
                                    <InfoItem dataset={sectionObject}/>
                                )}
                            )}
                        </div>)}
                )}
                {/* {sectionList.map(section =>
                    section.length > 0 && 
                        <div>
                            <h2 className="heading-text">{section}</h2>
                            <hr/>
                            {formData[section].map(sectionObject => {
                                return (
                                    <InfoItem dataset={sectionObject}/>
                                )}
                            )}
                        </div>
                )} */}
            </div>
            {/************************************************************/}
            {/******************** Right: input form ********************/}
            {/************************************************************/}
            
            <div className="control">
                {/********************Form: Education ********************/}
                

                {Object.keys(formSectionList).map((sectionKey, sectionIndex) => {
                    const sectionName = formSectionList[sectionIndex].sectionName
                    const fields = formSectionList[sectionIndex].fields
                    return(
                    <div>
                        {sectionName !== "personalInformation"&& 
                        <div>
                            <button onClick={() => orderFormSectionList(sectionIndex, "up")}>Up</button>
                            <button onClick={() => orderFormSectionList(sectionIndex, "down")}>Down</button>
                        </div>}
                        <h2>{sectionName}</h2>
                        {sectionName !== "personalInformation" &&
                            <button 
                                className="form-button" 
                                type="button" 
                                onMouseDown={() => (addSection(sectionName))}
                                >Add {sectionName}
                            </button>}
                        {formData[sectionName].map(dataObject => {
                            return (
                                <FormSection
                                    infoFields={fields}
                                    index={dataObject.index}
                                    dataset={sectionName}
                                    formData={formData}
                                    handleChange={handleChange}
                                    removeSection={removeSection}
                                    addPoint={addPoint}
                                    removePoint={removePoint}
                                />
                            )
                        })}
                </div>)}
            )}
            </div>
            
            <div>
                <button className="form-button" onClick={generatePDF} type="button">Generate PDF</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))