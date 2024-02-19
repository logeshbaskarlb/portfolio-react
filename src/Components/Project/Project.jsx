import React from "react";
import ProjectCard from "./BoxComponent";
import portfolio from "./Image/Portfolio.png";
import weather from "./Image/Weather.png";
import joke from "./Image/Joke.png";
import todo from "./Image/TODO.png";
import login from "./Image/Login.png";
import Food from "./Image/Food.png";
import Ecommerce from "./Image/E-commerce.png"

const projects = [
  {
    id: 1,
    title: "Dynamic portfolio with export to PDF",
    description:
      "Here you can enter your data and get portfolio in just 5 mins and also export your portfolio to PDF .",
    image: portfolio,
    demoLink: "https://jocular-torte-0b2695.netlify.app",
    codeLink: "https://github.com/logeshbaskarlb/create-portfolio",
  },
  {
    id: 2,
    title: "Food recipes",
    description:
      "Here you can get data for  food recipe app and search by name or ingredients.",
    image: Food,
    demoLink: "https://astonishing-medovik-4256ae.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/Food-recipe",
  },
  {
    id: 3,
    title: "Fruits store(E-commerce style)",
    description:
      "Here you can select product , add to your cart and total amount will be shown in the header section.",
    image: Ecommerce,
    demoLink: "https://timely-moonbeam-0dc073.netlify.app/  ",
    codeLink: "https://github.com/logeshbaskarlb/reducer-task",
  },
  {
    id: 4,
    title: "TODO application ",
    description: "Here You can Add, Remove and Custom your Applications",
    image: todo,
    demoLink: "https://master--animated-syrniki-e9d220.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/library-task",
  },
  {
    id: 5,
    title: "Password reset authentication",
    description:
      "Here You can Register and login , If you forget the password you can click forgot password, link be sent to your mail and you can rest password",
    image: login,
    demoLink: "https://master--dapper-otter-b823ba.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/password-rest-flow-fe",
  },
  {
    id: 6,
    title: "Weather application",
    description: "Here you can see all countries weather",
    image: weather,
    demoLink: "https://weather-checker1.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/Weather-Project",
  },
  {
    id: 7,
    title: "Random joke application",
    description: "Here you can see all random jokes",
    image: joke,
    demoLink: "https://sparkling-mandazi-27c2a6.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/Joke-API",
  },

  // Add more cards as needed
];

const Project = () => {
  return (
    <>
      <div
        className="container mt-5 min-vh-100"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3  g-4">
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
