import '../styles/About.css'
import React from 'react'

import headshot from '../assets/secondHeadshot.png';

function About() {
  return (
    <section className = "about_container" id="about">
        <h1>ABOUT</h1>
        <div className = "about_content">
            <img src = {headshot} className = "about_img"></img>
            <ul className = "about_items">
                <li className = "about_item">
                    <div>
                        <h3>Welcome to my developer journey. 👩‍💻</h3>
                        <p>
                            My name is Arossa - I'm an ambitious, goal-oriented, 2nd-year undergraduate honors student at the University of Florida. I strive to use my coding knowledge to make a social impact, with a specific interest in public service, protecting digital infrastructure, & education.
                            I gravitate towards activities involving STEM education & mentorship, specifically for women & the youth. I'm aligning my career with artificial intelligence in the cybersecurity domain by studying for my Security+ certification & completing the Google Cybersecurity Certification Program with WiCYS. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About