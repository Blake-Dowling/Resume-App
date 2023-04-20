import React from "react"

export default function InfoItem(props){
    return (
        <div className="section-item-container">
            <div className="section--item">
                {/* Title 1 (certificate / role) */}
                {props.dataset.certificate &&
                    <p className="title-1" onMouseOver={(event) => props.itemPopup(event)}>{props.dataset.certificate}</p>
                }
                {/* Title 2 (institution / employer) */}
                {props.dataset.institution &&
                    <p className="title-2" onMouseOver={(event) => props.itemPopup(event)}>{props.dataset.institution}</p>
                }
                <div className="date-location">
                    {/* Date */}
                    {props.dataset.dates &&
                        <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="calendar-logo" src="/images/Calendar-Logo.png"/>
                            <p className="section-info" onMouseOver={(event) => props.itemPopup(event)}>{props.dataset.dates}</p>
                        </div>
                    }
                    {/* Location */}
                    {props.dataset.location &&
                        <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="location-logo" src="/images/Location-Logo.png"/>
                            <p className="section-info" onMouseOver={(event) => props.itemPopup(event)}>{props.dataset.location}</p>
                        </div>
                    }
                </div>
                {/* Bullet points */}
                <div className="points-container">
                    {props.dataset.points.map((pointObj) => {return (
                        <ul>
                            <li className="point" onMouseOver={(event) => props.itemPopup(event)}>{pointObj.pointContent}</li>
                        </ul>
                    )})}
                </div>
            </div>
        </div>
    )
}