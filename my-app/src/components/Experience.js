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
          "Developed evidence-based clinical practice guidelines for assistive mobility devices (AMD) through comprehensive abstract screenings, full-text reviews, & literature analysis.",
          "Conducted biomechanics data analysis using Visual3D & Theia, leveraging AI-based markerless motion capture to evaluate walker-assisted movement."
        ]
      },
      {
        title: "Software Development Lead",
        company: "UF Engineering Without Borders",
        period: "Apr 2024 - Present",
        details: [
          "Led a team of 5+ in implementing responsive web design using React, based on custom Figma wireframes, & managed version control with Git.",
          "Integrated Firebase user authentication to track & inform members of their application status in real-time."
        ]
      },
      {
        title: "Hackathon Website Developer",
        company: "WiNGHacks Hackathon",
        period: "Dec 2023 - Apr 2024",
        details: [
          "Selected as sole 1st year committee member to design website for the UF's 1st women & nonbinary focused hackathon.",
          "Promoted interactivity with React by optimizing FAQ, sponsorship, & workshop schedule page"
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
        company: "SECME",
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
            <li key={detailIndex} dangerouslySetInnerHTML={{__html: detail.replace(/Visual3D|Theia|Microbits|Python|HTML|CSS|JS|React|Figma|Git|Firebase|/g, '<span class="technical_skill">$&</span>')}} />
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