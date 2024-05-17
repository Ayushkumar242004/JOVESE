import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO JOVESE' title='Supercharge your carrier with longterm mentorship' />
            <p>Land your dream job, role, and company faster than ever with 1:1 long term mentorship</p>
            <button className="SelectMentor">
              Select a Mentor for free trial <i className='fa fa-long-arrow-alt-right'></i>
            </button>
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
                    height:'50px'
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

      {/* Container with 10 buttons */}
      <div className="button-container">
        <div className="up">
        <button className="hero-button">Frontend</button>
        <button className="hero-button">Backend</button>
        <button className="hero-button">Full Stack</button>
        <button className="hero-button">DevOps</button>
        <button className="hero-button">Cloud Engineer</button>
        
        </div>
       <div className="down">
       <button className="hero-button">Data Science</button>
       <button className="hero-button">Data Analyst</button>
        <button className="hero-button">Product Engineer</button>
        <button className="hero-button">UI/UX Designer</button>
        <button className="hero-button">Marketing</button>
       </div>
       
      </div>
    </>
  );
};

export default Hero;
