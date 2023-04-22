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
    /* Function to change state objects */
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
    //Adds a bullet point field to the given info section
    function addPoint(index, dataset){
        props.setFormData(prevFormData => {
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
        props.setFormData(prevFormData => {
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

return (
    <div className="control">
    <button id="generate-button" className="form-button" onClick={generatePDF} type="button">Generate PDF</button>
        {Object.values(props.sectionList).map((sectionValue, sectionIndex) => {
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
                    {props.formData[sectionName].map(dataObject => {
                        return (
                            <FormSection
                                infoFields={fields}
                                index={dataObject.index}
                                dataset={sectionName}
                                formData={props.formData}
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
  )
}


{/************************************************************/}
            {/******************** Right: input form ********************/}
            {/************************************************************/}
