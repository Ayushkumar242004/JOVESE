import React, { useEffect, useState } from 'react'
import './SignUp.css';
// import { useNavigate } from "react-router-dom";

import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
// import {  } from "react-icons/fa";
// import { Navigate } from 'react-router-dom'
// import { Fa } from "react-icons/fa";
import { useAuth } from '../store/auth';
import Back from "../common/back/Back";

const LogOut = () => {

    const { Logoutuser } = useAuth();
    localStorage.clear()
    useEffect=(()=>{
        Logoutuser();
    },[])
  return (
    window.location.href = '/'
  )
}

export default LogOut
