import React from "react";
import ProjectCard from "./BoxComponent";
import {
  portfolio,
  weather,
  joke,
  todo,
  login,
  Food,
  Ecommerce,
  weather2,
  blog,
  store,
  Gmail
} from "./Image";

const projects = [
  {
    id: 1,
    title: "Dynamic portfolio with export to PDF",
    description:
      "Here you can enter your data and get portfolio in just 5 mins and also export your portfolio to PDF .",
    image: portfolio,
    technology: "React Js, TailwindCSS, Ant design, MongoDB , Express JS ",
    demoLink: "https://jocular-torte-0b2695.netlify.app",
    codeLink: "https://github.com/logeshbaskarlb/create-portfolio",
  },
  {
    id: 2,
    title: "G-Mail Clone",
    description:
      "This project aims to replicate the basic functionalities of Gmail, providing a platform for users to send, receive, organize, and manage emails.",
    image: Gmail,
    technology: "React Js, Bootstrap , MongoDB , Express JS, Node JS",
    demoLink: "https://gmail-clone-basic.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/Gmail-Clone-FrontEnd-master",
  },
  {
    id: 3,
    title: "@Special Person E-Commerce",
    description:
      "This application enables users to explore and purchase prosthetic products conveniently online.",
    image: store,
    technology: "React Js, Redux , MongoDB , Express JS, Node JS, STRIPE",
    demoLink: "https://github.com/logeshbaskarlb/frontend-main",
    codeLink: "https://github.com/logeshbaskarlb/create-portfolio",
  },
  {
    id: 4,
    title: "Blogi fy!",
    description:
      "You can share your blog or thoughts here",
    image: blog,
    technology: "React Js, MUI , MongoDB , Express JS, Node JS",
    demoLink: "https://blog-mern-stack-project.netlify.app",
    codeLink: "https://github.com/logeshbaskarlb/create-portfolio",
  },
  {
    id: 5,
    title: "Food recipes",
    description:
      "Here you can get data for  food recipe app and search by name or ingredients.",
    image: Food,
    technology: "React Js, TailwindCSS,",
    demoLink: "https://astonishing-medovik-4256ae.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/Food-recipe",
  },
  {
    id: 6,
    title: "Fruits store(E-commerce style)",
    description:
      "Here you can select product , add to your cart and total amount will be shown in the header section.",
    image: Ecommerce,
    technology: "React Js, Bootstrap, Redux",
    demoLink: "https://timely-moonbeam-0dc073.netlify.app/  ",
    codeLink: "https://github.com/logeshbaskarlb/reducer-task",
  },
  {
    id: 7,
    title: "TODO application ",
    description: "Here You can Add, Remove and Custom your Applications",
    image: todo,
    technology: "React Js, Bootstrap, Context API",
    demoLink: "https://master--animated-syrniki-e9d220.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/library-task",
  },
  {
    id: 8,
    title: "Password reset authentication",
    description:
      "Here You can Register and login , If you forget the password you can click forgot password, link be sent to your mail and you can rest password",
    image: login,
    technology: "React Js, Bootstrap, Redux , MongoDB , Express Js , Node JS",
    demoLink: "https://master--dapper-otter-b823ba.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/password-rest-flow-fe",
  },
  {
    id: 9,
    title: "Weather forecast Apllication 2.0",
    description:
      "Here you can see all countries weather by search and convert them to celsius and fahrenheit",
    image: weather2,
    technology: "React Js, TailwindCSS , Weather API",
    demoLink: "https://weathe-app-forecast.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/weather-app-forecast",
  },
  {
    id: 10,
    title: "Weather application",
    description: "Here you can see all countries weather",
    image: weather,
    technology: "React Js, Bootstrap, Weathe API",
    demoLink: "https://weather-checker1.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/Weather-Project",
  },
  {
    id: 11,
    title: "Random joke application",
    description: "Here you can see all random jokes",
    image: joke,
    technology: "HTML , CSS , JavaScript ",
    demoLink: "https://sparkling-mandazi-27c2a6.netlify.app/",
    codeLink: "https://github.com/logeshbaskarlb/Joke-API",
  },


];

const Project = () => {
  return (
    <>
      <div
        className="container mt-5 min-vh-100"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className="text-center mb-4 text-danger">My Projects</h2>
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
