import React from "react"
import "./three.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Card from 'react-bootstrap/Card';

// copy code of blog => blogCard

const Hblog = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='Follow these three steps to get started' title='Lets get started with these easy three steps' />
          <div className='grid2'>
            {blog.slice(12, 15).map((val) => (
              <div className='items shadow'>
               
                <div className='text'>
                  
                  <h1>{val.title}</h1>
                  <p >{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  
    </>
  )
}

export default Hblog
