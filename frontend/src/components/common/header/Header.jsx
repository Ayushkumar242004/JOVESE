import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";

import { useAuth } from "../../store/auth";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const { isLoggedIn } = useAuth();
  return (
    <>
      <Head />
      <header className>
        <nav className="flexSB ">
          <ul className={"flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>

            {!isLoggedIn ? 
            <></> :
            
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            }

            <li>
              <Link to="/explore_mentors">Explore Mentors</Link>
            </li>
            <li>
              <Link to="/demo_lectures">Demo lectures</Link>
            </li>
            <li>
              <Link to="/resumeBuilder">Resume Builder</Link>
            </li>
            {/*             
             <li>
              <Link to='/loginform_mentors'>LoginForm mentors</Link>
            </li>
            <li>
              <Link to='/chat'>Chat</Link>
            </li> */}

            {isLoggedIn ? (
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            ) : (
              <>
                <li>
                  {/* <Link to="/signup">SignUp</Link> */}
                  <Link to="/StartPageSignup">SignUp</Link>
                </li>
                <li>
                  {/* <Link to="/login">Login</Link> */}
                  <Link to="/StartPageLogin">Login</Link>
                </li>
              </>
            )}
          </ul>
          <div className="right">
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <button className="Dashboard font-bold my-2">Dashboard</button>
            </Link>

            <Link to="/explore_mentors" style={{ textDecoration: "none" }}>
              <button className="Mentor font-bold my-2">
                Find your mentor
              </button>
            </Link>
          </div>
          {/* <button
            className="toggle"
            onClick={() => setClick(!click)}
          >
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
