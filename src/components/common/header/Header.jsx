import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

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
              <Link to='/courses'>Chat with us</Link>
            </li>
            <li>
              <Link to='/about'>Explore Mentors</Link>
            </li>
            <li>
              <Link to='/team'>How it work</Link>
            </li>
            <li>
              <Link to='/pricing'>Blogs</Link>
            </li>
            <li>
              <Link to='/journal'>Resume Builder</Link>
            </li>
            {/* <li>
              <Link to='/contact'>Contact</Link>
            </li> */}
          </ul>
         <div className="right" style={{ marginBottom: "10px", marginTop: "-10px" }}>
          <button className="Dashboard"> Dashboard</button>
          <button className="Mentor"> Find your mentor</button>
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
