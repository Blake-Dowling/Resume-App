import React from "react"
export default function Heading(props){
    return (
        <header className="section--container">
            {props.formData.name && 
                <h1 className="header--name">{props.formData.name}</h1>
            }
            {props.formData.objective && 
                <p className="header--description">{props.formData.objective}</p>
            }
            <div className="header--contact">
                {props.formData.phone && 
                        <div className="header--contact--object">
                        
                            <img className="phone-logo" src="/images/Phone-Logo.png"/>
                        <p className="contact-info">{props.formData.phone}</p>
                    </div>
                }
                {props.formData.email && 
                    <div className="header--contact--object">
                            <img className="gmail-logo" src="/images/Gmail-Logo.png"/>
                        <p className="contact-info">{props.formData.email}</p>
                    </div>
                }
                    {props.formData.website && 
                    <div className="header--contact--object">
                            <img className="website-logo" src="/images/Website-Logo.png"/>
                        <p className="contact-info">{props.formData.website}</p>
                    </div>
                }
                {props.formData.github && 
                    <div className="header--contact--object">
                            <img className="github-logo" src="/images/Github-Logo.png"/>
                        <p className="contact-info">{props.formData.github}</p>
                    </div>
                }
                {props.formData.linkedin && 
                    <div className="header--contact--object">
                            <img className="linkedin-logo" src="/images/Linkedin-Logo.png"/>
                        <p className="contact-info">{props.formData.linkedin}</p>
                    </div>
                }
            </div>
        </header>
    )
}