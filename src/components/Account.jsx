import React from 'react'
import './Account.css'
import Avatar from './Images/avatar.png'




function account () {
  return (
    
    <>
   
 <img className="avatar" src={Avatar}></img>
      
<form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Update Details</h3>
       <div className="inputs">
        <div>
          {/* <label>Email address</label> */}
          <input className='name'
            type="name"
            placeholder="Update Name"
          />
        </div>
       <div>
        <input className='email'
            type="email"
            placeholder="Update email"
          />
          </div>
        <div>
          {/* <label>Password</label> */}
          <input className="password"
            type="password"
            placeholder="Update password"
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









      </>

  )
}

export default account