import React, { useState } from 'react';
import '../styles/Experience.css';

function Experience() {
  const [activeCategory, setActiveCategory] = useState('Technical');

  const experienceData = {
    Technical: [
      {
        title: "Research Intern",
        company: "UF Department of Occupational Therapy",
        period: "Aug 2024 - Present",
        details: [
          "Integrated data from Qualisys & Visual3D to develop Python script to automate biomechanical calculations for gait analysis with pandas/numpy/scripy improving data accuracy processing speed by 80%.",
          "Performed data analysis using Visual3D & Theia by identifying gait cycles & adding markers identifying movement.",
          "Leveraged an AI-based markerless motion capture system to collect data on walker biomechanics (ie: joint positioning)"
        ]
      },
      {
        title: "Google Cybersecurity Certification Program",
        company: "Women in Cybersecurity",
        period: "Jun 2024 - Present",
        details: [
          "Developing ability to understand common risks/threats/vulnerabilities alongside mitigation methodologies.",
          "Learning to protect networks/devices/people/data from unauthorized access & cyberattacks via security information & event management tools & Python/Linux/SQL lab."
        ]
      },
      {
        title: "Software Development Lead",
        company: "UF Engineering Without Borders",
        period: "Apr 2024 - Present",
        details: [
          "Led a 10-person team to successfully deploy a centralized streamlined communication between Peru & Nepal chapters, formalizing the merger of previously independent organizations.",
          "Implemented responsive design principles using React & Figma, creating wireframes & developing a dynamic, user-friendly website to enhance accessibility across devices.",
          "Built Firebase user authentication system, enabling secure access for members/alumni & prospective applicants to manage exclusive project updates & centralize the process for tracking application statuses."
        ]
      },
      {
        title: "Hackathon Website Developer",
        company: "WiNGHacks Hackathon",
        period: "Dec 2023 - Apr 2024",
        details: [
          "Selected as sole 1st year committee member to design website for the UF's 1st women & nonbinary focused hackathon.",
          "Promoted interactivity with React by optimizing FAQ, sponsorship, & workshop schedule page."
        ]
      },
    ],
    Leadership: [
      {
        title: "Teaching Assistant",
        company: "UF Honors Professional Development for Engineers",
        period: "Aug 2024 - Present",
        details: [
          "Facilitated a program for first-year women in engineering, focusing on developing leadership skills in the field.",
          "Encouraged participants to take on leadership roles within student organizations, emphasizing the importance of hands-on experience.",
          "Implemented regular feedback sessions to facilitate reflection on leadership growth and encourage continuous improvement."
        ]
      },
      {
        title: "Social Director",
        company: "UF Women in Computer Science",
        period: "Apr 2024 - Present",
        details: [
          "Cultivated a vibrant community by orchestrating 3/monthly dynamic social events for 200+ members, creating an inclusive space that champions women in tech.",
          "Forged impactful relationships by mentoring members & providing them technical, professional, & social resources to become successful computer scientists."
        ]
      },
      {
        title: "Public Relations Director, External Affairs Ambassador",
        company: "Freshman Leadership Engineering Group",
        period: "Apr 2024 - Present",
        details: [
          "Leading content creation & design by improving Instagram post interactions (265%) & account engagements (67%).",
          "Curated networking etiquette materials & developed a comprehensive LinkedIn how-to guide tailored for freshmen."
        ]
      },
    ],
    Community: [
      {
        title: "Mentor",
        company: "UF EQuIPD x Duke Energy",
        period: "Oct 2024 - Present",
        details: [
          "Mentored students in designing resilient smart grids for Florida, emphasizing AI-driven solutions to reduce power loss during natural disasters.",
          "Guided collaborative efforts to reimagine power distribution networks through design thinking, fostering community-focused microgrid systems.",
          "Provided instruction in data analysis and visualization using Microsoft Excel to model power grid efficiency & enhance decision-making."
        ]
      },
      {
        title: "Undergraduate Lead",
        company: "Goldberg Gators Engineering Explorers",
        period: "Apr 2024 - Jul 2024",
        details: [
          "Led middle school students in creating projects with Microbits, introducing them to coding concepts for the first time, debugging projects with Python, & inspiring a passion for technology and learning.",
          "Guided teachers on coding fundamentals while facilitating discussions on the importance of coding & effective debugging techniques, enhancing both student engagement & educational strategies."
        ]
      },
      {
        title: "Undergraduate Intern",
        company: "UF SECME",
        period: "Mar 2024 - Jun 2024",
        details: [
          "Spearheaded the development of an engaging chaperone packet, crafting informative & visually appealing content to streamline communication for participants.",
          "Produced a dynamic video to empower attendees with essential tips on what to bring to the engineering competition, enhancing their readiness & excitement for the engineering event."
        ]
      },
      {
        title: "Instructor Assistant, Workshop Faciliator, Virtual Camp Coordinator",
        company: "Kode with Klossy",
        period: "Dec 2021 - Aug 2023",
        details: [
          "Leveraged HTML/CSS/JS to become top 5 finalist in Estee Lauder x Kode with Klossy Zen Garden challenge for product website.",
          "Taught 8-hour Web Development/Figma masterclasses to 150+ gender nonconforming/trans/women, resolved 90% student bugs."
        ]
      },
    ]
  };

  const renderExperienceItems = (category) => {
    return experienceData[category].map((exp, index) => (
      <div className="experience_item" key={index}>
        <h2>{exp.title}</h2>
        <h3>{exp.company}</h3>
        <p>{exp.period}</p>
        <ul>
          {exp.details.map((detail, detailIndex) => (
            <li key={detailIndex} dangerouslySetInnerHTML={{__html: detail.replace(/Visual3D|Qualisys|Theia|Linux|SQL|Microbits|Python|HTML|CSS|JS|React|Figma|Git|Firebase|/g, '<span class="technical_skill">$&</span>')}} />
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <section className="experience_container" id="experience">
      <h1 className="category">EXPERIENCE<hr /></h1>

      <div className="experience_options">
        {Object.keys(experienceData).map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="experience_list">
        {renderExperienceItems(activeCategory)}
      </div>
    </section>
  );
}

export default Experience;