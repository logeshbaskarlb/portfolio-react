import React from "react";
import Wave from "react-wavify";

function Footer() {
  return (
    <>
      <div className="row d-flex flex-wrap m-4 p-3" data-aos="zoom-in" data-aos-duration="1000" id="footer">
        <div className="col ">
          <h4>Thanks for visiting!</h4>
          <p>If you like my work feel free to follow me on social media.</p>
        </div>
        <div className="col">
          <h4>Connect me on</h4>
          <a href="/">
            <li className="">GitHub</li>
          </a>
          <a href="/">
            <li className="">LinkedIn</li>
          </a>
          <a href="/">
            {" "}
            <li className="">Instagram</li>
          </a>
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-end "
        style={{ height: "16vh" }}
      >
        <Wave
          fill="black"
          paused={false}
          options={{
            height: 90,
            amplitude: 30,
            speed: 0.3,
            points: 4,
          }}
        />
      </div>
    </>
  );
}

export default Footer;
