import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import './hero.css'

function Hero() {
  return (
    <div className='hero '>
      <div className="hero-left">
         <h2>NEW ARRIVALS ONLY</h2>
         <div className="hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
         </div>
         <p>collections</p>
         <p>for everyone</p>
         <div className="hero-latest-btn">
            <div>Lastest Collections</div>
            <img src={arrow_icon} alt="" />
         </div>
      </div>
      <div className="hero-right">
         <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero