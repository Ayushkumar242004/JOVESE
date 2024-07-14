import React, { useState } from 'react';
import './SignUp.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Back from "../common/back/Back";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [credentials, setCredentials] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
      });

      const [termsAccepted, setTermsAccepted] = useState(false);

      const handleCheckboxChange = (e) => {
        setTermsAccepted(e.target.checked);
    }
    //   const navigate=useNavigate();
      const {storeTokenInLS}=useAuth();
      const handleSubmit = async(e)=>{
          e.preventDefault();
    
          try {
            const response=await fetch('http://localhost:5000/api/auth/signup',{
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(credentials)
            })
    
            if (response.ok) {
              const responseData = await response.json();
              setCredentials({ username: "", email: "", password: "" ,confirmPassword:""});
              // localStorage.setItem("token",responseData.token)
              storeTokenInLS(responseData.token);
              toast.success("Regestration successful")
              window.location.href = '/';

            //   navigate('/')
            } else {
              const responseError = await response.json();
              toast.error(responseError.extraDetails ?responseError.extraDetails : responseError.message)
              //(responseError.extraDetails);
              if(responseError.message==="You have an account already you can Login instead "){
                // navigate("/login")
                window.location.href = '/login';

              }
            }
    
          } catch (error) {
              console.log('reg',error);
          }
        }
      const handleInput = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

    return (
        <>
            <Back title="SignUp" style={{ marginBottom: '100px' }} />
            <div className='wrapper' style={{ backgroundColor: 'black' }}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <h1>SignUp</h1>
                    <div className="input-box">
                        <input placeholder='Username' name="username" onChange={handleChange} value={credentials.username} type="text" required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input placeholder='Email' name="email" onChange={handleChange} value={credentials.email} type="email" required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input placeholder='Password' name="password" onChange={handleChange} value={credentials.password} type="password" required />
                        <FaLock className='icon' />
                    </div>
                    {/* <div className="input-box">
                        <input placeholder='Confirm Password' name="confirmPassword" onChange={handleChange} value={credentials.confirmPassword} type="password" required />
                        <FaLock className='icon' />
                    </div> */}
                    <div className="remember-forgot">
                        <label htmlFor="termsConditions">
                            <input id="termsConditions" type="checkbox" checked={termsAccepted} onChange={handleCheckboxChange} required /> Terms & Conditions
                        </label>
                    </div>
                    <button type="submit">SignUp</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;
