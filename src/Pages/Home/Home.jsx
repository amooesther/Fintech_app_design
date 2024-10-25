import React from 'react'
import Hero from '../../Components/Hero/Hero'
import ValueSection from '../../Components/ValueSection/ValueSection'
import Transfer from '../../Components/Transfer/Transfer'
import HeroTwo from '../../Components/heroTwo/HeroTwo'

const Home = () => {
  return (
    <div>
       <Hero/> 
       <HeroTwo/>
       <ValueSection/>
       <Transfer/>
    </div>
  )
}

export default Home