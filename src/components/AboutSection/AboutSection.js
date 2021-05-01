import React from "react";
import myImg from "../../images/myIntroduceImg.png";
import animation7 from '../../images/animationImg-7.png'
import Typewriter from "typewriter-effect";
import "./aboutSection.css";
const AboutSection = () => {
 
  return (
    <main className="aboutSection-container">
      <div className="container-left-side" >
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
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
                
            }}/>
          
        </div>
        <div className="container-left-social-link-side">
          <a className="social-btn" href="https://github.com/rahat9016" target="_blank"><i class="fab fa-github"></i></a>
          <a className="social-btn" href="https://www.linkedin.com/in/minhajur-rohoman/"target="_blank"><i class="fab fa-linkedin-in"></i></a>
          <a className="social-btn" href="https://www.facebook.com/minhajurrohomanrahat90/" target="_blank"><i class="fab fa-facebook-f"></i></a>
        </div>
        <a className="downloadBtn" href="https://drive.google.com/file/d/1AhpBI0GADiZLbwpdRAVf6nLmEXgcZ_wP/view?usp=sharing" target="_blank">Download CV <i class="fas fa-file-download"></i>
        </a>
       
        <img src={animation7} className="animation7"/>
      </div>
      <div className="container-right-side">
        <i class="fab fa-react reactImg"></i>
        <img src={myImg} alt="Minhajur Rohoman" />
      </div>
    </main>
  );
};

export default AboutSection;
