import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import AboutUs from '../../components/AboutUs';
import Services from '../../components/Services';
import RestaurantMap from '../../components/RestaurantMap';
import Methods from '../../components/Methods';
import VisionAISimulator from '../../components/VisionAISimulator';
import CostCalculator from '../../components/CostCalculator';
import InteractiveDiagnostic from '../../components/InteractiveDiagnostic';
import Certifications from '../../components/Certifications';
import Promotion from '../../components/Promotion';
import Testimonials from '../../components/Testimonials';
import Coverage from '../../components/Coverage';
import Education from '../../components/Education';
import Contact from '../../components/Contact';
import StickyCTA from '../../components/StickyCTA';

const Home: React.FC = () => {
    return (
        <main className="relative">
            <Hero />
            <TrustBar />
            <AboutUs />
            <Services />
            <RestaurantMap />
            <Methods />
            <VisionAISimulator />
            <CostCalculator />
            <InteractiveDiagnostic />
            <Certifications />
            <Promotion />
            <Testimonials />
            <Coverage />
            <Education />
            <Contact />
            <StickyCTA />
        </main>
    );
};

export default Home;
