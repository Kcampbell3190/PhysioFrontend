import React, { Component} from 'react'
import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DashBoard from './components/DashBoard'
import { Routes, Route, Link } from "react-router-dom"
import Programs from './components/Programs'
import Account from './components/Account'
import Progress from './components/Progress'
import Exercises from './components/Exercises'
import Build from './components/Build'



function App() {

 return (
    
    <>
        {/* <Landing /> */}
        <Link to="/Landing"></Link>

       <Routes>
          
      <Route path="/" element={<Landing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/auth/SignUp" element={<SignUp />} />
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/Programs" element={<Programs />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/Progress" element={<Progress />} />
      <Route path="/Exercises" element={<Exercises />} />
      <Route path="/Build" element={<Build />} />

      </Routes>
    
      </>
    

   )
}

export default App
