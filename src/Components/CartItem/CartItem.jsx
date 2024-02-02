import React, { useContext } from 'react'
import './cart.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItem = () => {
  const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
  // console.log(cartItems);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=> 
        {
          if (cartItems[e.id]>0) {
            return  <div>
              <div  className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='cartitems-product-icon' />
                <p>{e.name}</p>
                <p>{e.price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} onClick={()=> {removeFromCart(e.id)}} alt="" />
                <hr />
              </div>
          </div>
            
          }
          return null
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Fee</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p><strong>Total</strong></p>
              <p><strong>${getTotalCartAmount()}</strong></p>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
       
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input  type="text" name="" id="" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}
