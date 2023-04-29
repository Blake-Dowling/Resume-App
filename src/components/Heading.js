import React from "react"
import github from "../images/icons/Github-Logo.png"
import gmail from "../images/icons/Gmail-Logo.png"
import linkedin from "../images/icons/Linkedin-Logo.png"
import phone from "../images/icons/Phone-Logo.png"
import website from "../images/icons/Website-Logo.png"

// Personal Information section of resume view
export default function Heading(props){
    return (
        <header className="section-item-container">
            {/* Name */}
            {props.personalInfo.name && 
                <h1 className="name-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.name}</h1>
            }
            {/* Objective */}
            {props.personalInfo.objective && 
                <p className="title-2" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.objective}</p>
            }
            <div className="header--contact">
                {/* Phone */}
                {props.personalInfo.phone && 
                        <div className="header--contact--object">
                            
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="phone-logo" src={phone}/>
                        <p className="info-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.phone}</p>
                    </div>
                }
                {/* Email */}
                {props.personalInfo.email && 
                    <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="gmail-logo" src={gmail}/>
                        <p className="info-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.email}</p>
                    </div>
                }
                {/* Website */}
                {props.personalInfo.website && 
                    <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="website-logo" src={website}/>
                        <p className="info-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.website}</p>
                    </div>
                }
                {/* Github */}
                {props.personalInfo.github && 
                    <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="github-logo" src={github}/>
                        <p className="info-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.github}</p>
                    </div>
                }
                {/* Linkedin */}
                {props.personalInfo.linkedin && 
                    <div className="header--contact--object">
                            <img className="logo" onMouseOver={(event) => props.itemPopup(event)} id="linkedin-logo" src={linkedin}/>
                        <p className="info-text" onMouseOver={(event) => props.itemPopup(event)}>{props.personalInfo.linkedin}</p>
                    </div>
                }
            </div>
        </header>
    )
}