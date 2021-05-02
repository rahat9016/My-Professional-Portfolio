import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import AboutSection from '../AboutSection/AboutSection';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import KnowAbout from '../KnowAbout/KnowAbout';
import Projects from '../Projects/Projects';
import SkillsSection from '../SkillsSection/SkillsSection';

const Home = () => {
    return (
        <div>
            
            <Navbar/>
            <AboutSection/>
            <SkillsSection/>
            <Projects/>
            <KnowAbout/>
            <Blog/>
            <Contact/>
            
        </div>
    );
};

export default Home;