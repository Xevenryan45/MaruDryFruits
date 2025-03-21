import React from 'react'
import GiftCard from './GiftCard'
import { Award, Recycle, Shield, Truck } from 'react-bootstrap-icons'
import Card3 from './Card3'

export default function FestivalPacks() {
    const festivalPacks = [
        {
            img: 'https://res.cloudinary.com/djb0v8sck/image/upload/v1742063588/Birthday_Gift_Hamper_rmc6w5.jpg',
            
            giftTitle:"Birthday Gift Hamper", 
            about:"Celebrate birthdays with our special selection.", 
            
            contents:"Mixed Nuts, Dried Berries, Honey-roasted Pecans", 
            
            amount: "$25.99"
        },
        {
            img: 'https://res.cloudinary.com/djb0v8sck/image/upload/v1742474076/corporate_bpxst5.jpg',
            
            giftTitle:"Corporate Gift Box", 
            about:"Premium gift box perfect for corporate gifting", 
            
            contents:"Premium Almonds, Cashews, Pistachios, Mixed Trail Mix", 
            
            amount: "$25.59"
        },
        {
            img: 'https://res.cloudinary.com/djb0v8sck/image/upload/v1742475112/easter_c4b9bt.jpg',
            
            giftTitle:"Easter Gift Hamper", 
            about:"A premium selection of dry fruits and nuts in a decorative box", 
            
            contents:"Mixed Nuts, Mixed Nuts, Dried Berries ", 
            
            amount: "$15.99"
        },
        {
            img: 'https://res.cloudinary.com/djb0v8sck/image/upload/v1742475280/merrykrisman_staeji.jpg',
            
            giftTitle:"Christmas Nut Collection", 
            about:"Festive mix of premium nuts and dried fruits in a beautiful Christmas-themed tin.", 
            
            contents:"Mixed Nuts, Dried Berries", 
            
            amount: "$20.99"
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
