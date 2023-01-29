import React from 'react'
import './homepage.css'
import { Routes, Route, Link } from "react-router-dom"
import Account from './account'
import Progress from './progress'
import Programs from './programs'

const homepage = () => {
  return (
   <>
    <div className='background'>
      <h1>Welcome to your Homepage</h1>
      </div>
      
    <Link to="/Account">
    <button>Account</button>
    </Link>

    <Link to="/Progress">
    <button>Progress</button>
      </Link>
      
     <Link to="/Programs">
    <button>Programs</button>
    </Link>
      

   
   
      <h1>homepage</h1>
      
    <Routes>
    <Route path="/Account" element={<Account />} />
   
    <Route path="/Progress" element={<Progress />} />
        
    <Route path="/Programs" element={<Programs />} />
    </Routes>

  </>
  )
}

export default homepage