import React from 'react'
import './LoginForm.css';
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import Back from "../common/back/Back";

const LoginForm = () => {
  return (
    <>
    <Back title=" Login form" />
    <div className='wrapper' style={{backgroundColor:'black'}}>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" placeholder='UserName' required />
            <FaUser className='icon'  />
        </div>
        <div className='input-box'>
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
        </div>
        <div className='input-box'>
            <input type="confirm_password" placeholder='Confirm Password' required />
            <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
            <label> <input type="checkbox" />Remember me</label>
            <a href="#">Forgot Password?</a>
        </div>

        <button type='submit'>Login</button>

        <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
    </>
  )
}

export default LoginForm
