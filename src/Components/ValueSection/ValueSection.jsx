import React from 'react'
import './ValueSection.css'
import assets from '../../assets/assets'

const ValueSection = () => {
  return (
    <div className='valueContainer'>
        <div className="value">
      <div className="valueLeft">
        <img src={assets.visaImage} alt="" />
      </div>
      <div className="valueRight">
      <div className="valueFire">
                <img src={assets.fire_icon} alt="" />
                <p>100% TRUSTWORTHINESS</p>
            </div>
            <h1>WE VALUE YOUR TRUST AND SECURITY</h1>
            <p>Our mission is to make finance more accessible, transparent, and secure for everyone. With cutting.</p>
            <div className="btn">
        <button>Open Account</button>
        <img src={assets.RightButton} alt="" />
        </div>
        </div> 
        </div>
    </div>
  )
}

export default ValueSection