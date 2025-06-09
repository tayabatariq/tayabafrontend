import React from 'react'
import ProjectCard from './ProjectCard'
import './projectcard.css'
import miranda from '../assets/images/miranda.png'
import Brandbeet from '../assets/images/Brandbeet.png'
import caseconvertor from '../assets/images/caseconvertor.png'
import edtextain from '../assets/images/edtextain.png'
import optimum from '../assets/images/optimum.png';

const projectData1 = {
  image: miranda,
  name: "My Awesome Project",
  description: "This is a cool project built using React.",
  github: "https://github.com/example",
  live: "https://example.com",
};

const projectData2 = {
  image: Brandbeet,
  name: "BrandCloneX",
  description: "I have developed a **BrandBeet website clone**, incorporating **GSAP (GreenSock Animation Platform)** and **Locomotive Scroll** to achieve seamless animations and smooth scrolling effects. This project focuses on delivering an engaging and interactive user experience by utilizing modern web development techniques. GSAP enables high-performance animations, while Locomotive Scroll enhances smooth scrolling and parallax effects, ensuring a visually appealing interface. The objective of this project was to refine my front-end development skills by implementing advanced animation libraries. I am now deploying this project on **GitHub** to showcase my work and contribute to the developer community.",
  github: "https://github.com/tayabatariq/Brandbeet",
  live: "https://tayabatariq.github.io/Brandbeet/",
};
const projectData3 = {
  image: caseconvertor,
  name: "Smart Text Converter",
  description: "I have developed a **Case Converter App** using **React.js**, enabling users to perform various text transformations seamlessly. This application allows users to convert text to **uppercase, lowercase, capitalize**, and more, enhancing text formatting efficiency. Built with **React hooks (useState)**, it ensures real-time updates and a smooth user experience. Additionally, the app can be extended with features like **copy to clipboard, removing extra spaces, and word/character count**. This project showcases my front-end development skills and my ability to implement interactive user interfaces. I am now adding it to my **GitHub repository** to share my work with the developer community.",
  github: "https://github.com/tayabatariq/reactCounterApp",
  live: "https://github.com/tayabatariq/reactCounterApp",
};
const projectData4 = {
  image: edtextain,
  name: "EdTextain | Where Education Meets Technology",
  description: "I have developed a professional landing page for EdTextain, a platform designed to enhance user engagement through interactive and educational content. This website is built with modern web technologies, ensuring a visually appealing, responsive, and smooth user experience. The design incorporates clean UI elements, intuitive navigation, and optimized performance to deliver a seamless interface. This project was created for a client, who highly appreciated the final product for its design, functionality, and performance. The site is now live at EdTextain Landing Page, reflecting a perfect blend of creativity and technical expertise." ,
  github: "https://github.com/tayabatariq/edtextainlanding",
  live: "https://edtextainlanding.vercel.app/",
};
const projectData5 = {
  image: optimum,
  name: "TeqTronics – Innovating the Future of Technology",
  description: "I am currently developing a professional **website for The teqtronics**, a project assigned to me during my internship. This website is designed to reflect the company's expertise in technology and innovation, featuring a **modern, responsive, and user-friendly interface**. Utilizing the latest **web development technologies**, I am ensuring a seamless user experience with optimized performance, intuitive navigation, and a visually appealing design. This project is an excellent opportunity to apply my skills in a real-world scenario while contributing to the company's digital presence. Once completed, the website will serve as a dynamic platform, showcasing **The teqtronics ** services and expertise." ,
  github: "https://github.com/tayabatariq/http-teqtronics.com-",
  live: "https://tayabatariq.github.io/http-teqtronics.com-/",
};
const projectData6 = {
  image: edtextain,
  name: "My Awesome Project",
  description: "This is a cool project built using React.",
  github: "https://github.com/example",
  live: "https://example.com",
};
const projectData7 = {
  image: Brandbeet,
  name: "My Awesome Project",
  description: "This is a cool project built using React.",
  github: "https://github.com/example",
  live: "https://example.com",
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
</div>

</>  )
}

export default Project