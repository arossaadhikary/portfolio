import '../styles/Footer.css';
import React from 'react'

import linkedinIcon from '../assets/linkedinIcon.png';
import githubIcon from '../assets/githubLogo.png';
import mailIcon from '../assets/mailLogo.png';

function Footer() {
  return (
    <div className = "footer_container">
        <p>Arossa Adhikary </p>
        <p className = "footer_update">Last Updated: October 6th, 2024</p>

        {/* icons */}
        <div className = "footer_icons_container">
          <img src = {linkedinIcon} className = "footer_icon"></img>
          <img src = {githubIcon} className = "footer_icon"></img>
          <img src = {mailIcon} className = "footer_icon"></img>
        </div>
    </div>
  )
}

export default Footer