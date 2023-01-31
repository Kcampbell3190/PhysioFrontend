import React, { Component} from 'react'
import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DashBoard from './components/DashBoard'
import { Routes, Route, Link} from "react-router-dom"



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
      </Routes>
    
      </>
    

   )
}

export default App
