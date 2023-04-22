import React from 'react'
import {jsPDF} from "jspdf"
import FormSection from '../components/FormSection'

function generatePDF(){
    const doc = jsPDF("p", "pt", "a4")
    doc.html(document.querySelector(".view"), {
        callback: function(pdf){
            pdf.save("mypdf.pdf")
        }
    })
}

export default function InputForm(props) {

    // Hides a section of input form (accordion)
    function changeVisibility(sectionIndex){
        return (props.setSectionList(prevSectionList => {
            let newSectionObject = prevSectionList[sectionIndex]
            newSectionObject.visible = !newSectionObject.visible
            let newSectionList = prevSectionList.map(i => (i))
            newSectionList[sectionIndex] = newSectionObject
            return (newSectionList)
        }))
    }
    // Change sections' indices in sectionList
    function ordersectionList(sectionIndex, operation){
        props.setSectionList(prevsectionList => {
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
    function addSection(dataset){
        props.setFormData(prevFormData => {
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
    // V
    function removeSection(index, dataset){
        props.setFormData(prevFormData => {
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
    /* Updates form data state (e.g. when user changes an input). Called 
    by JSX elements in FormSection. */
    function handleChange(event, dataset, index, pointNum){
        // name: input name property, value: input field value
        const {name, value, type, checked} = event.target
        // Replacing entire form data state object
        props.setFormData(prevFormData => {
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

return (
    <div className="control">
        {/* Generate PDF button */}
    <button id="generate-button" className="form-button" onClick={generatePDF} type="button">Generate PDF</button>
        {/* Display information sections onto input form */}
        {Object.values(props.sectionList).map((sectionValue, sectionIndex) => {
            const sectionName = sectionValue.sectionName
            const fields = sectionValue.fields
            return(
                
            <div className="form-section"> {/* Form section container */}
                <div className="form-section-title"> 
                    {/* Accordion effect button (Hides section when click title area) */}
                    <a className="form-data-button" onClick={() => (changeVisibility(sectionIndex))}></a>
                    {/* Enable sections (except personal info) to be moved up or down in order */}
                    {sectionName !== "personalInformation" && 
                    <div> {/* Up and down buttons */}
                        <button className="up-button" onClick={() => ordersectionList(sectionIndex, "up")}></button>
                        <button className="down-button" onClick={() => ordersectionList(sectionIndex, "down")}></button>
                    </div>}
                    {/* Form section title (e.g. 'Personal Information') */}
                    <h2 className="form-section-heading">{sectionValue.title}</h2>
                    {sectionName !== "personalInformation" &&
                        // Button for adding a new instance of a section (except personal info)
                        // (Note: remove section instance button is in FormSection component)
                        <button 
                            className="form-button" 
                            type="button" 
                            onClick={() => (addSection(sectionName))}
                            >Add {sectionValue.title}
                        </button>
                    }
                </div>
                {/* Within each section, the following code lists (maps)
                    each of its instances as FormSection components */}
                {/* <div className="form-data" style={sectionValue.visible ? {} : {display: "none"}}> */}
                <div className="form-data" hidden={!sectionValue.visible}>
                    {props.formData[sectionName].map(dataObject => {
                        return (
                            <FormSection
                                infoFields={fields}
                                index={dataObject.index}
                                dataset={sectionName}
                                formData={props.formData}
                                setFormData={props.setFormData}
                                handleChange={handleChange}
                                removeSection={removeSection}
                                // addPoint={addPoint}
                                // removePoint={removePoint}
                            />
                        )
                    })}
                </div>
        </div>)}
    )}
    </div>
  )
}
