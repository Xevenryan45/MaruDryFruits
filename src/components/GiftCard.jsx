import React from 'react'
import { Cart2 } from 'react-bootstrap-icons'

export default function GiftCard({ img, giftTitle, about, contents, amount}) {
  return (
    <div className='giftCard-Container'>
        <div className="giftImage-Container">
            <img src={img}/>
        </div>

        <div className="giftCardDetails">
            <h3>{giftTitle}</h3>

            <p>{about}</p>

            <span className="contentsD">
                <h5>Contents</h5>
                <p>{contents}</p>
            </span>

            <h2>{amount}</h2>

            <button> <Cart2 className='hero-cart' /> Add to Cart</button>
        </div>
    </div>
  )
}
