import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerUp'>
            <div className="footerUpleft">
                <h2>ARE YOU READY TO START?</h2>
                <p>Personalize your settings, follow your progress, archive your highlights and notes automatically Glose is the ultimate reading </p>
                <div className="btn">
        <button>Open Account</button>
        <img src={assets.RightButton} alt="" />
        </div>
            </div>
            <div className="footerUpRight">
                <img src={assets.readymockup} alt="" />
            </div>
        </div>
        <div className="footerDown">
            <img src={assets.logo2} alt="" className='logo2' />
            <div className='store'>
                <img src={assets.appstore} alt="" />
                <img src={assets.googleplay} alt="" />
                </div>
                <div className='card'>
                    <ul>
                        <li>Personal Loan</li>
                        <li>One Card</li>
                        <li>Savings</li>
                        <li>Checking</li>
                        <li>Contact</li>
                        <li>Help</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className='footerIcons'>
                    <img src={assets.twitter} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.instagram} alt="" />
                    <img src={assets.linkedin} alt="" />
                </div>
                <p className='feedback'>Send Your Feedback :
              <span>moc.edargpu@tcatnoc </span>  </p>
                <p className='policy'>Privacy Policy   |   Terms & Condition   |   Cookie Notice   |   Copyright Policy   |   Data Policy    </p>
            </div>
        </div>
    
  )
}

export default Footer