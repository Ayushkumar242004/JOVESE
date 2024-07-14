import React, { useState } from 'react'
import './LoginForm.css';
import { FaEnvelope } from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import Back from "../common/back/Back";
import { toast } from 'react-toastify';
import { useAuth } from '../store/auth';
const LoginForm = () => {


  const [credentials,setCredentials]=useState({
    email:"",
    password:"",
  })


  const {storeTokenInLS}=useAuth()
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
        storeTokenInLS(data.token)
        setCredentials({email:"",password:""})
        toast.success("Login successful")
        window.location.href='/';
      }else{
        const responseError = await response.json();
        toast.error(responseError.message==="Invalid Email" ? responseError.message : "Password is incorrect");
      }

    } catch (error) {
        console.log(error);
    }
  } 
   const handleChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
    <Back title=" Login" />
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
