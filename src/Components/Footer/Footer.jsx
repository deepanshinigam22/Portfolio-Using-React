import React from "react";
import './Footer.css'

const Footer = () =>{

    return(

        <>
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h2>Follow Me</h2>
                    <div className="footer-top-left-logo">
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                    <i class="fa-solid fa-user"></i>
                    <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                    
                </div>
            </div>
            <hr></hr>
            <div className="footer-bottom">
                <p className="footer-bottom-left">&copy; 2024 Deepanshi Nigam. All Rights Reserved</p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;