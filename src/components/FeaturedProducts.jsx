import React from 'react'
import Card2 from './Card2'

export default function FeaturedProducts() {
    const featuredProducts = [
        {
            pics : "https://res.cloudinary.com/djb0v8sck/image/upload/v1741692800/Premium_Almonds_y0yxmj.webp",
            fruitName : "Premium Almonds",
            text : "Premium quality California almonds, perfect for snacking and baking.",
            price : "$12.99",
        },
        {
            pics : "https://res.cloudinary.com/djb0v8sck/image/upload/v1741692704/Organic_Cashew_tz7okw.webp",
            fruitName : "Organic Cashew",
            text : "Organically grown cashew nuts with no preservatives or additives.",
            price : "$14.99",
        },
        {
            pics : "https://res.cloudinary.com/djb0v8sck/image/upload/v1741692646/Dried_Cranberries_zz3jqq.webp",
            fruitName : "Dried Cranberries",
            text : "Sweet and tangy dried cranberries, perfect for salads and baking.",
            price : "$12.00",
        },
        {
            pics : "https://res.cloudinary.com/djb0v8sck/image/upload/v1741692629/Mixed_Nuts_Packs_ipsz7j.jpg",
            fruitName : "Mixd Nuts Pack",
            text : "Assorted premium nuts including almonds, cashews, walnuts, and",
            price : "$19.99",
        }
    ]
  return (
    <div>
        <div className='productsContainer'>
        <div className="productsWrapper">
            <div className="productsHeading">
                <h3>Featured Products</h3>
                <p>Our Customer's Favorites Pick</p> 
            </div>

            <div className="cardWrapper">
                {featuredProducts.map((item, index) => (
                    <Card2 key={index} pics={item.pics} fruitName={item.fruitName} text={item.text} price={item.price} />
                ))}
            </div>
        </div>
    </div>
    </div>
  )
}
