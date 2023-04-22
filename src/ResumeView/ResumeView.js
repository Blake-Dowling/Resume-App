import React from 'react'
import Heading from '../components/Heading'
import InfoItem from '../components/InfoItem'

const ref = React.createRef()

export default function ResumeView(props) {
    const format = props.format
    // Object containing template style variables to apply to resume
    let resumeStyle = {
        ["--width"]: `${format[18].formatValue}px`,
        ["min-width"]: "var(--width)",
        height: "calc(1.2942 * var(--width))",
        ["--view-width"]: format[18].formatValue,
        ["--view-height"]: 1.2942 * format[18].formatValue,
        background: format[19].formatValue,
        overflow: "scroll",
        display: "flex",
        ["flex-flow"]: "column",
        ["--padding-width"]: `${(format[0].formatValue / 8.5) * format[18].formatValue}`,
        filter: "drop-shadow(5px 5px 5px var(--drop-shadow-color))",
        ["font-family"]: format[20].formatValue,
        ["--columns"]: format[21].formatValue,
        ["--heading-font-size"]: format[5].formatValue,
        ["--heading-color"]: format[6].formatValue,
        ["--title-1-font-size"]: format[1].formatValue,
        ["--title-1-color"]: format[2].formatValue,
        ["--title-2-font-size"]: format[3].formatValue,
        ["--title-2-color"]: format[4].formatValue,
        ["--section-line-display"]: format[7].formatValue,
        ["--section-line-color"]: format[8].formatValue,
        ["--subsection-line-display"]: format[9].formatValue,
        ["--subsection-line-color"]: format[10].formatValue,
        ["--info-text-size"]: format[11].formatValue,
        ["--info-text-color"]: format[12].formatValue,
        ["--point-style"]: format[13].formatValue,
        ["--point-text-size"]: format[14].formatValue,
        ["--point-text-color"]: format[15].formatValue,
        ["--section-info-size"]: format[16].formatValue,
        ["--section-info-color"]: format[17].formatValue,
        ["--text-margin"]: format[22].formatValue,
        ["--line-margin"]: format[23].formatValue
    }
  return (
    <div ref={ref} style={resumeStyle} className="view">
                <div className="margin" onMouseOver={(event) => props.itemPopup(event)}>

                </div>
                <div ref={ref} className="view-info"> 
                    {/******************** View: Personal Information ********************/}
                    <Heading personalInfo={props.formData.personalInformation[0]} itemPopup={props.itemPopup}/> 
                    {/******************** View: Information Sections ********************/}
                    <div className="section--container">
                        {props.sectionList.map((formSectionObject) =>
                            {const section = formSectionObject.sectionName
                                return (
                                props.formData[section].length > 0 && section !== "personalInformation" &&
                                
                                    <div className="section--block">
                                    <h2 className="heading-text" onMouseOver={(event) => props.itemPopup(event)}>{formSectionObject.title}</h2>
                                    <hr className="hr-section" onMouseOver={(event) => props.itemPopup(event)}/>
                                    {Object.values(props.formData[section]).map((sectionObject, sectionIndex) => {
                                        return (
                                            <div>
                                                <InfoItem dataset={sectionObject} itemPopup={props.itemPopup}/>
                                                {sectionIndex < (props.formData[section].length - 1) &&
                                                    <hr className="hr-section-item" onMouseOver={(event) => props.itemPopup(event)} hidden={sectionObject.index < props.formData[section].length - 1 ? false : true}/>}
                                            </div>
                                        )}
                                    )}
                                    </div>
                                )}
                        )}
                    </div>
                </div>
            </div>
  )
}
