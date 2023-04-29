import React from "react"
import ReactDOM from "react-dom"

//import "./style.css"
import "./scss/main.css"


import Popup from "./components/Popup.js"
import formatState0 from "./formatStates/formatState0.js"
import formatState1 from "./formatStates/formatState1.js"
import formatState2 from "./formatStates/formatState2.js"
import templateSlide0 from './images/template_slides/templateSlide0.png'
import templateSlide1 from './images/template_slides/templateSlide1.png'
import templateSlide2 from './images/template_slides/templateSlide2.png'
import formState0 from "./formatStates/formState0.js"
import InputForm from "./Input/InputForm"
import ResumeView from "./ResumeView/ResumeView.js"
import Slider from "./components/Slider"

const options = {

}

function App(){
    // ****************************** Format ******************************
    // Resume styling template. Object containing styles imported
    // from .js file.
    const formatStates = [
        {format: formatState0, slide: templateSlide0},
        {format: formatState1, slide: templateSlide1},
        {format: formatState2, slide: templateSlide2}
    ]
    const [format, setFormat] = React.useState(
        formatState0
    )
    function changeFormat(newFormat){
        return setFormat(prevFormat => {
            return newFormat
        })
    }
    // Callback function to change the attribute indicated by event.
    // Invoked in Popup component.
    function changeFormatAttribute(event, formatIndex){
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
         formState0 
    )
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
    // configures popup attributes accordingly
    function itemPopup(event){
        
        console.log(event.target.className)
        const targetClass = event.target.className 
        const indices = targetClass === "title-1" ? [1, 2, 20, 22] : //First descriptor of section instance - text
                        targetClass === "title-2" ? [3, 4, 20, 22] : //Second descriptor of section instance - text
                        targetClass === "heading-text" ? [5, 6, 20, 22] : //Name and section titles - text
                        targetClass === "hr-section" ? [7, 8, 23] : 
                        targetClass === "hr-section-item" ? [9, 10, 20, 23] : 
                        targetClass === "info-text" ? [11, 12, 20, 22] : //personal information text - text
                        targetClass === "point" ? [13, 14, 15, 20, 22] : //bullet point and its text - text
                        targetClass === "section-info" ? [16, 17, 20, 22] : //dates and locations - text
                        targetClass === "margin" ? [0, 19, 20, 21] : [] //resume margins
                        
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
            <Slider
                changeFormat={changeFormat}
                formatStates = {formatStates}
            />
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
                    changeFormatAttribute={changeFormatAttribute}
                />
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))