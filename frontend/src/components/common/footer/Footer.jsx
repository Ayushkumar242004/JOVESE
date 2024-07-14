import React from "react"
import { Link } from 'react-router-dom';
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      
      <footer >
          <div className='box logo' style={{display:'flex ',flexDirection:'column'}} >
            <h1 style={{color:'red', fontStyle:'italic'}}>JOVESE</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <div style={{diplay:'flex'}}>
            <i  style={{padding:'8px'}}className='fab fa-facebook-f icon'></i>
            <i style={{paddingTop:'8px', paddingLeft:'3px' }} className='fab fa-twitter icon'></i>
            <i style={{paddingTop:'8px', paddingLeft:'1px' }} className='fab fa-instagram icon'></i>
            </div>
          </div>
        <div className='container padding' >
          
          <div className=' link'>
            <h3 >Explore</h3>
            
            <ul >
              <li ><Link to="/resumeBuilder" style={{ textDecoration: 'none', color: 'inherit' }}>Resume Builder</Link></li>
              <li><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link></li>
              <li><Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>How it works?</Link></li>
              <li><Link to="/explore_mentors" style={{ textDecoration: 'none', color: 'inherit' }}>Explore Mentors</Link></li>
              <li><Link to="/demo_lectures" style={{ textDecoration: 'none', color: 'inherit' }}>Demo Lecture</Link></li>
            </ul>
           
          </div>
          <div className='link' >
            <h3>Contacts</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          
          <div className=' last' >
            <h3 style={{marginLeft:'30px'}}>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View <br></br>, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This template is made with <i className='fa fa-heart'></i> by JOVESE
        </p>
      </div>
    </>
  )
}

export default Footer
