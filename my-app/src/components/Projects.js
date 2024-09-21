import '../styles/Projects.css';
import React from 'react'

import sample from '../assets/preview.png';
import githubIcon from '../assets/githubLogo.png';
import outputIcon from '../assets/outputIcon.png';

import WiNGHacksPreview from '../assets/Previews/WiNGHacksPreview.png';
import AnimalCarePreview from '../assets/Previews/AnimalCarePreview.png';
import PageTurnersPreview from '../assets/Previews/PageTurnersPreview.png';
import EWBPreview from '../assets/Previews/EWBPreview.png';
import EarthquakePreview from '../assets/Previews/EarthquakePreview.png';

function Projects() {
  return (
    <section className="project_container" id="projects">
      <h1 className = "category">PROJECTS<hr></hr></h1>

      {/* projects */}
      <div className="project_list">

        <div className="project_item">
            <img src={EWBPreview} className="project_img" alt="EWB Website" />
            <div className="project_details">
              <h2>Engineering Without Borders Website</h2>
              <div className = "project_icons">
                <a href = "https://github.com/ufewb/UF_EWB"><img src = {githubIcon} className = "navbar_icons"></img></a>
                <a href = "https://ufewb.com"><img src = {outputIcon} className = "navbar_icons"></img></a>
              </div>
              <p>
                Leading a team, the website was developed using responsive design principles and React, based on custom Figma wireframes, with Firebase user authentication and real-time notifications to inform applicants of their status. It supports the University of Florida’s Engineers Without Borders chapter, which empowers communities in Nepal and Peru through engineering projects that address basic human needs.
              </p>
              <div className="project_skills">
                <button>React</button>
                <button>Firebase</button>
              </div>
            </div>
          </div>

          <div className="project_item">
            <img src={PageTurnersPreview} className="project_img" alt="PageTurners" />
            <div className="project_details">
              <h2>PageTurners</h2>
              <div className = "project_icons">
                <a href ="https://github.com/marin-isabella/PageTurners"><img src = {githubIcon} className = "navbar_icons"></img></a>
                <a href = "https://www.youtube.com/watch?v=ARF130incFA&t=46s"><img src = {outputIcon} className = "navbar_icons"></img></a>
              </div>
              <p>
                PageTurners is your go-to app for finding personalized book recommendations. It analyzes book descriptions to suggest the most relevant titles, ensures accurate book identification through a custom-built Flask API, & delivers fast recommendations by optimizing performance.
              </p>
              <div className="project_skills">
                <button>React Native</button>
                <button>Expo Go</button>
                <button>Python</button>
                <button>Flask</button>
              </div>
            </div>
          </div>

          <div className="project_item">
            <img src={WiNGHacksPreview} className="project_img" alt="WiNGHacks" />
            <div className="project_details">
              <h2>WiNGHacks</h2>
              <div className = "project_icons">
                <a href="https://github.com/WiNGHacks/WiNGHacks-Website"><img src = {githubIcon} className = "navbar_icons"></img></a>
                <a href="https://www.winghacks.com/"><img src = {outputIcon} className = "navbar_icons"></img></a>
              </div>
             <p>
                WiNGHacks is the official hub for UF's 1st hackathon dedicated to women and nonbinary individuals. The site offers an engaging and interactive experience, featuring easily accessible information on FAQs, sponsorship opportunities, and the event's workshop schedule. A streamlined application portal was created to handle over 200 participants, ensuring a smooth and welcoming user experience for all attendees
              </p>
              <div className="project_skills">
                <button>React</button>
              </div>
            </div>
          </div>

          <div className="project_item">
            <img src={EarthquakePreview} className="project_img" alt="Earthquake Data Analysis" />
            <div className="project_details">
              <h2>Earthquake Data Analysis</h2>
              <div className = "project_icons">
                <a href = "https://github.com/hugoliu-code/Group27-Final"><img src = {githubIcon} className = "navbar_icons"></img></a>
              </div>
              <p>
              Transformed over 6000 rows of earthquake data into pickle files, using NumPy, Matplotlib, and Pandas to analyze the effects of magnitude and depth on locations and damage reports. Created an interactive web map with Folium to visualize earthquake locations and enhance geographic insights.
              </p>
              <div className="project_skills">
                <button>Python</button>
              </div>
            </div>
          </div>

          <div className="project_item">
            <img src={AnimalCarePreview} className="project_img" alt="Animal Care" />
            <div className="project_details">
              <h2>Animal Care</h2>
              <div className="project_icons">
                <a href ="https://github.com/hugoliu-code/DesignathonWinners"><img src = {githubIcon} className = "navbar_icons"></img></a>
                <a href="https://www.youtube.com/watch?v=Vmt5MRfRNKI" target="_blank"><img src = {outputIcon} className = "navbar_icons"></img></a>
              </div>
             <p>
                AnimalCare is an RPG-style video game designed to help children overcome anxiety about medical procedures. Set in a virtual waiting room, the game uses AI-powered chatbots to guide children through medical scenarios like MRI scans and cast removals in a comforting and educational way. Developed within 24 hours, AnimalCare earned 2nd place at the October 2023 Designathon for its innovative approach to easing pediatric fears.
              </p>
              <div className="project_skills">
                <button>Unity</button>
                <button>C#</button>
                <button>Open AI</button>
                <button>GPT 3.5</button>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Projects