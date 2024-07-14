import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutHome = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
         
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items' >
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' style={{display:'flex !important', flexDirection:'row !important', justifyContent:'space-between'}}>
                   
                    <div className='text1'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutHome
