import React from 'react'
import './css/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="login-signup__fields">
          <input type="text" name="" id="" placeholder='Your Name' />
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" name="" id="" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p>Already have a account ? <span>Login</span> </p>
        <div className="login-signup__agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup