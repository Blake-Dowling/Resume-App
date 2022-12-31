import React from "react"
export default function Heading(props){
    return (
        <header className="section--container">
            {/* Name */}
            {props.personalInfo.name && 
                <h1 className="heading-text">{props.personalInfo.name}</h1>
            }
            {/* Objective */}
            {props.personalInfo.objective && 
                <p className="title-2">{props.personalInfo.objective}</p>
            }
            <div className="header--contact">
                {/* Phone */}
                {props.personalInfo.phone && 
                        <div className="header--contact--object">
                            <img className="phone-logo" src="/images/Phone-Logo.png"/>
                        <p className="contact-info">{props.personalInfo.phone}</p>
                    </div>
                }
                {/* Email */}
                {props.personalInfo.email && 
                    <div className="header--contact--object">
                            <img className="gmail-logo" src="/images/Gmail-Logo.png"/>
                        <p className="contact-info">{props.personalInfo.email}</p>
                    </div>
                }
                {/* Website */}
                {props.personalInfo.website && 
                    <div className="header--contact--object">
                            <img className="website-logo" src="/images/Website-Logo.png"/>
                        <p className="contact-info">{props.personalInfo.website}</p>
                    </div>
                }
                {/* Github */}
                {props.personalInfo.github && 
                    <div className="header--contact--object">
                            <img className="github-logo" src="/images/Github-Logo.png"/>
                        <p className="contact-info">{props.personalInfo.github}</p>
                    </div>
                }
                {/* Linkedin */}
                {props.personalInfo.linkedin && 
                    <div className="header--contact--object">
                            <img className="linkedin-logo" src="/images/Linkedin-Logo.png"/>
                        <p className="contact-info">{props.personalInfo.linkedin}</p>
                    </div>
                }
            </div>
        </header>
    )
}