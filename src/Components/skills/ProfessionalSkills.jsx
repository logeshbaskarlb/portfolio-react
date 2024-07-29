import React from "react";
import "./ProfessionalSkills.css";
import Paper from "@mui/material/Paper";
import CardComp from "./Card";
import html from "../../Assests/html.png";
import css from "../../Assests/css3.png";
import js from "../../Assests/js.png";
import bootstrap from "../../Assests/bootstrap.png";
import react from "../../Assests/react1.png";
import nodejs from "../../Assests/nodejs.png";
import mongodb from "../../Assests/mongodb(1).png";
import sql from "../../Assests/mysql.png";
import git from "../../Assests/git(1).png";
import github from "../../Assests/github.png";
import redux from "../../Assests/redux.png";
import mui from "../../Assests/mui.png";
import tailwindcss from  "../../Assests/tailwind.jpeg"

import vscode from "../../Assests/Tools/vs.png";
import postman from "../../Assests/Tools/postman.png";
import netlify from "../../Assests/Tools/netlify.png";
import vercel from "../../Assests/Tools/Vercel.png";
import render from "../../Assests/Tools/render.svg";

function ProfessionalSkills() {
  const skills = [
    {
      image: html,
      name: "HTML5",
      descript: "Markup language for web",
  
    },
    {
      image: css,
      name: "CSS3",
      descript: "Style sheet language",
      percent: 65,
    },
    {
      image: js,
      name: "Javascript",
      descript: "Programming lang of web",
      percent: 80,
    },
    {
      image: bootstrap,
      name: "Bootstrap",
      descript: "CSS Framework",
      percent: 65,
    },
    {
      image: react,
      name: "React",
      descript: "UI library",
      percent: 80,
    },
    {
      image: nodejs,
      name: "Nodejs",
      descript: "CSS Framework",
      percent: 75,
    },
    {
      image: mongodb,
      name: "MongoDB",
      descript: "NoSQL database",
      percent: 70,
    },
    {
      image: sql,
      name: "Mysql",
      descript: "SQL database",
      percent: 70,
    },
    {
      image: git,
      name: "Git",
      descript: "version control system",
      percent: 70,
    },
    {
      image: github,
      name: "Git Hub",
      descript: "Code hosting platform",
      percent: 70,
    },
    {
      image: redux,
      name: "Redux",
      descript: "Data management library",
      percent: 70,
    },
    {
      image: mui,
      name: "MUI",
      descript: "Lib for react components",
      percent: 70,
    },
    {
      image: tailwindcss,
      name: "Tailwind CSS",
      descript: "CSS Framework",
      percent: 70,
    },
  ];
  const tools = [
    {
      image: vscode,
      name: "VS Code",
      descript: "Code Editor",
      percent: 90,
    },
    {
      image: postman,
      name: "Postman",
      descript: "Developer API platform",
      percent: 90,
    },
    {
      image: netlify,
      name: "Netlify",
      descript: "Deployment platform",
      percent: 90,
    },
    {
      image: vercel,
      name: "Vercel",
      descript: "web hoisting service",
      percent: 90,
    },
    {
      image: render,
      name: "Render",
      descript: "web hoisting service",
      percent: 90,
    },
  ];
  return (
    <div className="Profentire m-0 p-0" id="skills" style={{ backgroundColor: "#0A192F" }}> 
      <h1 className="text-center text-danger">Skills & Tools</h1>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#0A192F"
        }}
      >
        <div style={{ width: "100%" }}>
          <Paper elevation={3} style={{ backgroundColor: "#0A192F" }}>
            <h4 className="text-align-left d-flex p-3 text-white">
              Professional Skillset :
            </h4>
            <div className="d-flex flex-wrap px-5 cardAlign gap-3 " data-aos="fade-up" data-aos-duration="1000">
              {skills.map((e) => {
                return <CardComp  details={e} key={e.name} />;
              })}
            </div>
          </Paper>
          <br />
          <Paper elevation={3} style={{ backgroundColor: "#0A192F" }} >
            <h4 className="text-align-left d-flex p-3 text-white">Tools I used :</h4>
            <div className="d-flex flex-wrap justify-content-around px-5 cardAlign gap-3 " data-aos="fade-up" data-aos-duration="1000">
              {tools.map((e) => {
                return <CardComp details={e} key={e.name} />;
              })}
            </div>
          </Paper>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ProfessionalSkills;
