import React from "react"
export default function Heading(props){
    return (
        <header className="section--container">
            {props.personalInfo.name && 
                <h1 className="header--name">{props.personalInfo.name}</h1>
            }
            {props.personalInfo.objective && 
                <p className="header--description">{props.personalInfo.objective}</p>
            }
            <div className="header--contact">
                {props.personalInfo.phone && 
                        <div className="header--contact--object">
                        
                            <img className="phone-logo" src="/images/Phone-Logo.png"/>
                        <p className="contact-info">{props.personalInfo.phone}</p>
                    </div>
                }
                {props.personalInfo.email && 
                    <div className="header--contact--object">
                            <img className="gmail-logo" src="/images/Gmail-Logo.png"/>
                        <p className="contact-info">{props.personalInfo.email}</p>
                    </div>
                }
                    {props.personalInfo.website && 
                    <div className="header--contact--object">
                            <img className="website-logo" src="/images/Website-Logo.png"/>
                        <p className="contact-info">{props.personalInfo.website}</p>
                    </div>
                }
                {props.personalInfo.github && 
                    <div className="header--contact--object">
                            <img className="github-logo" src="/images/Github-Logo.png"/>
                        <p className="contact-info">{props.personalInfo.github}</p>
                    </div>
                }
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