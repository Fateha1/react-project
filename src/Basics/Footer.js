import FooterStyle from '../Basics/FooterStyle.css';
import React from 'react';
import {  FaHome,FaMailBulk,FaPhone ,FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                    <div>
                        <p>Dhammondi,Dhaka-Bangladesh</p>
                        
                    </div>
                </div>
                <div className='phone'>
                 <h4> <FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>01234567</h4>
                 </div>
                 <div className='email'>
                 <h4> <FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>abc@gmail.com</h4>
                 </div>
            </div>
            <div className='right'>
                <h4>About this company</h4>
                <p>My name is Fateha Firoz .I am a Front End Developer</p>
                <div className='social'>
                <FaFacebook size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                <FaTwitter size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                <FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
