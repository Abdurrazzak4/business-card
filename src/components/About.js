import React from "react"
import photo from "../images/photo.jpeg"
import linkedinlogo from "../images/linkedin.png"
import maillogo from "../images/Mail.png"


export default function About(){
    return (
        <div>
            <img src={photo} alt="my face" id="myPhoto"/>
            <h1>Abdurrazzak Saymaz</h1>
            <h3>Frontend Developer</h3>
            <div className="buttons">
            <a href="" className="top-btn"><img src={maillogo} alt="mail button"/>Email</a>
            <a href="https://www.linkedin.com/in/abdurrazzak-saymaz/" target="blank" className="linkedin"><img src={linkedinlogo} alt="linkedin logo"/>LinkedIn</a>
            </div>
        </div>
    )
}