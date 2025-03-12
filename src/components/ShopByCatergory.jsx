import React from 'react'
import Card1 from './Card1'

export default function ShopByCatergory() {
    const shopCategory = [
        {
            pic : 'https://res.cloudinary.com/djb0v8sck/image/upload/v1741611239/Almond_g6unrm.jpg', 
            driedName : 'Almond',
            text: 'Premium Quality Almonds'
        },
        {
            pic : 'https://res.cloudinary.com/djb0v8sck/image/upload/v1741611344/cashew_vautys.webp',
            driedName : 'Cashew',
            text : 'Crunchy and delicious cashew nuts'
        }, 
        {
            pic : "https://res.cloudinary.com/djb0v8sck/image/upload/v1741611449/Pistachios_yc7fty.webp",
            driedName: 'Pistachio',
            text : 'Fresh and crunchy pistachios'
        },
        {
            pic : 'https://res.cloudinary.com/djb0v8sck/image/upload/v1741615536/raisins_jzkcpr.webp',
            driedName : 'Raisin',
            text : 'Sweet and juicy raisins'
        }
    ]
  return (
    <div className='categoryContainer'>
        <div className="categoryWrapper">
            <div className="categoryHeading">
                <h3>Shop by Category</h3>
            </div>

            <div className="cardWrapper">
                {shopCategory.map((item, index) => (
                    <Card1 key={index} pic={item.pic} driedName={item.driedName} text={item.text} />
                ))}
            </div>
        </div>
    </div>
  )
}
