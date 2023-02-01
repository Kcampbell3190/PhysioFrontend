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
   <div className='backgroundcontainer'>
   
   
      
      <img className='yoga1'src={Yoga1}></img>
      <img  className='yoga2'src={Yoga2}></img>
      <img className='yoga3' src={Yoga3}></img>



  
    <div className='buttoncontainer'> 
    <Link to="/auth/Signup">
    <button className="buttonSign" role="button">Sign Up</button>
    </Link>

    <Link to="/Login">
    <button className="buttonLogin" role="button">Login</button>
    </Link> 
     </div> 

</div> 
    

   )
}

export default Landing