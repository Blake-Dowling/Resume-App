import React from "react"
import InfoItem from "./InfoItem.js"
export default function InfoSection(props){
    const dataItemList = props.formData[props.dataItemList]
    return(
        <div>
            {dataItemList.length > 0 && 
                    <div>
                        <h2 className="heading-text">{props.dataItemList}</h2>
                        <hr/>
                        {dataItemList.map(educationObject => {
                            return (
                                <InfoItem dataset={educationObject}/>
                            )}
                        )}
                    </div>
                    }
        </div>
    )
}