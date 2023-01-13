import React from 'react';

import Navbar from '../Basics/Navbar';
import HeroImg2 from '../Basics/HeroImg2';
import Footer from '../Basics/Footer';

import PricingCard from '../Basics/PricingCard';
import Work from '../Basics/Work';




const Project = () => {
  return (
    <div>
      
      <Navbar/>
      <HeroImg2 heading='PROJECTS.' text='Some of my most react work'/>
      <Work/>
      <PricingCard/>
      <Footer/>
      
    
      
    </div>
  )
}

export default Project

