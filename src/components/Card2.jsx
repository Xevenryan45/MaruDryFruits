import React from 'react'
import { Cart2, ExclamationCircle, Star } from 'react-bootstrap-icons'



export default function Card2({pics,fruitName,text,price}) {
  return (
    <div className='card-container2'>
        <div className="products-imagee">
            <img src={pics} style={{ height: '250px'}} />
        </div>

        <div className="products-text">
            <h3>{fruitName}</h3>
            <p>{text}</p>
            <span>{price}</span>
        </div>
        
        <div className="products-btn">
            <button className='first-btn'> <ExclamationCircle className='hero-cart'/> Nutrition Info</button>
            <button className='second-btn'> <Cart2 className='hero-cart' /> Add to Cart</button>
        </div>
    </div>
  )
}
