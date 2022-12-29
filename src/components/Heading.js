import React from "react"
export default function Heading(){
    return (
        <header className="section--container">
            <h1 className="header--name">Blake Dowling</h1>
            <p className="header--description">Driven leader with a focus on mastering the deployment of correct, efficient software.</p>
            <div className="header--contact">
                <div className="header--contact--object">
                    <img className="phone-logo" src="/images/Phone-Logo.png"/>
                    <p className="contact-info">(760)-224-6933</p>
                </div>
                <div className="header--contact--object">
                    <img className="gmail-logo" src="/images/Gmail-Logo.png"/>
                    <p className="contact-info">bdowling@ucsc.edu</p>
                </div>
                <div className="header--contact--object">
                    <img className="website-logo" src="/images/Website-Logo.png"/>
                    <p className="contact-info">blake-dowling.io</p>
                </div>
                <div className="header--contact--object">
                    <img className="github-logo" src="/images/Github-Logo.png"/>
                    <p className="contact-info">github.com/Blake-Dowling</p>
                </div>
                <div className="header--contact--object">
                    <img className="linkedin-logo" src="/images/Linkedin-Logo.png"/>
                    <p className="contact-info">linkedin.com/in/blake-dowling</p>
                </div>
            </div>
        </header>
    )
}