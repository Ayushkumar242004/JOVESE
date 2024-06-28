import React from "react"
import AboutHome from "../exploreOurMentors/AboutHome"
import Hblog from "./Hblog"
import HCompanies from "./HCompanies"
import Hero from "./hero/Hero"
import Hfaq from "./Hfaq"
import Testimonal from "./homeExploreMentors/Testimonal"
import Three from "../Three/three"
const Home = () => {
  return (
    <>
      <Hero />
      <AboutHome />
      <HCompanies />
      <Testimonal /> 
      <Hblog />
     <Three />
      <Hfaq />
    </>
  )
}

export default Home
