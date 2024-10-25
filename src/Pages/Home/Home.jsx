import React from 'react'
import Hero from '../../Components/Hero/Hero'
import ValueSection from '../../Components/ValueSection/ValueSection'
import Transfer from '../../Components/Transfer/Transfer'
import HeroTwo from '../../Components/heroTwo/HeroTwo'
import Client from '../../Components/Client/Client'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
       <Hero/> 
       <HeroTwo/>
       <ValueSection/>
       <Transfer/>
       <Client/>
       <Footer/>
    </div>
  )
}

export default Home