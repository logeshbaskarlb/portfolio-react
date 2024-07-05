import React, { useCallback } from "react";
import "./Intro.css";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1bTBxPl5na2mXpJj-cOgku3dDRI_cMsl4/view?usp=sharing";

  const openResume = useCallback(() => {
    window.open(resumeLink);
  }, [resumeLink]);

  return (
    <section className="container hello d-flex justify-content-evenly align-items-center position-relative min-vh-100">
      <div className="row d-flex flex-wrap">
        <div
          className="col m-4 p-5 intro-content"
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
                  console.log("Thanks for visiting");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
          </h6>
          <div className="row d-flex flex-row block justify-content-evenly align-items-center p-1">
            <div className="col">
              <a href="https://www.linkedin.com/in/logeshwaran-b-1582b5219/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="blue"
                  className="bi bi-linkedin icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
            <div className="col">
              <a href="https://github.com/logeshbaskarlb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="grey"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
            <div className="col">
              <a href="mailto:logeshbaskarr007@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="red"
                  className="bi bi-envelope-at"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-4 row justify-content-center hover">
            <button className="btn bg-white text-black" onClick={openResume}>
              Resume
            </button>
          </div>
        </div>
        <div
          className="col text-center intro-image image hover-effect"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <dotlottie-player
            src="https://lottie.host/8a99e13f-12e1-4d95-9965-080a160c84b7/hrUZBV2q8O.json"
            background="transparent"
            speed="2"
            style={{ width: "350px", height: "350px" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Intro);
