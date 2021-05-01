import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import AboutSection from '../AboutSection/AboutSection';
import Projects from '../Projects/Projects';
import SkillsSection from '../SkillsSection/SkillsSection';

const Home = () => {
    return (
        <div>
            
            <Navbar/>
            <AboutSection/>
            <SkillsSection></SkillsSection>
           <Projects/>
        </div>
    );
};

export default Home;