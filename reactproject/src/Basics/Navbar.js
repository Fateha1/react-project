import React, { useState } from 'react';
import NavbarStyle from '../Basics/NavbarStyle.css';


import{Link}from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const[click,setclick]= useState(false);
  const handleclick=()=> setclick(!click);

  const [color,setColor]= useState(false);
  const changeColor = () => {
    if(window.scrollY>= 1){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  window.addEventListener("scroll",changeColor);

  return (
    <div className = {color? "header header-bg" : "header"}>
      <Link to="/">Portfolio</Link>
      <ul  className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/project'>Project</Link>
        </li>
      </ul>
        <div className='hamburger'onClick={ handleclick}>
          {click?(<FaTimes size={20} style={{color:"#fff"}}/>):( <FaBars size={20} style={{color:"#fff"}}/>)}
          
         

        </div>
      
    </div>
  )
}

export default Navbar


    
  