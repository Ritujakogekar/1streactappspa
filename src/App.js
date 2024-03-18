import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Home/Homepage';

import About from './Components/About/About.js';
function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
    {/* <About /> */}
    <div className='app'>
      <Routes>
     
       <Route path='/' element={<Homepage />} />
       <Route path='/product' element={<>Product</>} />
       <Route path='/service' element={<>Service</>} />
       <Route path='/category' element={<>Category</>} />
       <Route path='/galary' element={<>galary</>} />
       <Route path='/contact' element={<>Contact</>} />
      
       <Route path='/About' element={<About/>} />

        
      </Routes>
      
      </div>
    </BrowserRouter>
    
  )
}

export default App;