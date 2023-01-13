import AboutContentStyle from '../Basics/AboutContentStyle.css';

import React from 'react';
import { Link } from 'react-router-dom';
import download from '../Images/download.jpg';
import portfolio from '../Images/portfolio.jpg';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I</h1>
            <p>I am a front-end-developer.</p>
            <Link to='/contact'> <button className='btn'>Contact</button>
            </Link>
           
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={ download} className="img" alt="true" />

                </div>
                <div className='img-stack bottom'>
                    <img src={portfolio} className="img" alt="true" />

                </div>

            </div>

        </div>

      
    </div>
  )
}

export default AboutContent
