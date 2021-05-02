import React from 'react';
import BackgroundAnimation from '../backgroundAnimation/BackgroundAnimation';
import ProgressBar from "@ramonak/react-progress-bar";
import './skillsSection.css'
const SkillsSection = () => {
    return (
        <div className="skills-container" id="skills">
            <div className="skills-wrapper">
                <div className="about-container">
                    <BackgroundAnimation/>
                    <div className="about-wrapper">
                        <h1 className="about-me" data-aos="fade-right">About Me</h1>
                        <h1 className="about-header" data-aos="fade-right">I'm a Full Stack web <br/> developer working from home</h1>
                        <p className="about-paragrap" data-aos="fade-right">Clear communicator with interpersonal skills. Seeking to apply strong knowledge of JavaScript Programming to ensure accurate and high-quality statistical output as a Programmer for your Company. </p>
                    </div>
                </div>
                <div className="about-container">
                    <h1 className="about-me" >Skills</h1>
                    <div className="bar">
                        <h3>JavaScript</h3>
                        <ProgressBar completed={70}/>
                    </div>
                    <div className="bar">
                        <h3>React.JS</h3>
                        <ProgressBar completed={80}/>
                    </div>
                    <div className="bar">
                        <h3>TypeScript</h3>
                        <ProgressBar completed={35}/>
                    </div>
                    <div className="bar">
                        <h3>node.JS</h3>
                        <ProgressBar completed={35}/>
                    </div>
                    <div className="bar">
                        <h3>HTML</h3>
                        <ProgressBar completed={60} style={{backgroundColor:'red'}}/>
                    </div>
                    <div className="bar">
                        <h3>CSS</h3>
                        <ProgressBar completed={75}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;