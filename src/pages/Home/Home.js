import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skill from '../Skill/Skill';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skill></Skill>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;