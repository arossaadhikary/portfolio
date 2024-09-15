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
            <a href="/" className="navbar_title">@arossaadhikary</a>
            {/* navigation menu */}
            <div className="navbar_menu">
                <img 
                    className="navbar_menuBtn" 
                    src={menuOpen ? closeIcon : menuIcon}
                    onClick={() => setMenuOpen(!menuOpen)}
                    alt="Menu"
                />
                <ul className={`navbar_menuItems ${menuOpen ? "navbar_menuOpen" : ""}`}
                    onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>  
            {/* icons */}
            <div className="navbar_icon_container">
                <img src={linkedinIcon} className="navbar_icons" alt="LinkedIn" />
                <img src={githubIcon} className="navbar_icons" alt="GitHub" />
                <img src={mailIcon} className="navbar_icons" alt="Email" />
            </div>
        </nav>
    )
}

export default NavigationBar