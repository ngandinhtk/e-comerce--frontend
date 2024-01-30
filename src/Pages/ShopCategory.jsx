import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext) 
  
  return (
    <div className='shop-category'>
      <img className='shop-category__banner' src={props.banner} alt="" />
      <div className="shop-category__indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category__sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
    <div className="shop-category__products">
      {all_product.map((item, index)=>{
        if (props.category === item.category) {
          return <Item key={index} id={item.id} 
            name={item.name} image={item.image} new_price={item.new_price} 
            old_price={item.old_price} />
        } else {
          return null;
        }
      })}
    </div>
      <div className="shop-category__loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory