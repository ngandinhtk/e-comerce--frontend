import React from 'react'
import './offer.css'
import exclusive_img from '../Assets/exclusive_image.png'
export const Offer = () => {
  return (
    <div className='offers'>
      <div className="offer-left">
         <h1>Exclusive</h1>
         <h1>Offers For You</h1>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
         <button>Check Now</button>
      </div>
      <div className="offer-right">
         <img src={exclusive_img} alt="" />
      </div>
    </div>
  )
}
