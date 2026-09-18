import P_Clarfina from "../assets/preview-clarfina.png"
import P_EWB from "../assets/preview-ewb.png"
import P_PageTurners from "../assets/preview-pageturners.png"
import P_WiNGHacks from "../assets/preview-winghacks.png"
import P_Earthquake from "../assets/preview_earthquake.png"
import P_AnimalCare from "../assets/preview_animalcare.png"

export const projects =[
    {
        title: "Clarfina",
        image: P_Clarfina,
        description: "Clarifina revolutionizes financial literacy by offering personalized, expert financial advice tailored to each user’s unique background and needs. With intuitive PDF uploads, it highlights key sections, simplifies complex terms, and delivers AI-powered recommendations based on individual profiles. Empowering users to make informed decisions, the platform provides clear, actionable insights that drive smarter financial outcomes and lasting success.",
        githubUrl: "https://github.com/aarnavgautam/clarifin-ai",
        projectUrl: "https://devpost.com/software/clarifina",
        skills: ["Typescript", "React", "Firebase", "AWS", "Open AI", "Figma"]
    },
    {
        title: "Engineering Without Borders Website",
        image: P_EWB,
        description: "Leading a team, the website was developed using responsive design principles and React, based on custom Figma wireframes, with Firebase user authentication and real-time notifications to inform applicants of their status. It supports the University of Florida’s Engineers Without Borders chapter, which empowers communities in Nepal and Peru through engineering projects that address basic human needs.",
        githubUrl: "https://github.com/ufewb/UF_EWB",
        projectUrl: "https://ufewb.org",
        skills: ["React", "Figma"]
    },
    {
        title: "PageTurners",
        image: P_PageTurners,
        description: "PageTurners is your go-to app for finding personalized book recommendations. It analyzes book descriptions to suggest the most relevant titles, ensures accurate book identification through a custom-built Flask API, & delivers fast recommendations by optimizing performance.",
        githubUrl: "https://github.com/marin-isabella/PageTurners",
        projectUrl: "https://www.youtube.com/watch?v=ARF130incFA&t=46s",
        skills: ["React Native", "Expo Go", "Flask", "Python", "Figma"]
    },
    {
        title: "WiNGHacks",
        image: P_WiNGHacks,
        description: "WiNGHacks is the official hub for UF's 1st hackathon dedicated to women and nonbinary individuals. The site offers an engaging and interactive experience, featuring easily accessible information on FAQs, sponsorship opportunities, and the event's workshop schedule. A streamlined application portal was created to handle over 200 participants, ensuring a smooth and welcoming user experience for all attendees",
        githubUrl: "https://github.com/WiNGHacks/WiNGHacks-Website",
        projectUrl: "https://www.winghacks.com/",
        skills: ["React"]
    },
    {
        title: "Earthquake Data Analysis",
        image: P_Earthquake,
        description: "Transformed over 6000 rows of earthquake data into pickle files, using NumPy, Matplotlib, and Pandas to analyze the effects of magnitude and depth on locations and damage reports. Created an interactive web map with Folium to visualize earthquake locations and enhance geographic insights.",
        githubUrl: "https://github.com/hugoliu-code/Group27-Final",
        skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Folium"]
    },
    {
        title: "Animal Care",
        image: P_AnimalCare,
        description: "AnimalCare is an RPG-style video game designed to help children overcome anxiety about medical procedures. Set in a virtual waiting room, the game uses AI-powered chatbots to guide children through medical scenarios like MRI scans and cast removals in a comforting and educational way. Developed within 24 hours, AnimalCare earned 2nd place at the October 2023 Designathon for its innovative approach to easing pediatric fears.",
        gitHubUrl: "https://github.com/hugoliu-code/DesignathonWinners",
        projectUrl: "https://www.youtube.com/watch?v=Vmt5MRfRNKIe",
        skills: ["Unity", "C#", "Open AI", "GPT 3.5"]
    }
]
