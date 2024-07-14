import React from 'react'
import { Link } from 'react-router-dom';
import './StartPage.css';
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import Back from "../common/back/Back";

const StartPage_signup = () => {
    return (
      <>
      <Back title="who you are ?" />
        <div className='wrapper'>
        <form action="">  
        <Link to="/signup">
            <button type="button">
                Student
            </button>
        </Link>
        <Link to="/signup">
            <button type="button">
                Mentor
            </button>
        </Link>
        </form>
      </div>
      </>
    )
}
export default StartPage_signup