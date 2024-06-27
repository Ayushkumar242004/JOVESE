import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"

import { useAuth } from "../../store/auth"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  const {isLoggedIn} =useAuth();
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/refer_earn'>Refer and Earn</Link>
            </li>
            <li>
              <Link to='/explore_mentors'>Explore Mentors</Link>
            </li>
            <li>
              <Link to='/demo_lectures'>Demo lectures</Link>
            </li>
            <li>
              <Link to='/resumeBuilder'>Resume Builder</Link>
            </li>
            
            <li>
              <Link to='/dashboard'>dashboard</Link>
            </li>
           
            {isLoggedIn ? (
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
            {/* <li>
             <Link to='/login_mentors'>Login Mentors</Link>
            </li>
            <li>
              <Link to='/StartPage'>Start Page</Link>
            </li>
            <li>
              <Link to='/Student_Profile_Form'>Student Profile Form</Link>
            </li> */}
            {/* <li>
              <Link to='/contact'>Contact</Link>
            </li> */}
          </ul>
         <div className="right" style={{ display:'flex',marginRight:'100px', gap:'10px' }}>
          <button className="Dashboard"> <span style={{fontWeight:'bold', marginTop:'6px'}}>Dashboard </span></button>
          <button className="Mentor" > <span style={{fontWeight:'bold', marginTop:'6px'}}>Find your mentor </span></button>
         </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
