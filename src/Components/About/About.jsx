import React from "react";

function About() {
  return (
    <section id="about" className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="text-center my-5">
        <h2 className="text-danger">Myself</h2>
      </div>
      <div className="container text-center">
        <div className="row align-items-center mb-5" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="col-md-6 mb-4 mb-md-0">
            <dotlottie-player
              src="https://lottie.host/8650e937-2910-42c5-9520-242fff84bb83/R5EzfeH3WZ.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "auto" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000">
            <p className="text-justify">
              Hey, I am Logeshwaran, an aspiring developer with a degree in Computer Science. I am currently learning new skills with a vision of becoming better at what I do. I like Web Development and to create new interfaces. I enjoy learning about technology and helping others use it to improve their lives and be more productive. I also have frontend skills in HTML, CSS, JavaScript, React.js, and backend skills in Node.js, MongoDB, Express.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
