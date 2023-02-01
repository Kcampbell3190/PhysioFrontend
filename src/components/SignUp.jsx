import React from 'react'
import SubmitButton from './styled/AuthButton'
import AuthButton from './styled/AuthButton'
import { useNavigate } from 'react-router-dom'
import './styled/card.styles.css'
import './SignUp.css'

    

    
const SignUp = () => {
  // setAuthMode(authMode === "signin" ? "signup" : "signin")

  const linkStyles = {

  }
  
  const navigate = useNavigate()

  return (
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>
       <div className="inputs">
        <div>
          {/* <label>Email address</label> */}
          <input className='name'
            type="name"
            placeholder="Enter Name"
          />
        </div>
       <div>
        <input className='email'
            type="email"
            placeholder="Enter email"
          />
          </div>
        <div>
          {/* <label>Password</label> */}
          <input className="password"
            type="password"
            placeholder="Enter password"
          />
          </div>
        </div>
        <div className="loginbtncontainer">
          <button type="submit" className="submitbtn">
            Submit
          </button>
        </div>
      
      </div>
    </form>
  </div>
  )

}
export default SignUp