import React from 'react'
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/SignUp'
import HomePage from './components/HomePage'
import { Routes, Route, Link} from "react-router-dom"



function App() {
  

  return (
    <>
    {/* // <div className="background">
    //   <div>LANDING PAGE</div> */}

  

    {/* <Link to="/">
    </Link>
    
    <Link to="/Signup">
    <button>Sign Up</button>
    </Link>

    <Link to="/Login">
    <button>Login</button>
    </Link> */}

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    

    </>

  )
}

export default App
