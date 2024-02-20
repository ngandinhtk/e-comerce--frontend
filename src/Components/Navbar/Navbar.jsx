import React, {useContext, useRef, useState} from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav-down.png'
function Navbar() {
  const [menu, setMenu] = useState("shop")  
  const {getTotalCartItem} = useContext(ShopContext)
  const menuRef = useRef()

  const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open')
  }
  $('.tabmenu').on("click", function () {
    // console.log('?');
    $('.tabmenu').addClass('.active')
  })
  return (
    <div className='navbar'>
      <div className="nav-logo">
         <img src={logo} alt="" />
         <p>SHOPPER</p>
      </div>
      {/* <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" /> */}
      <i class="fa fa-bars"></i>
      <ul ref={menuRef} className="nav-menu">
         <li className='tabmenu' onClick={()=>{setMenu("shop")}}> <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></> }  </li>
         <li className='tabmenu' onClick={()=>{setMenu("men")}}> <Link to="/men">Men</Link> {menu === "men" ? <hr /> : <></> } </li>
         <li className='tabmenu' onClick={()=>{setMenu("women")}}> <Link to="/women">Women</Link> {menu === "women" ? <hr /> : <></> } </li>
         <li className='tabmenu' onClick={()=>{setMenu("kids")}}> <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></> } </li>
      </ul>
      <div className="nav-cart__login">
         <Link to='/login'><button>LOGIN</button> </Link> 
         <Link to='/cart'> <img src={cart_icon} alt="" /> </Link>
         <div className="nav-cart__count">{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar