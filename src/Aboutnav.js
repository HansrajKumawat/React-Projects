import React from 'react'
import About from './About'
import Facilities from './Facilities'
import Footer from './Footer'
import Navbar from './Navbar'
import Team from './Team'
import BlockHeader from './BlockHeader'

export default function Aboutnav() {
  return (
      <div>
   <Navbar></Navbar>
   <BlockHeader heading={"About"}></BlockHeader>
    {/* // <!-- Header Start --> */}
     {/* // <!-- Header End --> */}
    <About></About>
    <Facilities></Facilities>
    <Team></Team>
    <Footer></Footer>
    </div>
  )
}
