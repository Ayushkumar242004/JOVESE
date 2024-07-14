import React from "react";
import { Link } from 'react-router-dom';
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            
            <Heading subtitle='WELCOME TO JOVESE' title='Supercharge your carrier with longterm mentorship' />
            <div className='text-[#FF0000] text-lg '>
            <h1>Land your dream job, role, and company faster than ever with 1:1 long term mentorship</h1>
            </div>
            
            <Link to="/explore_mentors" className="SelectMentor" style={{ textDecoration: 'none' , display:'flex', justifyContent:'center'}}>
              <span >Select a Mentor for free trial </span>
            </Link>

            <div className='button'>
              <div className="together">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search mentors by company, skill or role "
                  style={{
                    height: "40px",
                    textAlign: "center",
                    marginTop:'10px',
                    marginLeft:'5px',
                    borderRadius:'10px',
                    width:'45rem',
                    height:'50px',
                    border:'2px solid black',
                    fontSize:'20px',
                  }}
                />
                <button className='find'>
                  Find your mentor <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
      <div className='margin'></div> 
      
      
      
     
    </>
  );
};

export default Hero;
