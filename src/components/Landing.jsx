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


let buttonSign = document.querySelector('.buttonSign');
let buttonLogin = document.querySelector('.buttonLogin');

window.onscroll = () =>{
    let pos = window.scrollY -50;
    buttonLogin.style.right = `${pos}px`
    buttonSign.style.left = `${pos}px`
}

 return (
   <>
   
     <div className='images'>
      
      <img className='yoga1'src={Yoga1}></img>
      <img  className='yoga1'src={Yoga2}></img>
      <img className='yoga1' src={Yoga3}></img>

    </div>

  
    {/* <div className='buttoncontainer'> */}
    <Link to="/auth/Signup">
    <button className="buttonSign" role="button">Sign Up</button>
    </Link>

    <Link to="/Login">
    <button className="buttonLogin" role="button">Login</button>
    </Link> 
    {/* </div> */}

  
   
  
</> 
    

   )
}

export default Landing