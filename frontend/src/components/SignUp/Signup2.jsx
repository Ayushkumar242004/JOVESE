import React, { useState } from 'react';
import './SignUp.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Back from "../common/back/Back";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const { storeTokenInLS } = useAuth(); // Correct destructuring of useAuth hook
    // const navigate = useNavigate(); // Hook for navigation
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/user/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials) //Need to format in string ,
                //so converts a JavaScript object (credentials in this case) into a JSON string 
                //JSON=Javascript Object Notation
            });

            if (response.ok) {
                const responseData = await response.json();
                setCredentials({ username: "", email: "", password: "", confirmPassword: "" });
                toast.success("Registration successful");
                storeTokenInLS(responseData.token); // Uncomment this to store token
                window.location.href = '/'; // Uncomment this to navigate after signup
            } else {
                const responseError = await response.json();
                toast.error(responseError.extraDetails ? responseError.extraDetails : responseError.message);
                if (responseError.message === "You have an account already you can Login instead") {
                    window.location.href = '/login'; // Uncomment this to navigate to login
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred during signup.");
        }
    }

    return (
        <>
            <Back title="SignUp" style={{ marginBottom: '100px' }} />
            <div className='wrapper' style={{ backgroundColor: 'black' }}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <h1>SignUp</h1>
                    <div className="input-box">
                        <input placeholder='Username' name="username" onChange={handleChange} value={credentials.username} type="text" />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input placeholder='Email' name="email" onChange={handleChange} value={credentials.email} type="email" />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input placeholder='Password' name="password" onChange={handleChange} value={credentials.password} type="password" />
                        <FaLock className='icon' />
                    </div>
                    <div className="input-box">
                        <input placeholder='Confirm Password' name="confirmPassword" onChange={handleChange} value={credentials.confirmPassword} type="password" />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label htmlFor="termsConditions">
                            <input id="termsConditions" type="checkbox" /> Terms & Conditions
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
