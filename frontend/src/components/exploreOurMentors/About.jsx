import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"

const About = () => {
  return (
    <>
      <Back title='Explore' />
      <div className='margin'></div>

      {/* Container with 10 buttons */}
      <div className="button-container" style={{
        marginBottom:'20px',
       
      }}>
        <div className="up" style={{
          marginLeft:'25px',
        }}>
        <button className="hero-button">Frontend</button>
        <button className="hero-button">Backend</button>
        <button className="hero-button">Full Stack</button>
        <button className="hero-button">DevOps</button>
        <button className="hero-button">Cloud Engineer</button>
        
        </div>
       <div className="down" style={{
          marginLeft:'25px',
        }}>
       <button className="hero-button">Data Science</button>
       <button className="hero-button">Data Analyst</button>
        <button className="hero-button">Product Engineer</button>
        <button className="hero-button">UI/UX Designer</button>
        <button className="hero-button">Marketing</button>
       </div>
       
      </div>
      <AboutCard />
    </>
  )
}

export default About
