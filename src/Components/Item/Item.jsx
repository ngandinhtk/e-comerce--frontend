import React from 'react'
// import PropTypes from 'prop-types'
import './item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
   // console.log(props);
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} ><img onClick={window.scroll(0,0)} src={props.image} alt="" /></Link> 
      <p>{props.name}</p>
      <div className="item-prices">
         <div className="item-price-new">
            ${props.new_price}
         </div>
         <div className="item-price-old">
            ${props.old_price}
         </div>
      </div>
    </div>
  )
}

Item.propTypes = {}

export default Item