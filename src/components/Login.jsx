import React from 'react'
import './Login.css'


const Login = () => {
 return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login In</h3>
         <div className="inputs">
          <div>
            {/* <label>Email address</label> */}
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


export default Login