import React, { useReducer, useRef, useState } from "react";
import './Navbar.css'
import underline from '../../assets/pngwing.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () =>{

    const[menu , setMenu]= useState("about");
    const menuRef = useRef();

    const openMenu =()=>{
        menuRef.current.style.right="0";
    }
    const closeMenu =()=>{
        menuRef.current.style.right="-350px";
    }

    return(
        <div className="navbar">
            <h3 className="logo">Portfolio</h3>
            <i onClick={openMenu} class="fa-solid fa-bars nav-mob-open"></i>
            <ul ref={menuRef} className="nav-menu">
                <i  onClick={closeMenu} class="fa-solid fa-xmark nav-mob-close"></i>
                <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>{setMenu("home")}}>Home</p></AnchorLink>{menu==="home"? <img src={underline}></img>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>{setMenu("about")}}>About Me</p></AnchorLink>{menu==="about"? <img src={underline}></img>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>{setMenu("services")}}>Services</p></AnchorLink>{menu==="services"? <img src={underline}></img>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>{setMenu("work")}}>Portfolio</p></AnchorLink>{menu==="work"? <img src={underline}></img>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>{setMenu("contact")}}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline}></img>:<></>}</li>
            </ul>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
            <div className="nav-connect">
                Connect With Me
            </div>
            </AnchorLink>
        </div>
    )
}
export default Navbar;