import React from 'react'
import ProjectCard from './ProjectCard'
// import './projectcard.css'
import "./projectcard.css"; // ✅ exact match

import miranda from '../assets/images/miranda.png'
import Brandbeet from '../assets/images/Brandbeet.png'
import caseconvertor from '../assets/images/caseconvertor.png'
import edtextain from '../assets/images/edtextain.png'
import optimum from '../assets/images/optimum.png';
import taskamanger from '../assets/images/taskamanger.png'
import skillbarter from '../assets/images/SKILLBARTER.png'
import ecoomerce from '../assets/images/ecoomerce.png'
const projectData1 = {
  image: taskamanger,
  name: "TaskBoard – Role-Based Task Management App",
  description: "A full-featured task management system built with React (Vite). Includes role-based access where Admins assign tasks and Users manage them. Features responsive UI and clean state handling.",
  github: "https://github.com/tayabatariq/taskmanager",
  live: "https://taskmanager-navy-ten.vercel.app/",
};

const projectData2 = {
  image: Brandbeet,
  name: "BrandCloneX",
  description: "A professional clone of BrandBeet using GSAP animations and Locomotive Scroll. It delivers smooth transitions, parallax scrolling, and an engaging user interface with modern frontend tools.",
  github: "https://github.com/tayabatariq/Brandbeet",
  live: "https://tayabatariq.github.io/Brandbeet/",
};

const projectData3 = {
  image: caseconvertor,
  name: "Smart Text Converter",
  description: "A React app to transform text to uppercase, lowercase, capitalize, and more. Features real-time output, clipboard copy, and extra space remover. Built with React hooks and clean UX.",
  github: "https://github.com/tayabatariq/reactCounterApp",
  live: "https://github.com/tayabatariq/reactCounterApp",
};

const projectData4 = {
  image: edtextain,
  name: "EdTextain | Educational Landing Page",
  description: "Developed a responsive landing page for an ed-tech brand. Highlights include smooth layout, intuitive navigation, and clean visuals. Built with HTML, CSS, and modern frontend practices.",
  github: "https://github.com/tayabatariq/edtextainlanding",
  live: "https://edtextainlanding.vercel.app/",
};

const projectData5 = {
  image: optimum,
  name: "TeqTronics – Tech Company Website",
  description: "Designed a sleek and modern company site for TeqTronics. Focused on responsiveness, branding, and clear UI/UX. Developed during internship to reflect real-world company presence.",
  github: "https://github.com/tayabatariq/http-teqtronics.com-",
  live: "https://tayabatariq.github.io/http-teqtronics.com-/",
};

const projectData6 = {
  image: ecoomerce,
  name: "StyleCart – E-commerce Clothing Store",
  description: "A modern shopping web app built with React (Vite). Includes product listing, responsive design, and cart simulation. Optimized for both mobile and desktop shopping experience.",
  github: "https://github.com/example",
  live: "https://example.com",
};

const projectData7 = {
  image: skillbarter,
  name: "SkillBarter – Learn & Teach Skills",
  description: "A full-stack MERN web application designed for skill exchange. Users can sign up, list the skills they have, search for others to learn from, and initiate two-way learning. Features include dynamic user profiles, JWT authentication, OTP verification, messaging, and AI chatbot integration.",
  github: "https://github.com/tayabatariq/skillbarterfrontend",
  live: "skillbarter-beta.vercel.app",
};

const Project = () => {
  return (

<>
<div className='mainprojectdiv'>

<ProjectCard project={projectData1}/>
<ProjectCard project={projectData2}/>
<ProjectCard project={projectData3}/>
<ProjectCard project={projectData4}/>
<ProjectCard project={projectData5}/>
<ProjectCard project={projectData6}/>
<ProjectCard project={projectData7}/>

</div>

</>  )
}

export default Project