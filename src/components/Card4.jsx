import React from 'react'
import { Quote } from 'react-bootstrap-icons'

export default function Card4({customerMsg, img, customerName, occupation}) {
  return (
    <div className='reviewCard'>
        <div className="msg">
            <Quote className='quoteMsg'/> 
            <p>{customerMsg}</p>
        </div>

        <div className="customer">
             <div className="customerImg">
                <img src={img} alt="customer" /> 
             </div>

             <div className="customerName">
                <p>{customerName}</p>
                <p className='hobby'>{occupation}</p>
             </div>
        </div>
    </div>
  )
}
