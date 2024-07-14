import React from "react"
import Back from "../common/back/Back"

import "react-calendar/dist/Calendar.css";
import "./Refer.css";
import MainDash from "./MainDash/MainDash";
import RightSide from "./RightSide/RightSide";
import Sidebar from "./Sidebar";

import LoginForm from "../LoginForm/LoginForm";

import { useAuth } from "../store/auth"
const CourseHome = () => {

  const {isLoggedIn}=useAuth();

  return (
 

    
    <>
      <Back title='Dashboard' />
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash />
          <RightSide />
        </div>
      </div>
    </>
  )
}

export default CourseHome
