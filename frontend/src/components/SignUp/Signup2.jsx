import React, { useState } from 'react';
import './SignUp.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Back from "../common/back/Back";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios' 
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
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:5000/api/user/signup", credentials);
            console.log(response);
            
            if (response.status === 201) {
                const responseData = response.data;
                setCredentials({ username: "", email: "", password: "", confirmPassword: "" });
                storeTokenInLS(responseData.token);
                toast.success("Registration successful");
                window.location.href = '/';
            } else {
                const responseError = response.data;
                toast.error(responseError.extraDetails ? responseError.extraDetails : responseError.message);
                if (responseError.message === "You have an account already you can Login instead") {
                    window.location.href = '/login';
                }
            }
        } catch (error) {
            console.log('reg', error);
            if (error.response) {
                const responseError = error.response.data;
                toast.error(responseError.extraDetails ? responseError.extraDetails : responseError.message);
                if (responseError.message === "You have an account already you can Login instead") {
                    window.location.href = '/login';
                }
            } else {
                toast.error("An error occurred. Please try again later.");
            }
        }
    };
    
      const handleChange = (e) => {
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
                    <div className="input-box">
                        <input placeholder='Confirm Password' name="confirmPassword" onChange={handleChange} value={credentials.confirmPassword} type="password" required />
                        <FaLock className='icon' />
                    </div>
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
