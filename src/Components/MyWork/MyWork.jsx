import React from "react";
import './MyWork.css'

const MyWork = () =>{

    return(

        <>
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
            </div>
            <div className="mywork-container">
                <div className="mywork-box">
                    <h2>Movie Details Website</h2>
                    <a href="https://moviemadnesss.netlify.app/"><img src="movieWebsite.png"></img></a>
                        
                </div>
                <div className="mywork-box">
                    <h2>Simple Portfolio Website</h2>
                    <a href="https://deepanshisimpleportfolio.netlify.app/"><img src="portfolio.png"></img></a>
                    
                </div>
                <div className="mywork-box">
                    <h2>Background Remover Website</h2>
                    <a href="https://deepanshinigam22.github.io/RemoveBackground_project/"><img src="bgRemover.png"></img></a>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default MyWork;