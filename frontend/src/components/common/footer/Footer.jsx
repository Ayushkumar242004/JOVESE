import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      
      <footer >
          <div className='box logo' style={{display:'flex ',flexDirection:'column'}} >
            <h1>JOVESE</h1>
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
              <li>Resume Builder</li>
              <li>Pro plan</li>
              <li>Blog</li>
              <li>How it works</li>
              <li>Explore Mentors</li>
              <li>Live webinars</li>
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
