import React, { useState, useEffect } from "react";
import "./Projects.css";
import Caseconvertor from '../assets/images/caseconvertor.png'
import edtextain from '../assets/images/edtextain.png'
import furniture from '../assets/images/furniture.png'
import brandbeet from '../assets/images/Brandbeet.png'
import miranda from '../assets/images/miranda.png'
import Project from "./Project";


const images = [

miranda,
edtextain,
// prline,
furniture,
brandbeet,
Caseconvertor,
furniture,
miranda,
brandbeet,



];


const Projects = () => {
  const [angle, setAngle] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAngle((prev) => prev - 45);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const rotateGallery = (direction) => {
    setAngle((prev) => prev + direction * 45);
  };

  return (
    <>

    <div id="Projects" className="gallery-container" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      
      <div
        className="image-container"
        style={{ transform: `perspective(1000px) rotateY(${angle}deg)` }}
      >
        {images.map((src, index) => (
          <span key={index} style={{ "--i": index + 1 }}>

            
           <a href="#project"> <img src={src} alt={`Gallery Image ${index + 1}`} /></a>
          </span>
        ))}
      </div>
      <div className="button-container">
        <button className="btn" onClick={() => rotateGallery(1)}>Prev</button>
        <button className="btn" onClick={() => rotateGallery(-1)}>Next</button>
      </div>
     
      <button
        onClick={() => setShowComponent(!showComponent)}
        className="px-4 btn py-2 bg-blue-500 text-white rounded-md"
      >
        {showComponent ? "Close this Projects" : "See more Projects"}
      </button>

      {showComponent && <Project />}
</div>

    </>

  );
};

export default Projects;
