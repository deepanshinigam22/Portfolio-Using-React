import React from "react";
import './About.css'
import pic from '../../assets/pic.png'

const About = () =>{

    return(

        <>
        <div id="about" className="about">
           <div className="about-title">
           <h1>About Me</h1>
           </div>
           
           <div className="about-sections">
            <div className="about-left">
                <img src={pic}></img>
                
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a dedicated web developer with a strong background in both front-end and back-end technologies. I specialize in creating dynamic, user-friendly web applications using modern frameworks and tools like PHP, Laravel, JavaScript, and React.</p>
                    <p>I thrive on solving complex problems and am always eager to learn and implement new technologies.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'50%'}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'60%'}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:'70%'}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:'55%'}} /></div>
                </div>
            </div>
           </div>
        </div>
        </>
    )
}
export default About;