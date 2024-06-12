import React from 'react'
import './StartPage.css';
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import Back from "../common/back/Back";

const StartPage = () => {
    return (
      <>
      <Back title="Start Page" />
        <div className='wrapper'>
        <form action="">  
          <button type='submit'>Student</button>
          <button type='submit'>Mentor</button>        
        </form>
      </div>
      </>
    )
}
export default StartPage