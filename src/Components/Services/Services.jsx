import React from "react";
import './Services.css'

const Services = () =>{

    return(

        <>
        <div id="services" className="services">
           <div className="services-title">
            <h1>My Skills </h1>
           </div>
           <div className="services-container">
             <div className="service">
                <i class="fa-solid fa-code"></i>
                <h3>Web Development</h3>
                <p>Proficient in HTML, CSS, JavaScript, and React for creating responsive UIs, with some knowledge in PHP and Node.js. Skilled in working with MySQL and experienced with Git for version control and deploying web applications.</p>
                

             </div>
             <div className="service">
             <i class="fa-brands fa-android"></i>
                <h3>Programming Languages</h3>
                <p>Proficient in C, Java, and JavaScript, with strong problem-solving abilities. Experienced in object-oriented programming, data structures, and algorithms.Familiar with Python and alos have knowledge of SQL for database management.</p>
                

             </div>
             <div className="service">
             <i class="fa-solid fa-palette"></i>
                <h3>UI/UX Designing</h3>
                <p> Experienced in designing user-friendly interfaces with a focus on usability and aesthetics. Proficient in applying design principles to ensure a seamless and engaging user experience through easy navigation and clear layouts.</p>
                
             </div>
           </div>
        </div>
        </>
    )
}
export default Services;