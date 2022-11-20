import React from 'react'
import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Project';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route  path='/' element={<Home/>}/>
         <Route  path='/about' element={<About/>}/>
         <Route  path='/contact' element={<Contact/>}/>
         <Route  path='/project' element={<Project/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

        

    






