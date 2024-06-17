import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          
          <p> {val.desc}</p>
          
        </div>
      ))}
    </>
  )
}

export default PriceCard
