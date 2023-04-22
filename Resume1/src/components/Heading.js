import React from "react"
// Personal Information section of resume view
export default function Heading(props){
    return (
        <header className="section-item-container">
            {/* Name */}
            {props.personalInfo.name && 
                <h1 className="heading-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.name}</h1>
            }
            {/* Objective */}
            {props.personalInfo.objective && 
                <p className="title-2" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.objective}</p>
            }
            <div className="header--contact">
                {/* Phone */}
                {props.personalInfo.phone && 
                        <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="phone-logo" src="/images/Phone-Logo.png"/>
                        <p className="info-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.phone}</p>
                    </div>
                }
                {/* Email */}
                {props.personalInfo.email && 
                    <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="gmail-logo" src="/images/Gmail-Logo.png"/>
                        <p className="info-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.email}</p>
                    </div>
                }
                {/* Website */}
                {props.personalInfo.website && 
                    <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="website-logo" src="/images/Website-Logo.png"/>
                        <p className="info-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.website}</p>
                    </div>
                }
                {/* Github */}
                {props.personalInfo.github && 
                    <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="github-logo" src="/images/Github-Logo.png"/>
                        <p className="info-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.github}</p>
                    </div>
                }
                {/* Linkedin */}
                {props.personalInfo.linkedin && 
                    <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="linkedin-logo" src="/images/Linkedin-Logo.png"/>
                        <p className="info-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.linkedin}</p>
                    </div>
                }
            </div>
        </header>
    )
}