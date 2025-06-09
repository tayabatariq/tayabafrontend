import React from "react";
import "./portfolio.css";

const Education = () => {
  return (
    <div className="education">
      <h1 className="edhead">Education</h1>
      <div>
        <p className="edpara edspan">Intermediate in Computer Science (ICS)</p>
        <p className="edpar">Iman College | 2021 - 2023</p>
        <p className="edpara">
          Studied core subjects including <span className="edspan">Computer Science, Mathematics, and
          Physics</span>.
        </p>
        <p className="edpara">
          Developed a strong foundation in <span className="edspan">programming, problem-solving, and
          logical reasoning</span>.
        </p>
        <p className="edpara">
          Participated in various <span className="edspan">coding challenges and technology-related</span>
          activities.
        </p>
      </div>

      <div className="edpara">
        <p className="edpara edspan">Bachelor of Science in Computer Science</p>
        <p className="edpar">Virtual University of Pakistan | 2023 - Present</p>
        <p className="edpara">
          Currently pursuing a Bachelor's in Computer Science with a focus on
         <span className="edspan"> web development, databases, and software engineering.</span> 
          </p>

        <p>  Gaining hands-on experience in <span className="edspan">React.js, Node.js, and database</span>
        management through coursework and projects. </p>
          <p>Actively working on real-world <span className="edspan">
          projects, including web applications 
          and interactive UI/UX designs</span>.</p>
      </div>
    </div>
  );
};

export default Education;
