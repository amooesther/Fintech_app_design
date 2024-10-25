import React from 'react'
import './Client.css'
import assets from '../../assets/assets'

const Client = () => {
  return (
    <div className='clientWrapper'>
        <div className='testimonial'>
        <div className="testimonialFire">
                <img src={assets.fire_icon} alt="" />
                <p>TESTIMONIAL</p>
            </div>
            <h2>GET TO KNOW OUR CLIENTS</h2>
        </div>
    <div className='testimonialWrapper' >
        <div className='clientTestimonial'>
            <img src={assets.quote} alt="" />
            <p>I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product</p>
       <div className='client'>
        <div>
        <img src={assets.clientOne} alt="" />
        </div>
        <div>
        <img src={assets.fiveStar} alt="" />
        <p>Mike Torello</p>
        <span>CEO of Initech</span>
       </div>
       
       </div>
       
        </div>
        <div>
        <div className="clientTestimonial highlighted">
            <img src={assets.quoteGreen} alt="" />
            <p>We have successfully sold digital product and have happy with the results & look forward to using it again this.</p>
       <div className='client'>
        <div>
        <img src={assets.clientTwo} alt="" />
        </div>
        <div>
        <img src={assets.fiveStar} alt="" />
        <p>Richards Howkins</p>
        <span>Marketing Manager of Upnow</span>
       </div>
       
       </div>
       
        </div>  
        </div>
        <div>
        <div className='clientTestimonial'>
            <img src={assets.quote} alt="" />
            <p>Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible .</p>
       <div className='client'>
        <div>
        <img src={assets.clientThree} alt="" />
        </div>
        <div>
            <img src={assets.fiveStar} alt="" />
        <p>Thomas Magnum</p>
        <span>Barellon NSW</span>
       </div>
       
       </div>
       
        </div>
        </div>
    </div>
    <div className="bttns bttn2">
        <button className='butts'>View More</button>
        <img src={assets.RightButtonGreen} alt="" />
        </div>
    </div>
  )
}

export default Client