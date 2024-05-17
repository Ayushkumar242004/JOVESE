import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h3>{subtitle} </h3>
        <h1 style={{color:'black',}}>{title} </h1>
      </div>
    </>
  )
}

export default Heading
