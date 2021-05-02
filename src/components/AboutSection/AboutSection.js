import React, { useEffect } from "react";
import myImg from "../../images/myIntroduceImg.png";
import animation7 from '../../images/animationImg-7.png'
import Typewriter from "typewriter-effect";
import "./aboutSection.css";
const AboutSection = () => {

  return (
    <main className="aboutSection-container">
      <div className="container-left-side" >
        <h1 data-aos="fade-right">
          Hello, i'm <br /> Minhajur Rohoman
        </h1>
        <div className="typeWriter" data-aos="fade-right">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Web developer")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .deleteAll()
                .pauseFor(500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
                typewriter
                .typeString("JavaScript developer")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .deleteAll()
                .pauseFor(500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
                typewriter
                .typeString("React developer")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .deleteAll()
                .pauseFor(500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
                typewriter
                .typeString("I know JavaScript, <br/> ReactJS, Typescript, nodeJS, expressJS")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}/>
          
        </div>
        <div className="container-left-social-link-side" data-aos="fade-right">
          <a className="social-btn" href="https://github.com/rahat9016" target="_blank"><i class="fab fa-github"></i></a>
          <a className="social-btn" href="https://www.linkedin.com/in/minhajur-rohoman/"target="_blank"><i class="fab fa-linkedin-in"></i></a>
          <a className="social-btn" href="https://www.facebook.com/minhajurrohomanrahat90/" target="_blank"><i class="fab fa-facebook-f"></i></a>
        </div>
        <a data-aos="fade-right" className="downloadBtn" href="https://drive.google.com/file/d/1AhpBI0GADiZLbwpdRAVf6nLmEXgcZ_wP/view?usp=sharing" target="_blank">Download CV <i class="fas fa-file-download"></i>
        </a>
       
        <img src={animation7} className="animation7"/>
      </div>
      <div className="container-right-side" >
        <i class="fab fa-react reactImg" data-aos="fade-left"></i>
        <img src={myImg} alt="Minhajur Rohoman" data-aos="fade-left" />
      </div>
    </main>
  );
};

export default AboutSection;
