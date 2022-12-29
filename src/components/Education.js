import React from "react"

export default function Education(){
    return (
        <div className="section--container">
            <div className="section--item">
                <h1>Education</h1>
                <hr/>
                <p>B.S., Computer Science</p>
                <p>University of California, Santa Cruz</p>
                <div className="header--contact">
                    <div className="header--contact--object">
                        <img className="calendar-logo" src="/images/Calendar-Logo.png"/>
                        <p className="contact-info">2023</p>
                    </div>
                    <div className="header--contact--object">
                        <img className="location-logo" src="/images/Location-Logo.png"/>
                        <p className="contact-info">Santa Cruz, CA</p>
                    </div>
                </div>
                <div className="points-container">
                    <p className="point"></p>
                </div>
            </div>
        </div>
    )
}