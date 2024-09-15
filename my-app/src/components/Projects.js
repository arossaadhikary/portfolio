import '../styles/Projects.css';
import React from 'react'

import sample from '../assets/preview.png';
import githubIcon from '../assets/githubLogo.png';

function Projects() {
  return (
    <section className="project_container" id="projects">
      <h1>Projects</h1>

      {/* projects */}
      <div className="project_list">

        <div className="project_item">
          <img src={sample} className="project_img" alt="Project 1" />
          <div className="project_details">
            <h2>Project 1: Pantry Manager</h2>
            <img src = {githubIcon} className = "navbar_icons"></img>
            <p>
              Pantry Manager is smart pantry operated by AI support chat. AI can suggest recipes based on ingredients stored, and store them.
            </p>
            <div className="project_skills">
              <button>Skill 1</button>
              <button>Skill 2</button>
              <button>Skill 3</button>
            </div>
          </div>
        </div>

        <div className="project_item">
          <img src={sample} className="project_img" alt="Project 2" />
          <div className="project_details">
            <h2>Project 2: Other</h2>
            <img src = {githubIcon} className = "navbar_icons"></img>
            <p>
              Pantry Manager is smart pantry operated by AI support chat. AI can suggest recipes based on ingredients stored, and store them.
            </p>
            <div className="project_skills">
              <button>Skill 1</button>
              <button>Skill 2</button>
              <button>Skill 3</button>
            </div>
          </div>
        </div>

        <div className="project_item">
          <img src={sample} className="project_img" alt="Project 3" />
          <div className="project_details">
            <h2>Project 3: Other Again</h2>
            <img src = {githubIcon} className = "navbar_icons"></img>
            <p>
              Pantry Manager is smart pantry operated by AI support chat. AI can suggest recipes based on ingredients stored, and store them.
            </p>
            <div className="project_skills">
              <button>Skill 1</button>
              <button>Skill 2</button>
              <button>Skill 3</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects