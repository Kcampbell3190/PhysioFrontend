import React, { Component} from 'react'
import { useState } from 'react'
import './Landing.css'
import Login from './Login'
import Signup from './SignUp'
import Yoga1 from './Images/yoga1.png'
import Yoga2 from './Images/yoga2.png'
import Yoga3 from './Images/yoga3.png'




import { Routes, Route, Link} from "react-router-dom"



function Landing() {

 return (
    
     <>
      
      <img src={Yoga1}></img>
      <img src={Yoga2}></img>
      <img src={Yoga3}></img>

  

  
    
    <Link to="/auth/Signup">
    <button>Sign Up</button>
    </Link>

    <Link to="/Login">
    <button>Login</button>
    </Link> 

      {/* <Routes>
         
          <Route path="/Login" element={<Login />} />
          <Route path="/auth/Signup" element={<Signup />} />
      </Routes> */}
    
      </>
    

   )
}

export default Landing