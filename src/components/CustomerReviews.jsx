import React from 'react'
import Card4 from './Card4'

export default function CustomerReviews() {
    const comment = [
        {
            customerMsg:"These are the best dry fruits I've ever tasted! The quality is exceptional and the delivery was super fast. Highly recommended!", 
            img:"https://res.cloudinary.com/djb0v8sck/image/upload/v1742161467/Allison_pcqms5.jpg",
            customerName:"Allison Hale", 
            occupation:"Nutrionist",
        },
        {
            customerMsg:"These are the best dry fruits I've ever tasted! The quality is exceptional and the delivery was super fast. Highly recommended!", 
            img:"https://res.cloudinary.com/djb0v8sck/image/upload/v1742161467/Allison_pcqms5.jpg",
            customerName:"Allison Hale", 
            occupation:"Nutrionist",
        },
        {
            customerMsg:"These are the best dry fruits I've ever tasted! The quality is exceptional and the delivery was super fast. Highly recommended!", 
            img:"https://res.cloudinary.com/djb0v8sck/image/upload/v1742161467/Allison_pcqms5.jpg",
            customerName:"Allison Hale", 
            occupation:"Nutrionist",
        }
    ]
  return (
    <div className='reviewContainer'>
        <div className="reviewWrapper">
            <div className="reviewHeader">
                <h2>What our customers say</h2>
                <p>
                    Our customers are our greatest asset. Here's what they have to say about us
                </p>
            </div>

            <div className="reviewCardMapper">
                {comment.map((item, index) => (
                    <Card4 key={index} customerMsg={item.customerMsg} img={item.img} customerName={item.customerName} occupation={item.occupation} />
                ))}
            </div>
        </div>
    </div>
  )
}
