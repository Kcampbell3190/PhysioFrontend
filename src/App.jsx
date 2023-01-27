import { useState } from 'react'
import './App.css'
import Homepage from './components/homepage'
import Login from './components/login'
import Signup from './components/signup'
import { Routes, Route, Link} from "react-router-dom"



function App() {
  

  return (
    <div className="background">
    
    <Link to="/Signup">
    <button>Sign Up</button>
    </Link>

    <Link to="/Login">
    <button>Login</button>
    </Link>

    <Routes>
    <Route path="/" element={<Login />} />
    {/* <Homepage /> */}
    <Route path="/Signup" element={<Signup />} />
    </Routes>
    

    

    </div>
  )
}

export default App
