import React, { Component} from 'react'
import { useState } from 'react'
import './Landing.css'
import Login from './Login'
import Signup from './SignUp'
import Yoga1 from './Images/yoga1.png'
import Yoga2 from './Images/yoga2.png'
import Yoga3 from './Images/yoga3.png'
import background from './Images/comet.jpeg'




import { Routes, Route, Link} from "react-router-dom"



function Landing() {


let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');

window.onscroll = () =>{
    let pos = window.scrollY - 50;
    button1.style.right = `${pos}px`
    button2.style.left = `${pos}px`
}

 return (
   <>
   
     <div className='images'>
      
      <img className='yoga1'src={Yoga1}></img>
      <img  className='yoga1'src={Yoga2}></img>
      <img className='yoga1' src={Yoga3}></img>

    </div>

  
    <div className='buttoncontainer'>
    <Link to="/auth/Signup">
    <button className="button2" role="button">Sign Up</button>
    </Link>

    <Link to="/Login">
    <button className="button1" role="button">Login</button>
    </Link> 
    </div>

      {/* <Routes>
         
          <Route path="/Login" element={<Login />} />
          <Route path="/auth/Signup" element={<Signup />} />
      </Routes> */}
  
   
  
</> 
    

   )
}

export default Landing