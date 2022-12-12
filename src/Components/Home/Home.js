import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import SocialLinks from '../SocialLink/SocialLinks';

const Home = () => {
    return (
        <div>
            <Header></Header>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Projects></Projects>
      
      <Contact></Contact>
      <SocialLinks></SocialLinks>
            
        </div>
    );
};

export default Home;