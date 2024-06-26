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
            <p style={{fontSize:'1.5rem', color:'white', marginBottom:'30px'}}>Land your dream job, role, and company faster than ever with 1:1 long term mentorship</p>
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

      {/* Container with 10 buttons */}
      <div >
      <div className="button-container " >
        <div className="up" >
        <button className="hero-button" style={{marginTop:'70px',marginRight:'20px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Frontend</span></button>
        <button className="hero-button"  style={{marginTop:'70px',marginRight:'20px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Backend</span></button>
        <button className="hero-button"  style={{marginTop:'70px',marginRight:'20px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Full Stack</span></button>
        <button className="hero-button"  style={{marginTop:'70px',marginRight:'20px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Devops</span></button>
        <button className="hero-button"  style={{marginTop:'70px',marginRight:'20px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Cloud Engineering</span></button>
        
        </div>
       <div className="down">
       <button className="hero-button"  style={{marginTop:'10px',marginRight:'20px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Data Science</span></button>
       <button className="hero-button"  style={{marginRight:'10px',marginRight:'20px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Data Analyst</span></button>
        <button className="hero-button"  style={{marginRight:'10px',marginRight:'20px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Product Engineer</span></button>
        <button className="hero-button" style={{marginRight:'10px',marginRight:'20px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>UI/UX Designer</span></button>
        <button className="hero-button"  style={{marginRight:'10px',marginRight:'20px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Marketing</span></button>
       </div>
       
      </div>
      </div>
    </>
  );
};

export default Hero;
