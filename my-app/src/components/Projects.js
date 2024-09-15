import '../styles/Projects.css';
import React from 'react'

import sample from '../assets/preview.png';
import githubIcon from '../assets/githubLogo.png';
import outputIcon from '../assets/outputIcon.png';

import WiNGHacksPreview from '../assets/Previews/WiNGHacksPreview.png';
import AnimalCarePreview from '../assets/Previews/AnimalCarePreview.png';
import PageTurnersPreview from '../assets/Previews/PageTurnersPreview.png';

function Projects() {
  return (
    <section className="project_container" id="projects">
      <h1>Projects</h1>

      {/* projects */}
      <div className="project_list">

      <div className="project_item">
          <img src={sample} className="project_img" alt="EWB Website" />
          <div className="project_details">
            <h2>Engineering Without Borders Website</h2>
            <a href = "https://github.com/ufewb/UF_EWB"><img src = {githubIcon} className = "navbar_icons"></img></a>
            <p>
              Pantry Manager is smart pantry operated by AI support chat. AI can suggest recipes based on ingredients stored, and store them.
            </p>
            <div className="project_skills">
              <button>React Native</button>
            </div>
          </div>
        </div>

        <div className="project_item">
          <img src={PageTurnersPreview} className="project_img" alt="PageTurners" />
          <div className="project_details">
            <h2>PageTurners</h2>
            <a href ="https://github.com/marin-isabella/PageTurners"><img src = {githubIcon} className = "navbar_icons"></img></a>
            <a href = "https://www.youtube.com/watch?v=ARF130incFA&t=46s"><img src = {outputIcon} className = "navbar_icons"></img></a>
            <p>
              Pantry Manager is smart pantry operated by AI support chat. AI can suggest recipes based on ingredients stored, and store them.
            </p>
            <div className="project_skills">
              <button>React Native</button>
              <button>Expo Go</button>
              <button>Flask</button>
            </div>
          </div>
        </div>

        <div className="project_item">
          <img src={WiNGHacksPreview} className="project_img" alt="WiNGHacks" />
          <div className="project_details">
            <h2>WiNGHacks</h2>
            <a href="https://github.com/WiNGHacks/WiNGHacks-Website"><img src = {githubIcon} className = "navbar_icons"></img></a>
            <a href="https://www.winghacks.com/"><img src = {outputIcon} className = "navbar_icons"></img></a>
            <p>
              Pantry Manager is smart pantry operated by AI support chat. AI can suggest recipes based on ingredients stored, and store them.
            </p>
            <div className="project_skills">
              <button>React</button>
            </div>
          </div>
        </div>

        <div className="project_item">
          <img src={sample} className="project_img" alt="Earthquake Data Analysis" />
          <div className="project_details">
            <h2>Earthquake Data Analysis</h2>
            <a href = "https://github.com/hugoliu-code/Group27-Final"><img src = {githubIcon} className = "navbar_icons"></img></a>
            <p>
              Pantry Manager is smart pantry operated by AI support chat. AI can suggest recipes based on ingredients stored, and store them.
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
            <a href ="https://github.com/hugoliu-code/DesignathonWinners"><img src = {githubIcon} className = "navbar_icons"></img></a>
            <a href="https://www.youtube.com/watch?v=Vmt5MRfRNKI"><img src = {outputIcon} className = "navbar_icons"></img></a>
            <p>
              Leverges chatbots to educate pediatric patients about intimidating medical procedures.
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