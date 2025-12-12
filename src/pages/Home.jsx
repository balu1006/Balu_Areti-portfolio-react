import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Education />
            <Experience />
            <Projects />

            <Certifications />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
