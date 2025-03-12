import React from 'react'
import { Cart2 } from 'react-bootstrap-icons'
import  '../App.css'

export default function Hero() {
  return (
    <>
        <div className="hero-container">
            <div className="hero-wrapper">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Premium Quality <br />
                        <span>Organic Dry Fruits</span>
                    </h1>
                    <p className="hero-description">
                        Our dry fruits are carefully selected and processed to ensure the highest quality and taste.
                        100% natural, preservative-free, and packed with nutrients
                    </p>
                    <button className="hero-btn1">
                        <Cart2 className='hero-cart' /> Shop Now
                    </button>
                </div>

                <div className="hero-img">
                    <img src='https://res.cloudinary.com/djb0v8sck/image/upload/v1741611408/hero-img_lrd3ta.jpg' className='hero-image' />
                </div>
            
            </div>
        </div>
    </>
  )
}
