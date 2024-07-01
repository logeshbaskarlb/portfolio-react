import React from "react";
import "./Project.css";

function BoxComponent({ title, description,technology, image, demoLink, codeLink }) {
  return (
    <div className="bg-white project pt-2 rounded">
    <div className="project-card bg-black">
      <img 
      src={image} 
      alt={title} 
      className="project-image" />
       </div>
      <div className="bg-white">
        <h3 className="text-danger text-center">{title}</h3>
        <p>{description}</p>
       <p>
         <h6 className="text-danger text-center">
          Technologies : {" "}
          </h6>
         <span className="text-center tech">
           {technology}
          </span>
        </p>
        <div className="project-links d-flex justify-content-around ">
          <a
            href={demoLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            >
            Demo
          </a>
          <a
            href={codeLink}
            className="btn btn-success"
            target="_blank"
            rel="noopener noreferrer"
            >
            Code
          </a>
        </div>
      </div>
   
    </div>
  );
}

export default BoxComponent;
