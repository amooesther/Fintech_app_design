import React from 'react'
import './Hero.css'
import assets from '../../assets/assets'

const Hero = () => {
  return (
    <div className="heroContainer">
    <div className='hero'>
        <div className='heroLeft'>
            <div className="fire">
                <img src={assets.fire_icon} alt="" />
                <p>100% TRUSTED PLATFORM</p>
            </div>
            <h1>FINANCE WITH SECURITY AND <span>FLEXIBILITY</span></h1>
            <p>no-fee checking account with cash back rewards. Enjoy fee-free banking and earn cash back on your everyday purchases.</p>
        <div className="btn">
        <button>Open Account</button>
        <img src={assets.RightButton} alt="" />
        </div>
       
        </div>
        <div className="heroRight">
         <img src={assets.HeroImage} alt="" />
        </div>      
    </div>
    <div className="heroBottom">
        <img src={assets.spherule} alt="" />
        <img src={assets.samsungPay} alt="" />
        <img src={assets.visa} alt="" />
        <img src={assets.amazon} alt="" />
        <img src={assets.paypal} alt="" />
        <img src={assets.alipay} alt="" />
       </div>
    
    </div>
  )
}

export default Hero