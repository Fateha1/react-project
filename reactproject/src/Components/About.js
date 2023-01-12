import React from 'react';
import Navbar from '../Basics/Navbar';
import Footer from '../Basics/Footer';
import HeroImg2 from '../Basics/HeroImg2';
import AboutContent from '../Basics/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2  heading='ABOUT.' text='I am a Front-End-Developer'/>
      <AboutContent/>
      <Footer/>
      
      
    </div>
  )
}

export default About

