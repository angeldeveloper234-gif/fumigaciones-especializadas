import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import AboutUs from '../../components/AboutUs';
import Services from '../../components/Services';
import Methods from '../../components/Methods';
import InteractiveDiagnostic from '../../components/InteractiveDiagnostic';
import Certifications from '../../components/Certifications';
import Promotion from '../../components/Promotion';
import Testimonials from '../../components/Testimonials';
import Coverage from '../../components/Coverage';
import Education from '../../components/Education';
import Contact from '../../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <TrustBar />
            <AboutUs />
            <Services />
            <Methods />
            <InteractiveDiagnostic />
            <Certifications />
            <Promotion />
            <Testimonials />
            <Coverage />
            <Education />
            <Contact />
        </>
    );
};

export default Home;
