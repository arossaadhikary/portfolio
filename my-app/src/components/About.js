import '../styles/About.css'
import React from 'react'

import headshot from '../assets/ArossaAdhikary_Headshot.jpg';

function About() {
  return (
    <section className = "about_container" id="about">
        <h2 className = "about_title>">About</h2>
        <div className = "about_content">
            <img src = {headshot} className = "about_img"></img>
            <ul className = "about_items">
                <li className = "about_item">
                    <div>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend dev. w/ expereince in building responsive & optimized websites</p>
                    </div>
                </li>
                <li className = "about_item">
                    <div>
                        <h3>Backend Developer</h3>
                        <p>I'm a frontend dev. w/ expereince in building responsive & optimized websites</p>
                    </div>
                </li>
                <li className = "about_item">
                    <div>
                        <h3>UI Designer</h3>
                        <p>I'm a frontend dev. w/ expereince in building responsive & optimized websites</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About