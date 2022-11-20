

import HeroStyle from'../Basics/HeroStyle.css';
import React from 'react';
import IntroImg from '../Images/portfolio.jpg';
import { Link } from 'react-router-dom';







const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt="IntroImg" />
            

        </div>
        <div className='content'>
          <p>HI,MY NAME IS FATEHA FIROZ </p>
          <h1> I am a front-end-developer</h1>
          {/* <div>
            <Link to='/project' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>Projects</Link>
          </div> */}

        </div>

      
    </div>
  )
}

export default Hero
