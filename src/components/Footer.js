import React from "react"
import fbIcon from "../images/Facebook Icon.png"
import instaIcon from "../images/Instagram Icon.png"
import twitterIcon from "../images/Twitter Icon.png"
import githubIcon from "../images/GitHub Icon.png"

export default function Footer(){
    return (
        <div className="footer">
            <a href="https://github.com/Abdurrazzak4" target="blank"><img src={githubIcon} alt="github"/></a>
            <a href="#"><img src={fbIcon} alt="facebook"/></a>
            <a href="#"><img src={instaIcon} alt="instagram"/></a>
            <a href="#"><img src={twitterIcon} alt="twitter"/></a>
        </div>
    )
}