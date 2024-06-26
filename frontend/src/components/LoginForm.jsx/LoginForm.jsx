import React, { useState } from 'react'
import './LoginForm.css';
import { FaEnvelope } from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import Back from "../common/back/Back";

const LoginForm = () => {


  const [credentials,setCredentials]=useState({
    email:"",
    password:"",
  })
  const handleChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    try {
      
      const response=await fetch('http://localhost:5000/api/user/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(credentials)
      })

      if(response.ok){
        const data=await response.json()
      }else{

      }

    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
    <Back title=" Login for students" />
    <div className='wrapper' style={{backgroundColor:'black'}}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" placeholder='Email' name='email' onChange={handleChange} value={credentials.email}  required />
            <FaEnvelope className='icon'  />
        </div>
        <div className='input-box'>
            <input type="password" placeholder='Password' name='password' onChange={handleChange} value={credentials.password} required />
            <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
            <label> <input type="checkbox" />Remember me</label>
            <a href="#">Forgot Password?</a>
        </div>

        <button type='submit'>Login</button>

        <div className="register-link">
            <p>Don't have an account? <a href="/SignUp">Register</a></p>
        </div>
      </form>
    </div>
    </>
  )
}

export default LoginForm
