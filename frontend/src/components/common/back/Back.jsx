import React from "react"

const Back = ({ title }) => {
  return (
    <>
      <section className="back">      
        <h1 style={{color:'#1eb2a6'}}>{title}</h1>
      </section>
      <div ></div>
    </>
  )
}

export default Back

// style={{
//   backgroundImage: `url("/images/back.webp")`,
//   backgroundSize: 'cover',
//   backgroundAttachment: 'fixed',
//   position: 'relative',
//   top: '0',
//   left: '0',
//   zIndex: '-1',
//   width: '100%',
//   height: '100vh',
//   paddingTop: '30%',
//   paddingRight: '50px',
//   color: '#fff',
//   textAlign: 'center',
// }}
