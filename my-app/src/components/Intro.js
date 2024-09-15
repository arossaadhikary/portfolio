import '../styles/Intro.css';
import React from 'react'

import headshot from '../assets/ArossaAdhikary_Headshot.jpg';

function Intro() {
  return (
    <section className = "hero_container">
        <div className = "hero_content">
            <h1 className = "hero_title">Hello - I'm Arossa 👋</h1>
            <p className = "hero_description">
                I'm a passionate developer from Tampa, FL. 
                I enjoy creating web/IOS applications & am looking to expand into the cybersecurity sphere. 
                I have experience with Javascript/React, C++,  Python.
            </p>
            <button><a href = "">Hire Me</a></button>
            <button><a href = "">Download Resume</a></button>
        </div>
        <img src = {headshot} className = "hero_img"></img>
    </section>
  )
}

export default Intro