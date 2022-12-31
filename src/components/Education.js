import React from "react"

export default function Education(props){
    return (
        <div className="section--container">
            <div className="section--item">
                {props.dataset.certificate &&
                    <p>{props.dataset.certificate}</p>
                }
                {props.dataset.institution &&
                    <p>{props.dataset.institution}</p>
                }
                <div className="header--contact">
                    {props.dataset.dates &&
                        <div className="header--contact--object">
                            <img className="calendar-logo" src="/images/Calendar-Logo.png"/>
                            <p className="contact-info">{props.dataset.dates}</p>
                        </div>
                    }
                    {props.dataset.location &&
                        <div className="header--contact--object">
                            <img className="location-logo" src="/images/Location-Logo.png"/>
                            <p className="contact-info">{props.dataset.location}</p>
                        </div>
                    }
                </div>
                {/* {props.dataset.points.length > 0 && */}
                    <div className="points-container">
                        {props.dataset.points.map((pointObj) => {return (
                            <ul>
                             <li className="point">{pointObj.pointContent}</li>
                             </ul>
                        )})}
                    </div>
                {/* } */}
            </div>
        </div>
    )
}