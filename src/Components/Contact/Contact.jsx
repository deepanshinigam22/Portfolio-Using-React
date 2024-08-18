import React from "react";
import './Contact.css'

const Contact = () =>{

    return(

        <>
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets Talk</h1>
                    <p>I'm currently available to take new projects so feel free to send me a message about anything you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                        <i class="fa-solid fa-envelope"></i> <p>deepanshinigam2@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                        <i class="fa-solid fa-phone"></i> <p>9898989898</p>
                        </div>
                        <div className="contact-detail">
                        <i class="fa-solid fa-location-pin"></i> <p>Lucknow, India</p>
                        </div>
                    </div>
                </div> 
                <form className="contact-right">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter Your Name" />
                    <label>Your Email</label>
                    <input type="email" placeholder="Enter Your Email" />
                    <label>Your Message</label>
                    <textarea name="" id="" rows="8" placeholder="Enter Your Message Here.."></textarea>
                    <button type="submit" className="contact-submit">Send Message</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Contact;