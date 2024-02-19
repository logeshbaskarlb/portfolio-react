import React from "react";
import "./Project.css";

function BoxComponent({ title, description, image, demoLink, codeLink }) {
  return (
    <div className="project-card ">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
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
