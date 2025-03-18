import React from 'react'
import GiftCard from './GiftCard'
import { Award, Recycle, Shield, Truck } from 'react-bootstrap-icons'
import Card3 from './Card3'

export default function FestivalPacks() {
    const festivalPacks = [
        {
            img: 'https://res.cloudinary.com/djb0v8sck/image/upload/v1742063588/Birthday_Gift_Hamper_rmc6w5.jpg',
            
            giftTitle:"Birthday Gift Hamper", 
            about:"Celebrate birthdays with our special selection of healthy treats in a reusable hamper.", 
            
            contents:"Mixed Nuts, Dried Berries, Honey-roasted Pecans, Trail Mix", 
            
            amount: "$25.99"
        },
        {
            img: 'https://res.cloudinary.com/djb0v8sck/image/upload/v1742063588/Birthday_Gift_Hamper_rmc6w5.jpg',
            
            giftTitle:"Birthday Gift Hamper", 
            about:"Celebrate birthdays with our special selection of healthy treats in a reusable hamper.", 
            
            contents:"Mixed Nuts, Dried Berries, Honey-roasted Pecans, Trail Mix", 
            
            amount: "$25.99"
        },
        {
            img: 'https://res.cloudinary.com/djb0v8sck/image/upload/v1742063588/Birthday_Gift_Hamper_rmc6w5.jpg',
            
            giftTitle:"Birthday Gift Hamper", 
            about:"Celebrate birthdays with our special selection of healthy treats in a reusable hamper.", 
            
            contents:"Mixed Nuts, Dried Berries, Honey-roasted Pecans, Trail Mix", 
            
            amount: "$25.99"
        },
        {
            img: 'https://res.cloudinary.com/djb0v8sck/image/upload/v1742063588/Birthday_Gift_Hamper_rmc6w5.jpg',
            
            giftTitle:"Birthday Gift Hamper", 
            about:"Celebrate birthdays with our special selection of healthy treats in a reusable hamper.", 
            
            contents:"Mixed Nuts, Dried Berries, Honey-roasted Pecans, Trail Mix", 
            
            amount: "$25.99"
        }
    ]

    const reasnCard = [
        {
            logo: <Shield />,
            heading: "Premium Quality",
            more: "100% natural, preservative-free dry fruits"
        },
        {
            logo: <Truck />,
            heading: "Free Shipping",
            more: "On orders over $50"
        },
        {
            logo: <Recycle />,
            heading: "Easy Returns",
            more: "7-day money-back guarantee"
        },
        {
            logo: <Award />,
            heading: "Certified Organic",
            more: "Sourced from certified organic farms"
        },
    ]
  return (
    <div className='festive-Container'> 
        <div className="festiveWrapper">
            <div className="festiveHeading">
                <h2> Festival & Gift Packs</h2>
                <p>
                Celebrate special occasions with our premium gift packs. Each pack is carefully curated and beautifully packaged to make your gifting experience memorable.
                </p>
            </div>

            <div className="cardWrapper">
                {festivalPacks.map((item,index)=> (
                    <GiftCard key={index} img={item.img} giftTitle={item.giftTitle} about={item.about} contents={item.contents} amount={item.amount} />
                ))}
            </div>
        </div>

        <div className="chooseContainer">
                <div className="chooseWrapper">
                    <div className="whyChooseUs">
                        <h2>Why Choose Us?</h2>
                    </div>

                    <div className="reasons">
                        {reasnCard.map((item, index) => (
                            <Card3 key={index} logo={item.logo} heading={item.heading} more={item.more} /> 
                        ))}
                    </div>
                </div>
        </div>
    </div>
  )
}
