import React from "react";
import myImg from "../../images/myIntroduceImg.png";
import Typewriter from "typewriter-effect";
import "./aboutSection.css";
const AboutSection = () => {
  return (
    <main className="aboutSection-container">
      <div className="container-left-side">
        <h1>
          Hello, i'm <br /> Minhajur Rohoman
        </h1>

        <div className="typeWriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I am a full stack web developer.")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
          
        </div>
        <div className="container-left-social-link-side">
          <a className="social-btn" href="#"><i class="fab fa-github"></i></a>
          <a className="social-btn" href="#"><i class="fab fa-linkedin-in"></i></a>
          <a className="social-btn" href="#"><i class="fab fa-facebook-f"></i></a>
        </div>
        <button>Download CV</button>
      </div>
      <div className="container-right-side">
        <i class="fab fa-react reactImg"></i>
        <img src={myImg} alt="Minhajur Rohoman" />
      </div>
    </main>
  );
};

export default AboutSection;
