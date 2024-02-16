import React from "react";
// import DynamicPortfolio from "./DynamicPortfolio";
import ProjectCard from "./BoxComponent";

const projects = [
  {
    id: 1,
    title: "Dynamic portfolio with export to PDF",
    description:
      "Here you can enter your data and get portfolio in just 5 mins and also export your portfolio to PDF .",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1984521299/display_1500/stock-photo--d-render-abstract-colorful-background-bright-neon-rays-and-glowing-lines-pink-yellow-blue-1984521299.jpg",
    demoLink: "https://jocular-torte-0b2695.netlify.app",
    codeLink: "https://github.com/logeshbaskarlb/create-portfolio",
  },
  {
    id: 2,
    title: "Weather application",
    description: "Here you can see all countries weather",
    imageUrl: "",
    demoLink: "https://weather-checker1.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/Weather-Project",
  },
  {
    id: 3,
    title: "Random joke application",
    description: "Here you can see all random jokes",
    imageUrl: "",
    demoLink: "https://sparkling-mandazi-27c2a6.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/Joke-API",
  },
  {
    id: 4,
    title: "TODO application ",
    description: "Here You can Add, Remove and Custom your Applications",
    imageUrl: "",
    demoLink: "https://master--animated-syrniki-e9d220.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/library-task",
  },
  {
    id: 5,
    title: "Password reset authentication",
    description: "Here You can Register and login , If you forget the password you can click forgot password, link be sent to your mail and you can rest password",
    imageUrl: "",
    demoLink: "https://master--animated-syrniki-e9d220.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/password-rest-flow-fe",
  },
  // Add more cards as needed
];

const Project = () => {
  return (
    <>
      <div className="container mt-5 min-vh-100"  data-aos="fade-up"
            data-aos-duration="1000">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
