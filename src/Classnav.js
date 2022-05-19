import React from 'react'
import Class from './Class'
import Footer from './Footer'
import Navbar from './Navbar'
import Registration from './Registration'
import BlockHeader from './BlockHeader'

export default function Classnav() {
  return (
      <div>
          <Navbar></Navbar>

          <BlockHeader  heading={"Our Classes"}></BlockHeader>
    
    {/* // <!-- Header End --> */}
    <Class></Class>
    <Registration></Registration>
    <Footer></Footer>
    </div>

  )
}
