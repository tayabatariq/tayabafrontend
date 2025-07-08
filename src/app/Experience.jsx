import React from 'react';
import './portfolio.css';

const Experience = () => {
  return (
    <div className='experience'>
      <h1>Experience</h1>

      {/* Cognifyz Internship */}
      <div>
        <p className="edpara edspan">Frontend Developer Intern</p>
        <p className="edpar">Cognifyz Technologies (Remote) | October 2024</p>
        <p className="edpara">
          Worked as a Frontend Developer Intern, focusing on <span className='edspan'>React.js and modern UI/UX design</span> principles.
        </p>
        <p className="edpara">
          Developed and optimized user interfaces for <span className='edspan'>web applications, improving performance and accessibility</span>.
        </p>
        <p className="edpara">
          Gained experience in collaborating with remote <span className='edspan'>teams and managing development</span> workflows efficiently.
        </p>
      </div>

      {/* Corvit Internship */}
      <div className="edpara">
        <p className="edpara edspan">Full-Stack Developer Intern</p>
        <p className="edpar">Corvit Systems (On-Site) | Present</p>
        <p className="edpara">
          Currently working as a Full-Stack Developer Intern, expanding expertise in both <span className='edspan'>frontend and backend</span> technologies.
        </p>
        <p className="edpara">
          Gained hands-on experience in JavaScript <span className='edspan'>backend development and explored WordPress</span> site customization.
        </p>
        <p className="edpara">
          Collaborating with senior developers on real-world projects to enhance <span className='edspan'>problem-solving and software deployment</span> skills.
        </p>
      </div>

      {/* NAVTAC Lab Internship */}
      <div className="edpara">
        <p className="edpara edspan">Web Development Intern & Lab Attendant</p>
        <p className="edpar">NAVTAC Course (at Corvit) | March – June 2025</p>
        <p className="edpara">
          Completed a 3-month internship during the NAVTAC program, actively contributing to <span className='edspan'>web development tasks and lab management</span>.
        </p>
        <p className="edpara">
          Assisted students in practical web development sessions and <span className='edspan'>monitored lab equipment and troubleshooting</span> activities.
        </p>
        <p className="edpara">
          Developed basic web modules and <span className='edspan'>supported instructors during lectures</span> and assignments.
        </p>
      </div>
    </div>
  );
};

export default Experience;
