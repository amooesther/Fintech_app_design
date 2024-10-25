import React from 'react'
import './Transfer.css'
import assets from '../../assets/assets'

const Transfer = () => {
  return (
    <div className='transferWrapper'>
      <div className='trans'>
      <div className="featureFire">
                <img src={assets.fire_icon} alt="" />
                <p>SERVICES</p>
            </div>
            <h2>CAN HELP YOU ACHIEVE FINANCIAL SUCCESS</h2>

      </div>
    <div className="transferUp">
        <div className="transferUpLeft">
            <img src={assets.mockup} alt="" className='mockup' />
            <img src={assets.mobile} alt=""  className='mobile'/>
        </div>        
        <div className="transferUpRight">
        <img src={assets.web_icon} alt="" srcset="" />
        <h2>Transfers Across The Globe Are Free</h2>
        </div>
    </div>
    <div className="transferLeft">
        
    </div>
    <div className="transferMiddle">
      <div>
       <img src={assets.transferMiddleLeft} alt="" />
      </div>
      <div>
        <img src={assets.transferMiddleRight} alt="" />
      </div>
    </div>
    <div className="transferDown">
      <div className='transferDownLeft'>
        <h2>100% Dedication</h2>
        <p>we offer a comprehensive range of innovative financial services tailored to meet your needs.</p>
      </div>
      <div><img src={assets.transferDownMiddle} alt="" /></div>
      <div className='transferDownRight'>
        <h2>Visit Our Service Page</h2></div>
    </div>
    <div className="bttns">
        <button className='butts'>View More</button>
        <img src={assets.RightButtonGreen} alt="" />
        </div>
    </div>
  )
}

export default Transfer