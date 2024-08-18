import React from "react";
import './Header.css'
import pic from "../../assets/pic-modified.png"


const Header = () =>{

    return(

        <>
        <div id="header" className="header">
            <img src={pic}></img>
            <h1>Hi, <span>I'm Deepanshi Nigam,</span> Frontend Developer</h1>
            

            <div className="header-action">
                <div className="header-connect">Connect With Me</div>
                <div className="header-resume">My Resume</div>
            </div>
        

        </div>
        </>
    )
}
export default Header;