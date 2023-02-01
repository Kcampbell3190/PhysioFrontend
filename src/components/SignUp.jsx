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
    <div className='form-card'>
      <h1>Sign-Up!</h1>
      <form>
        <div className="form-group mt-3">
        <label>Username</label>
        <input
          type="username"
          className="form-control mt-1"
          placeholder="e.g JaneDoe"
        />
        </div>
        <div className="form-group mt-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control mt-1"
          placeholder="e.g janedoe@email.com"
        />
        </div>
        <div className="form-group mt-3">
        <label>Password</label>
        <input
          type="username"
          className="form-control mt-1"
          placeholder="At least 6 characters"
        />
        </div>
        <div className="d-grid gap-2 mt-3">
            <SubmitButton />
        </div>
      </form>
    </div>
  )

}
export default SignUp