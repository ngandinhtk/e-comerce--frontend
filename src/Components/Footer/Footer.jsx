import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instag_icon from '../Assets/instagram_icon.png'
import printes_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
         <img src={footer_logo} alt="" />
         <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
         <li>Company</li>
         <li>Products</li>
         <li>Offices</li>
         <li>About</li>
         <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
         <div className="social-icon-container">
            <img src={instag_icon} alt="" />
         </div>
         <div className="social-icon-container">
            <img src={printes_icon} alt="" />
         </div>
         <div className="social-icon-container">
            <img src={whatsapp_icon} alt="" />
         </div>
      </div>
      <div className="footer-copyright">
         <hr />
         <p>Copyright @ 2024 - All rights reserved</p>
      </div>
    </div>
  )
}
