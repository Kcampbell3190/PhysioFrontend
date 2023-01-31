import React, { Component} from 'react'
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/SignUp'
import Yoga1 from './components/Images/yoga1.png'
import Yoga2 from './components/Images/yoga2.png'
import Yoga3 from './components/Images/yoga3.png'


import { Routes, Route, Link} from "react-router-dom"



function App() {

 return (
    
     <>
      <div>LANDING PAGE</div>
      <img src={Yoga1}></img>
      <img src={Yoga2}></img>
      <img src={Yoga3}></img>

  

  
    
    <Link to="/auth/Signup">
    <button>Sign Up</button>
    </Link>

    <Link to="/Login">
    <button>Login</button>
    </Link> 

      <Routes>
         
          <Route path="/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    
      </>
    

   )
}

export default App
