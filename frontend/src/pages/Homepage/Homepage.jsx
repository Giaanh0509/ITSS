import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import MenuOverview from './components/MenuOverview';
import AboutUs from './components/AboutUs';
import Delivery from './components/Delivery';
import CustomerFeedback from './components/CustomerFeedback';

const Homepage = () => {
    return (
        <div className="home">
          <HeroSection />
          <MenuOverview />
          <AboutUs />
          <Delivery />
          <CustomerFeedback />
        </div>
    );
};

export default Homepage;
