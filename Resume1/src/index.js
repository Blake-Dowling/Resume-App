import React from "react"
import ReactDOM from "react-dom"

//import "./style.css"
import "./scss/main.css"


import Popup from "./components/Popup.js"
import formatState from "./formatState.js"
import InputForm from "./Input/InputForm"
import ResumeView from "./ResumeView/ResumeView.js"
import Slider from "./components/Slider"

const options = {

}

function App(){
    // ****************************** Format ******************************
    // Resume styling template. Object containing styles imported
    // from .js file.
    const [format, setFormat] = React.useState(
        formatState
    )
    function changeFormat(event, formatIndex){
        const {name, value} =  event.target
        let newFormat = format[formatIndex]
        newFormat["formatValue"] = value
        return setFormat(prevFormatList => {
            let newFormatList = prevFormatList.map(i => (i))
            newFormatList[formatIndex] = newFormat
            return (newFormatList)
        })
    }
    // ****************************** Data ******************************
    /* State object for all resume information */
    // Gets updated in InputForm and shown in ResumeView and InputForm
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
            /* fields for section information */
            educationList: [],
            experienceList: [],
            projectList: []
    })
    // ****************************** Sections ******************************
    // List of fields for each section. E.g. 'education' contains ['certificate', 'institution', ...]
    const personalInfoFields = ["name", "objective", "phone", "email", "website", "github", "linkedin"]
    const educationFields = ["certificate", "institution", "dates", "location"]
    const experienceFields = ["title", "company", "dates", "location"]
    const projectFields = ["project name"]
    // Info sections e.g. 'personal information', 'education', ... Displayed in user input form and resume page view
    const [sectionList, setSectionList] = React.useState([
        {sectionName: "personalInformation", fields: personalInfoFields, title: "Personal Information", visible: true},
        {sectionName: "educationList", fields: educationFields, title: "Education", visible: true},
        {sectionName: "experienceList", fields: experienceFields, title: "Experience", visible: true},
        {sectionName: "projectList", fields: projectFields, title: "Projects", visible: true}
    ])
    // ****************************** Popup ******************************
    // State of popup. Changed in ResumeView component and its data displayed in Popup component.
    const [popupState, setPopupState] = React.useState({attributeIndices: [], visible: false, xpos: "0px", ypos: "0px"})
    // Callback function used by JSX elements in ResumeView component. Makes 
    // popup appear under cursor when a resume feature is hovered and 
    // configures popup accordingly
    function itemPopup(event){
        console.log(event.target.className)
        const targetClass = event.target.className
        const indices = targetClass === "title-1" ? [1, 2] :
                        targetClass === "title-2" ? [3, 4] :
                        targetClass === "heading-text" ? [5, 6] :
                        targetClass === "hr-section" ? [7, 8] :
                        targetClass === "hr-section-item" ? [9, 10] :
                        targetClass === "info-text" ? [11, 12] :
                        targetClass === "point" ? [13, 14, 15] :
                        targetClass === "section-info" ? [16, 17] :
                        targetClass === "margin" ? [0, 19, 20, 21] : []
        setPopupState(prevPopup => {
            return ({...prevPopup, attributeIndices: indices, visible: true, xpos: `${event.clientX}px`, ypos: `${event.clientY}px`})
        })
    }
    function popupHide(){
        setPopupState(prevPopup => {
            return ({...prevPopup, visible: false})
        })
    }




    /* Layout of main app page */

    return(
        <div className="page">
            <Slider/>
            <div className="page-body">
                <ResumeView
                    format={format}
                    itemPopup={itemPopup}
                    formData={formData}
                    sectionList={sectionList}
                />
                <InputForm
                    sectionList={sectionList}
                    setSectionList={setSectionList}
                    formData={formData}
                    setFormData={setFormData}
                />
                <Popup
                    popupState={popupState}
                    attributeIndices={popupState.attributeIndices}
                    visible={popupState.visible}
                    popupHide={popupHide}
                    format={format}
                    changeFormat={changeFormat}
                />
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))