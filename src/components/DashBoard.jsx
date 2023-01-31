import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Account from './Account'
import Progress from './Progress'
import Programs from './Programs'

const DashBoard = () => {
  return (
   <>
      
     <Link to={"/Account"}>
    <button>Account</button>
    </Link>

    <Link to={"/Progress"}>
    <button>Progress</button>
      </Link>
      
     <Link to={"/Programs"}>
    <button>Programs</button>
    </Link>
      

   
   
      <h1>Dashboard</h1>
      
    {/* <Routes>
    <Route path="/Account" element={<Account />} />
   
    <Route path="/Progress" element={<Progress />} />
        
    <Route path="/Programs" element={<Programs />} />
    </Routes> */}

  </>
  )
}

export default DashBoard