import React from "react"
import AboutHome from "../about/AboutHome"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Three from "../Three/three"
const Home = () => {
  return (
    <>
      <Hero />
      <AboutHome />
      <HAbout />
      <Testimonal /> 
      <Hblog />
     <Three />
      <Hprice />
    </>
  )
}

export default Home
