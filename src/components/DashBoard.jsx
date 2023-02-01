import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Avatar from './Images/avatar.png'
import './DashBoard.css'

const DashBoard = () => {
  return (
   <>
     
      
      <img className="avatar" src={Avatar}></img>
      
         
      <h1>Dashboard</h1>
    
      <h1>Git test push</h1>
      <div className='buttoncontainer'>
    
    
    <Link to={"/Account"}>
    <button className="button-account">Account</button>
    </Link>

    <Link to={"/Progress"}>
    <button className='button-progress'>Progress</button>
      </Link>
      
     <Link to={"/Programs"}>
    <button className='button-programs'>Programs</button>
        </Link>
    
    </div>
      

   
   
     
      
    {/* <Routes>
    <Route path="/Account" element={<Account />} />
   
    <Route path="/Progress" element={<Progress />} />
        
    <Route path="/Programs" element={<Programs />} />
    </Routes> */}

  </>
  )
}

export default DashBoard