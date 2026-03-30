import React from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import Services from '../../components/Services';
import Methods from '../../components/Methods';
import Certifications from '../../components/Certifications';
import Promotion from '../../components/Promotion';
import Testimonials from '../../components/Testimonials';
import Coverage from '../../components/Coverage';
import Contact from '../../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Services />
            <Methods />
            <Certifications />
            <Promotion />
            <Testimonials />
            <Coverage />
            <Contact />
        </>
    );
};

export default Home;
