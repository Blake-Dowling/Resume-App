import React from "react"
import ReactDOM from "react-dom"
import {jsPDF} from "jspdf"
import "./style.css"
import Heading from "./components/Heading.js"
import InfoItem from "./components/InfoItem.js"
import FormSection from "./components/FormSection.js"
const ref = React.createRef()
const options = {

}
function App(){
    const [format, setFormat] = React.useState(
        [{
            formatId: 0,
            formatValue: 1.0,
            formatName: "margins",
            formatOptions: [0.25, 0.5, 0.75, 1.0]            
        },
        {
            formatId: 1,
            formatValue: "1em",
            formatName: "title 1 size",
            formatOptions: [".6em", ".8em", "1em", "1.2em"]            
        },
        {
            formatId: 2,
            formatValue: "black",
            formatName: "title 1 color",
            formatOptions: ["black", "blue", "red", "yellow"]            
        },
        {
            formatId: 3,
            formatValue: ".9em",
            formatName: "title 2 size",
            formatOptions: [".6em", ".8em", "1em", "1.2em"]            
        },
        {
            formatId: 4,
            formatValue: "black",
            formatName: "title 2 color",
            formatOptions: ["black", "blue", "red", "yellow"]            
        },
        {
            formatId: 5,
            formatValue: "1.5em",
            formatName: "heading size",
            formatOptions: [".6em", ".8em", "1em", "1.2em"]           
        },
        {
            formatId: 6,
            formatValue: "black",
            formatName: "heading color",
            formatOptions: ["black", "blue", "red", "yellow"]            
        },
        {
            formatId: 7,
            formatValue: "flex",
            formatName: "section line",
            formatOptions: ["flex", "none"]            
        },
        {
            formatId: 8,
            formatValue: "black",
            formatName: "section line color",
            formatOptions: ["black", "blue", "red", "yellow"]           
        },
        {
            formatId: 9,
            formatValue: "flex",
            formatName: "sub-section line",
            formatOptions: ["flex", "none"]            
        },
        {
            formatId: 10,
            formatValue: "black",
            formatName: "sub-section line color",
            formatOptions: ["black", "blue", "red", "yellow"]           
        }
    ]
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
    console.log(format[1].formatValue)
    let resumeStyle = {
        ["--width"]: "600px",
        width: "var(--width)",
        height: "calc(1.2942 * 600px)",
        background: "white",
        overflow: "scroll",
        display: "flex",
        ["flex-flow"]: "column",
        
        ["padding"]: `calc(${(format[0].formatValue / 8.5)} * var(--width))`,
        filter: "drop-shadow(5px 5px 5px var(--drop-shadow-color))",
        ["--heading-font-size"]: format[5].formatValue,
        ["--heading-color"]: format[6].formatValue,
        ["--title-1-font-size"]: format[1].formatValue,
        ["--title-1-color"]: format[2].formatValue,
        ["--title-2-font-size"]: format[3].formatValue,
        ["--title-2-color"]: format[4].formatValue,
        ["--section-line-display"]: format[7].formatValue,
        ["--section-line-color"]: format[8].formatValue,
        ["--subsection-line-display"]: format[9].formatValue,
        ["--subsection-line-color"]: format[10].formatValue
        
    }
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
    function addSection(dataset){
        setFormData(prevFormData => {
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
    function ordersectionList(sectionIndex, operation){
        setSectionList(prevsectionList => {
            let newArr = prevsectionList.map(i => (i))
            if(operation === "up" && sectionIndex - 1 >= 1){
                newArr[sectionIndex - 1] = newArr[sectionIndex]
                newArr[sectionIndex] = prevsectionList[sectionIndex - 1]
            }
            else if(operation === "down" && sectionIndex + 1 < prevsectionList.length){
                newArr[sectionIndex + 1] = newArr[sectionIndex]
                newArr[sectionIndex] = prevsectionList[sectionIndex + 1]
            }
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

    const personalInfoFields = ["name", "objective", "phone", "email", "website", "github", "linkedin"]
    const educationFields = ["certificate", "institution", "dates", "location"]
    const experienceFields = ["title", "company", "dates", "location"]
    const projectFields = ["project name"]

    const [sectionList, setSectionList] = React.useState([
        {sectionName: "personalInformation", fields: personalInfoFields, title: "Personal Information", visible: true},
        {sectionName: "educationList", fields: educationFields, title: "Education", visible: true},
        {sectionName: "experienceList", fields: experienceFields, title: "Experience", visible: true},
        {sectionName: "projectList", fields: projectFields, title: "Projects", visible: true}
    ])
    function changeVisibility(sectionIndex){
        
        return (setSectionList(prevSectionList => {
            let newSectionObject = prevSectionList[sectionIndex]
            newSectionObject.visible = !newSectionObject.visible
            let newSectionList = prevSectionList.map(i => (i))
            newSectionList[sectionIndex] = newSectionObject
            return (newSectionList)
        }))
    }

    /* Layout of main app page */
    return(
        
        <div className="page">
            {/************************************************************/}
            {/******************** Left: resume view ********************/}
            {/************************************************************/}
            <div ref={ref} style={resumeStyle}>
            {/* <div ref={ref} className="view"> */}
                {/******************** View: Personal Information ********************/}
                <Heading personalInfo={formData.personalInformation[0]}/> 
                {/******************** View: Information Sections ********************/}
                {sectionList.map((formSectionObject) =>
                    {const section = formSectionObject.sectionName
                        return (
                        formData[section].length > 0 && section !== "personalInformation" &&
                        <div>
                            <h2 className="heading-text">{formSectionObject.title}</h2>
                            <hr className="hr-section"/>
                            {formData[section].map(sectionObject => {
                                return (
                                    <div>
                                        <InfoItem dataset={sectionObject}/>
                                        <hr className="hr-section-item" hidden={sectionObject.index < formData[section].length - 1 ? false : true}/>
                                    </div>
                                )}
                            )}
                        </div>)}
                )}
            </div>
            {/************************************************************/}
            {/******************** Right: input form ********************/}
            {/************************************************************/}
            <div className="control">
                {Object.values(sectionList).map((sectionValue, sectionIndex) => {
                    const sectionName = sectionValue.sectionName
                    const fields = sectionValue.fields
                    return(
                    <div className="form-section">
                        <div className="form-section-title">
                        <a className="form-data-button" onClick={() => (changeVisibility(sectionIndex))}></a>
                            {sectionName !== "personalInformation" && 
                            <div>
                                <button className="up-button" onClick={() => ordersectionList(sectionIndex, "up")}></button>
                                <button className="down-button" onClick={() => ordersectionList(sectionIndex, "down")}></button>
                            </div>}
                            <h2 className="form-section-heading">{sectionValue.title}</h2>
                            {sectionName !== "personalInformation" &&
                                <button 
                                    className="form-button" 
                                    type="button" 
                                    onClick={() => (addSection(sectionName))}
                                    >Add {sectionValue.title}
                                </button>
                            }
                        </div>
                        
                        {/* <div className="form-data" style={sectionValue.visible ? {} : {display: "none"}}> */}
                        <div className="form-data" hidden={!sectionValue.visible}>
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
                        </div>
                </div>)}
            )}
            </div>
            
            <div className="format-bar">
                <button className="form-button" onClick={generatePDF} type="button">Generate PDF</button>
                {format.map( formatObj => {
                    const formatId = formatObj.formatId
                    const formatValue = formatObj.formatValue
                    const formatName = formatObj.formatName
                    const formatOptions = formatObj.formatOptions
                    return (
                        <div className="form-input-object">
                                                    <select
                                                        className="form-input"
                                                        id="form-input"
                                                        type="text"
                                                        onChange={(event) => changeFormat(event, formatId)}
                                                        name={formatId}
                                                        value={formatValue}
                                                    > 
                                                    {formatOptions.map(option => {
                                                        return (<option value={option}>{option}</option>)
                                                    })}
                                                    </select>
                                                    <p className="form-input-field" htmlFor="form-input">
                                                        {formatName}
                                                    </p>
                        </div>)}
                )}
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))