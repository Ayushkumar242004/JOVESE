import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h1 style={{fontWeight:'bold', lineHeight: '1.5'}}>{subtitle} </h1>
        <h1 style={{color:'black',fontWeight:'bold', lineHeight: '1.5'}}>{title} </h1>
      </div>
    </>
  )
}

export default Heading
