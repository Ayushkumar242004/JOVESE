import React from 'react'
import './SignUp.css';
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
// import {  } from "react-icons/fa";
// import { Fa } from "react-icons/fa";

import Back from "../common/back/Back";

const SignUp = () => {
  return (
    <>
    <Back title="SignUp" style={{marginBottom:'100px'}} />
    <div className='wrapper' style={{backgroundColor:'black'}}>
      <form action="" autocomplete="off">
        <h1>SignUp</h1>
        
        <div className="input-box">
            {/* <input autocomplete="false" type="password" placeholder='Confirm Password'  required /> */}
            <input autocomplete="false" placeholder='Username' name="hidden" type="text"></input>
            <FaUser className='icon' />
        </div>
        <div className="input-box">
            {/* <input autocomplete="false" type="password" placeholder='Confirm Password'  required /> */}
            <input autocomplete="false" placeholder='Email' name="hidden" type="text"></input>
            <FaMailBulk className='icon' />
        </div>
        {/* <div className="input-box">
            <input type="number" placeholder='Phone number' required />
            <FaPhone  className='icon' />
        </div> */}
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
         <div className="input-box">
            {/* <input autocomplete="false" type="password" placeholder='Confirm Password'  required /> */}
            <input autocomplete="false" placeholder='Password' name="hidden" type="text"></input>
            <FaLock  className='icon' />
        </div>
        <div className="input-box">
            {/* <input autocomplete="false" type="password" placeholder='Confirm Password'  required /> */}
            <input autocomplete="false" placeholder='Confirm Password' name="hidden" type="text"></input>
            <FaLock  className='icon' />
        </div>
        <div className="remember-forgot">
            <label> <input type="checkbox" />Terms & Conditions</label>
        </div>

        <button type='submit'>SignUp</button>

        <div className="register-link">
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </form>
    </div>
  </>
  )
}

export default SignUp
