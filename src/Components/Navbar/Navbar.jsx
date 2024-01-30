import React, {useState} from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import $ from 'jquery'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menu, setMenu] = useState("shop")  
  $('.tabmenu').on("click", function () {
    console.log('?');
    $('.tabmenu').addClass('.active')
  })
  return (
    <div className='navbar'>
      <div className="nav-logo">
         <img src={logo} alt="" />
         <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
         <li className='tabmenu' onClick={()=>{setMenu("shop")}}> <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></> }  </li>
         <li className='tabmenu' onClick={()=>{setMenu("men")}}> <Link to="/men">Men</Link> {menu === "men" ? <hr /> : <></> } </li>
         <li className='tabmenu' onClick={()=>{setMenu("women")}}> <Link to="/women">Women</Link> {menu === "women" ? <hr /> : <></> } </li>
         <li className='tabmenu' onClick={()=>{setMenu("kids")}}> <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></> } </li>
      </ul>
      <div className="nav-cart__login">
         <Link to='/login'><button>LOGIN</button> </Link> 
         <Link to='/cart'> <img src={cart_icon} alt="" /> </Link>
         <div className="nav-cart__count">0</div>
      </div>
    </div>
  )
}

export default Navbar