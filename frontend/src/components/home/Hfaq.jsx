import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hfaq = () => {


  return (
    <>
      <section className='hprice padding'>
        <Heading title='Frequently asked questions' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hfaq
