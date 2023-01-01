import React from "react"

export default function DataSection(props){
    return (
        <div className="section--container">
            <div className="section--item">
                {/* Title 1 (certificate / role) */}
                {props.dataset.certificate &&
                    <p className="title-1">{props.dataset.certificate}</p>
                }
                {/* Title 1 (institution / employer) */}
                {props.dataset.institution &&
                    <p className="title-2">{props.dataset.institution}</p>
                }
                <div className="date-location">
                    {/* Date */}
                    {props.dataset.dates &&
                        <div className="header--contact--object">
                            <img className="calendar-logo" src="/images/Calendar-Logo.png"/>
                            <p className="contact-info">{props.dataset.dates}</p>
                        </div>
                    }
                    {/* Location */}
                    {props.dataset.location &&
                        <div className="header--contact--object">
                            <img className="location-logo" src="/images/Location-Logo.png"/>
                            <p className="contact-info">{props.dataset.location}</p>
                        </div>
                    }
                </div>
                {/* Bullet points */}
                <div className="points-container">
                    {props.dataset.points.map((pointObj) => {return (
                        <ul>
                        <li className="point">{pointObj.pointContent}</li>
                        </ul>
                    )})}
                </div>
            </div>
        </div>
    )
}