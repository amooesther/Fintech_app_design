import React from 'react'
import './HeroTwo.css'
import assets from '../../assets/assets'

const HeroTwo = () => {
  return (
    <div className='heroTwoWrapper'>
<div className="heroTwo">
    <div className="heroTwoLeft">
        <div className='outerLayer'>
        <img src={assets.chart} alt="" />
        </div>
    </div>
    <div className="heroTwoRight">
    <div className="aboutFire">
                <img src={assets.fire_icon} alt="" />
                <p>ABOUT US</p>
            </div>
            <h2>ALL YOUR MONEY NEEDS IN ONE APP</h2>
    
            <div className="content-container">
    <div className='slider'>
        <div className='slideTwo'></div>
    </div>
    
    <div className="content">
        <div>
            <h4>Expenses tracker</h4>
            <p>Our comprehensive selection of medications, supplements, and healthcare products.</p>
        </div>
        <div>
            <h4>Crypto Connection</h4>
            <p>From advanced imaging technology such as MRI and CT scanners to precision surgical tools.</p>
        </div>
        <div>
            <h4>Automated Invoicing</h4>
            <p>We're committed to leveraging the latest innovations in medical technology.</p>
        </div>
    </div>
</div>
</div>
</div>
<div className="heroTwoDownWrapper">
    <div className="heroTwoDownLeft">
    <div className="featureFire">
                <img src={assets.fire_icon} alt="" />
                <p>FEATURED</p>
            </div>
            <h2>ALL THE FEATURES IN ONE APP</h2>
            <div className='text'>
            <div className='bullets'></div><p className='texts'>Get 3% cash back on everyday purchases, 2% on everything else4</p>
            </div>
            <div className='text'>
             <div className='bullets'></div><p className='texts'>Extra Spending Power when you have Rewards Checking through Upgrade6</p>
             </div>
             <div className="bttns">
        <button className='butts'>Open Account</button>
        <img src={assets.RightButtonGreen} alt="" />
        </div>
    </div>
    <div className="heroTwoDownRight">
        <img src={assets.heroTwoImage} alt="" />
    </div>
</div>
    </div>
  )
}

export default HeroTwo