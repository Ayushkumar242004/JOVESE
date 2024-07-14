import React from "react"
import { awrapper } from "../../dummydata"
import "./about.css"
const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        {/* <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='' style={{display: 'inline-block', display:'flex !important', flexDirection:'row !important'}}>
                
                <div className='text' >
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div> */}
      </section>
    </>
  )
}

export default Awrapper
