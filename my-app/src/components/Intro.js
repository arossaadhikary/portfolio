import '../styles/Intro.css';
import React from 'react'

import headshot from '../assets/ArossaAdhikary_Headshot_Website.png';
import resume from '../assets/ArossaAdhikaryResume.pdf';

function Intro() {
  return (
    <section className = "intro_container" id ="intro">
        <div className = "intro_content">
            <h1 className = "intro_title">Hello - I'm Arossa 👋</h1>
            <p className = "intro_description">
                I'm a passionate developer from Tampa, FL. 
                I enjoy creating web/IOS applications & am looking to expand into the cybersecurity sphere. 
                I have experience with Javascript, C++, & Python.
            </p>
            <div className = "intro_options">
              <button className = "hireMe"><a href = "#contact">Hire Me</a></button>


              <button><a href = {resume} download>Download Resume</a></button>
            </div>     
        </div>
        <img src = {headshot} className = "intro_img"></img>
    </section>
  )
}

export default Intro