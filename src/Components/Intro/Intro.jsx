import React from "react";
import logesh from "../../Images/Logesh.png";
import "./Intro.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IconButton, Stack } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Particle from "../../Particle/Particle";

function Intro() {
  return (
    <div id="intro">
      <div className="intro-container position-absolute">
        <Particle />
      </div>
      <section className="container d-flex justify-content-evenly align-items-center position-relative min-vh-100">
        <div className="row d-flex flex-wrap">
          <div
            className="col m-4 text-center p-5 intro-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>
              Hi there! I am <span className="red">Logesh</span>.
            </h1>
            <h5>I'm a </h5>
            <h6 className="red">
              <TypeAnimation
                sequence={[
                  "Fullstack Developer ",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  () => {
                    // console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                repeat={Infinity}
                style={{ fontSize: "2em", display: "inline-block" }}
              />
            </h6>
            <div className="d-flex flex-row block justify-content-center align-items-center shadow rounded p-2">
              <Stack direction="row" className="d-block" spacing={3}>
                <IconButton color="primary" component="label">
                  <a
                    href="https://github.com/logeshbaskarlb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </IconButton>
                <IconButton color="primary" component="label">
                  <a
                    href="https://www.linkedin.com/in/logeshwaran-b-1582b5219/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </IconButton>
                <IconButton color="primary" component="label">
                  <a
                    href="mailto:logeshbaskarr007@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MailOutlineIcon />
                  </a>
                </IconButton>
              </Stack>
            </div>
          </div>
          <div
            className="col text-center intro-image"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src={logesh} alt="profile" className="image" width={"320px"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
