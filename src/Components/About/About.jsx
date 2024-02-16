import React from "react";

function About() {
  const resumeLink = ""
  return (
    <div id="about">
      <div className="text-center mt-5 pt-5">
        <h2 className="red">My self</h2>
      </div>
     <div className="container flex-wrap pt-5 mt-4 text-center m-auto min-vh-100">
     <div className="row d-flex flex-wrap justify-content-between mx-auto mt-5">
        <div className="col-md-6 mx-auto text-justify" data-aos="fade-right" data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
          <dotlottie-player
            src="https://lottie.host/8650e937-2910-42c5-9520-242fff84bb83/R5EzfeH3WZ.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="col m-5" data-aos="fade-left" data-aos-duration="1000">
          <p>
            Hey, I am Logeshwaran, an aspiring developer with a degree in
            Computer Science. I am currently learning new skills with a
            vision of becoming better at what I do. I like Web Development and
            to Create a new Interfaces. I enjoy learning about technology and
            helping others use it to improve their lives and be more productive.
            I also have Frontend skills in HTML, CSS, Javascript, React js  and
            Backend skills in node js, mongoDB, express.
          </p>
          <div className="text-center">
            <button endI className="btn btn-dark" onClick={() => window.open(resumeLink)}>Download Resume</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default About;
