import React from 'react'
import './SignUp.css';
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Back from "../common/back/Back";

const SignUp = () => {
  return (
    <>
    <Back title="SignUp/Login" style={{marginBottom:'100px'}} />
    <div className='wrapper' style={{backgroundColor:'black'}}>
      <form action="">
        <h1>SignUp</h1>
        
        <div className="input-box">
            <input type="text" placeholder='UserName' required />
            <FaUser className='icon' />
        </div>
        <div className="input-box">
            <input type="number" placeholder='Phone number' required />
            <FaPhone  className='icon' />
        </div>
        <div className="input-box">
            <input type="text" placeholder='Where r you coming from ?' required />
            <FaEnvelope className='icon' />
        </div>
        <div className="input-box">
            <input type="text" placeholder='Why r you coming here?' required />
            <FaEnvelope className='icon' />
        </div>
        <div className="input-box">
            <input type="text" placeholder='Interests' required />
            <FaEnvelope className='icon' />
        </div>
        <div className="remember-forgot">
            <label> <input type="checkbox" />Terms & Conditions</label>
            <a href="#">Forgot Password?</a>
        </div>

        <button type='submit'>SignUp</button>

        {/* <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
        </div> */}
      </form>
    </div>
  </>
  )
}

export default SignUp
