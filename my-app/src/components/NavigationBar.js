import '../styles/NavigationBar.css';
import React, { useState } from 'react'

import closeIcon from '../assets/closeIcon.png';
import menuIcon from '../assets/menuIcon.png';
import linkedinIcon from '../assets/linkedinIcon.png';
import githubIcon from '../assets/githubLogo.png';
import mailIcon from '../assets/mailLogo.png';

function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='navbar'>
            <a href = "/" className = "navbar_title">@Arossa Adhikary</a>

            {/* navigation menu */}
            <div className = "navbar_menu">
                <img 
                    className = "navbar_menuBtn" 
                    src ={menuOpen ? closeIcon : menuIcon}
                    onClick = {() => setMenuOpen(!menuOpen)} >
                </img> 
                <ul className = {'navbar_menuItems ${menuOpen && "navbar_menuOpen"}'} 
                onClick = {() => setMenuOpen(false)}>
                    <li>
                        <a href ="#about">About Me</a> 
                    </li>
                    <li>
                        <a href ="#projects">Projects</a> 
                    </li>
                    <li>
                        <a href ="#expereince">Experience</a> 
                    </li>
                    <li>
                        <a href ="#contact">Contact</a> 
                    </li>
                </ul>
            </div>  

            {/* icons */}
            <img src = {linkedinIcon} className = "navbar_icons"></img>
            <img src = {githubIcon} className = "navbar_icons"></img>
            <img src = {mailIcon} className = "navbar_icons"></img>
        </nav>
    )
}

export default NavigationBar