import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Projects from './Projects';
import Portfolio from './Portfolio'
import axios from 'axios'
// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/cv.pdf';

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";

//import images
// import SokoNumber from '../assets/images/SokoNumber.png';


// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'HTML 5',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS 3',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'Java Script',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	{
		name: 'Redux ',
		icon: <BiLogoRedux size="25px" color="white" />,
		cssName: "redux"
	},
	{
		name: 'Node js ',
		icon: <BiLogoRedux size="25px" color="white" />,
		cssName: "redux"
	},
	{
		name: 'Mongoose ',
		icon: <BiLogoRedux size="25px" color="white" />,
		cssName: "redux"
	},
	{
		name: 'Express ',
		icon: <BiLogoRedux size="25px" color="white" />,
		cssName: "redux"
	},

	{
		name: 'Responsive Design',
		icon: <FaMobileAlt size="25px" color="white" />,
		cssName: "responsive"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'GSAP',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'C++',
		icon: <TbBrandCpp size="25px" color="white" />,
		cssName: "cpp"
	},
	{
		name: 'Problem Solving',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	}
];

// const projects = [
// 	{
// 		name: 'Preline Agency',
// 		link: 'https://tayabatariq.github.io/tailwind-learning/',
// 		github: 'https://github.com/tayabatariq/tailwind-learning',
// 		description: 'The Global Share ERP System is an innovative web-based application designed to streamline volunteer recruitment, management, and reward systems. It incorporates task management, recruitment, and gamification features to enhance employee engagement, promote effective communication, and drive organizational excellence.',
// 		image: SokoNumber
// 	},
// 	{
// 		name: 'Brandbeet ',
// 		link: 'https://tayabatariq.github.io/Brandbeet/',
// 		github: 'https://github.com/tayabatariq/Brandbeet',
// 		description: "Ataa is a web application built with React for managing and organizing the operations of a charity organization. The application includes a landing page that provides an overview of the charity's mission and goals. Staff members of the charity can log in to the main dashboard, which allows them to manage and control the projects, employees, and beneficiaries associated with the charity. Additionally, there is a section dedicated to viewing the total budget of the charity, as well as the budget allocated to each individual project.",
// 		image: SokoNumber
// 	},
// 	{
// 		name: 'Weather App',
// 		link: 'https://tayabatariq.github.io/weatherapp/',
// 		github: 'https://github.com/tayabatariq/weatherapp',
// 		description: 'Soko Number is a puzzle game built with the React framework. The game consists of 6 challenging levels that will test your problem-solving skills. Each level presents a grid-based puzzle where you need to move numbered tiles to their designated positions.',
// 		image: SokoNumber
// 	},
// 	{
// 		name: 'Furniture Ecommerce',
// 		link: ' https://tayabatariq.github.io/Furniture-botstrap-website/',
// 		github: 'https://github.com/tayabatariq/Furniture-botstrap-website',
// 		description: 'Leon is a modern and responsive HTML and CSS design template that provides a sleek and visually appealing foundation for building stunning websites. With its clean and elegant design, Leon focuses on simplicity and exceptional user experience.',
// 		image: SokoNumber
// 	},
// 	{
// 		name: 'Case Convertor Utils || App',
// 		link: 'https://tayabatariq.github.io/reactCounterApp/',
// 		github: 'https://github.com/tayabatariq/reactCounterApp',
// 		description: 'Kaspar is a modern and responsive HTML and CSS design template that provides a sleek and visually appealing foundation for building stunning websites. With its clean and elegant design, Kaspar focuses on simplicity and exceptional user experience.',
// 		image: SokoNumber
// 	},
// 	{
// 		name: 'rejouice clone',
// 		link: 'https://tayabatariq.github.io/Rejoiuce-clone-website/',
// 		github: 'https://github.com/tayabatariq/Rejoiuce-clone-website',
// 		description: 'Elzero is a stylish and interactive HTML, CSS, and JavaScript design template that offers a modern and engaging user experience. With its clean code structure and well-designed components, Elzero provides a solid foundation for building dynamic and visually appealing web applications.',
// 		image: SokoNumber
// 	},
// ]

function App() {
	const form = useRef();
	const [project,setProject]=useState(false)
const [username, setUsername] = useState("")
const [message, setMessage] = useState("")
const [email, setEmail] = useState("")
	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();
		setLoading(true);
		console.log("username",username,"email",email,"message",message)

		try{

			const response = await axios.post("http://localhost:9000/signup",{username,email,message})
			console.log(response.data)
		
		  }
		  catch(e){
			console.log("error",e)
		  }


		setTimeout(function () {
			emailjs.sendForm('service_gjbmeus', 'template_qk6p0pa', form.current, 'HDMwz57k3xrihLg4J')
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

	return (

		<>

		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
					<FaReact color='var(--primary-main)' size='50px' />
					<h5>TAYABA TARIQ</h5>
				</a>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#About">About</a></li>

					<li><a href="#Projects">Projects</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#Contact">Contact</a></li>

				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			}

			{/* Home */}
			<div id='Home' className={style.home}>
				<div className={style["home-content"]}>
					<h1>HEY, I'M Tayaba Tariq</h1>
					<p>A passionate Frontend Developer crafting dynamic and user-friendly web interfaces that enhance digital experiences and drive product success.</p>
					<a
						href={cv}
						download="cv-PDF-document"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DownloadButton >
							Download CV
						</DownloadButton>
					</a>
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/tayabatariq' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/tayaba-tariq-33266831b/' >
						<AiFillLinkedin size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:tayabatariq3@gmail.com?subject=SendMail&body=Description" >
						<BiLogoGmail size="30px" color='black' />
					</a>
					<a className={style.facebook} target="_blank" href='https://www.facebook.com/tayaba.tariq/' >
						<BsFacebook size="30px" color='black' />
					</a>
				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>About Me</h2>
					<p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							<h3>Get to know me!</h3>
							<p>	I'm a <span>Full-Stack Web Developer</span> trained in Frontend and Backend Web and <span>Web Application Development</span> that adds value to the overall product. You can discover some of my work in the Projects section. <br />

I have experience working with React.js for <span>frontend</span> and Node.js, Express, and MongoDB (Mongoose) for <span>backend</span> development so I can build highly functional and extensible web applications. <br />

I also like to contribute content centered around the technologies I deal with to help the Dev Community by sharing useful information and materials. Don't hesitate to connect or follow me on  <a href="https://github.com/tayabatariq" target="_blank">Github</a> where I share important content on <span>Web Development</span> and <span>Programming</span>.

<br /> I am interested in job opportunities where I can make an input, acquire new skills, and develop further. If there is an opening that meets my <span>skills</span> and <span>experiences</span>, do not hesitate to reach out.


							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>My Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			<h2 className={style.title} style={{marginTop:"3rem"}}>My Projects</h2>
		
<Projects/>
<Portfolio/>
			{/* Contact */}
			<div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contact</h2>
					<p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
					<form
						ref={form} onSubmit={sendEmail}
						className={
							clsx(
								{ [style['inactive-form']]: loading }
							)}
					>
						<InputField
							width="700px"
							height="40px"
							name="name"
							placeholder="Enter Your Name"
							label="Name"
							type="text"
							value={username}
							onChange={(e)=>setUsername(e.target.value)} 
						/>
						<InputField
							width="700px"
							height="40px"
							name="email"
							placeholder="Enter Your Email"
							label="Email"
							type="email"
							value={email}
							onChange={(e)=>setEmail(e.target.value)} 
						/>

						<TextAreaField
							width="700px"
							height="250px"
							name="message"
							placeholder="Enter Your Message"
							label="Message"
							type="text"
							value={message}
							onChange={(e)=>setMessage(e.target.value)} 
						/>
						<SubmitButton
							icon={<RiSendPlaneFill size="20px" color='white' />}
							width="200px"
							height="60px"
							color="white"
							backgroundColor="var(--primary-main)"
						>
							Submit
						</SubmitButton>
						{
							loading &&
							<div className={style.loader}>
								<Loader />
							</div>
						}
					</form>
				</div>
			</div>

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Tayaba Tariq</h3>
							<p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
						</div>
						{/* <div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/tayabatariq' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/tayaba-tariq-33266831b/' >
									<AiFillLinkedin size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:tayabatariq3@gmail.com?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
								<a className={style.facebook} target="_blank" href='https://www.facebook.com/tayaba.tariq/' >
									<BsFacebook size="30px" color='white' />
								</a>
							</div>
						</div> */}
					</div>
					<div className="social">
  <h1>Social Media and Contacts</h1>

  {[
  "Facebook",
  "LinkedIn",
  "GitHub",
].map((platform, index) => {
  const links = {
    Instagram: "http://instagram.com/tayabatariq2023/",
    Facebook: "https://www.facebook.com/tayaba.tariq/",
    LinkedIn: "https://www.linkedin.com/in/tayaba-tariq-33266831b/",
    YouTube: "https://www.youtube.com",
    GitHub: "https://github.com/tayabatariq",
  };

  return (
    <a href={links[platform]} target="_blank" rel="noopener noreferrer" key={index}>
      <div className="insta">
        <div className="text">
          <h2>{platform}</h2>
          <i className="ri-arrow-right-up-line"></i>
        </div>
        <div className="moveinsta">
          {[...Array(6)].map((_, i) => (
            <h3 key={i}>
              {platform} <i className="ri-arrow-right-up-line"></i>
            </h3>
          ))}
        </div>
      </div>
    </a>
  );
})}

</div>

					<div className={style["copy-right"]}>
						© Copyright 2025. Made by <span>Tayaba Tariq</span>
					</div>
				</div>
			</div>
		</div>
		</>

	);
}

export default App;