import React, { useState, useContext } from "react";
import {  InfoCircleFill, Cart2 } from "react-bootstrap-icons";
import CartContext from '../hooks/cartContext';


const products = [
  {
    id: 1,
    name: "Premium Almonds",
    price: 12.99,
    rating: 4.8,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1741692800/Premium_Almonds_y0yxmj.webp",
    category: "Nuts",
    origin: "California",
    description: "Premium quality California almonds, perfect for snacking and baking.",
    nutrition: {
      calories: "164 kcal per 28g",
      protein: "6g",
      fats: "14g",
      carbs: "6g",
      fiber: "3.5g",
      benefits: "Rich in vitamin E, magnesium, and healthy fats. Helps reduce cholesterol and supports heart health."
    },
    isOrganic: false,
    inStock: true,
  },
  {
    id: 2,
    name: "Organic Cashews",
    price: 14.99,
    rating: 4.7,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1741692704/Organic_Cashew_tz7okw.webp",
    category: "Nuts",
    origin: "Vietnam",
    description: "Organically grown cashew nuts with no preservatives or additives.",
    nutrition: {
      calories: "157 kcal per 28g",
      protein: "5g",
      fats: "12g",
      carbs: "9g",
      fiber: "1g",
      benefits: "Good source of copper, magnesium, and phosphorus. Supports bone and immune health."
    },
    isOrganic: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Dried Cranberries",
    price: 9.99,
    rating: 4.5,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1741692646/Dried_Cranberries_zz3jqq.webp",
    category: "Dried Fruits",
    origin: "USA",
    description: "Sweet and tangy dried cranberries, perfect for salads and baking.",
    nutrition: {
      calories: "123 kcal per 40g",
      protein: "0.4g",
      fats: "0.5g",
      carbs: "33g",
      fiber: "2g",
      benefits: "Contains antioxidants and vitamin C. May help prevent urinary tract infections."
    },
    discount: null,
    isOrganic: false,
    inStock: true,
  },
  {
    id: 4,
    name: "Pistachios (Roasted & Salted)",
    price: 16.99,
    rating: 4.6,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1741611449/Pistachios_yc7fty.webp",
    category: "Nuts",
    origin: "Turkey",
    description: "Crunchy and flavorful roasted and lightly salted pistachios.",
    nutrition: {
      calories: "159 kcal per 28g",
      protein: "6g",
      fats: "13g",
      carbs: "8g",
      fiber: "3g",
      benefits: "Good source of protein, fiber, and antioxidants. May help regulate blood sugar levels."
    },
    discount: null,
    isOrganic: false,
    inStock: true,
  },
  {
    id: 5,
    name: "Organic Walnuts",
    price: 13.99,
    rating: 4.7,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1742476869/walnut_dewsuz.jpg",
    category: "Nuts",
    origin: "California",
    description: "Organic walnuts rich in omega-3 fatty acids and antioxidants.",
    nutrition: {
      calories: "185 kcal per 28g",
      protein: "4.3g",
      fats: "18.5g",
      carbs: "3.9g",
      fiber: "1.9g",
      benefits: "High in omega-3 fatty acids and antioxidants. Supports brain and heart health."
    },
    discount: "5% OFF",
    isOrganic: true,
    inStock: true,
  },
  {
    id: 6,
    name: "Medjool Dates",
    price: 11.99,
    rating: 4.9,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1742477094/Datees_sgiog4.jpg",
    category: "Dried Fruits",
    origin: "Morocco",
    description: "Large, sweet and soft Medjool dates - nature's caramel.",
    nutrition: {
      calories: "66 kcal per date",
      protein: "0.4g",
      fats: "0.1g",
      carbs: "18g",
      fiber: "1.6g",
      benefits: "Rich in potassium, fiber, and antioxidants. Natural energy booster with low glycemic index."
    },
    discount: null,
    isOrganic: false,
    inStock: true,
  },
  {
    id: 7,
    name: "Golden Raisins",
    price: 8.99,
    rating: 4.5,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1741615536/raisins_jzkcpr.webp",
    category: "Dried Fruits",
    origin: "Turkey",
    description: "Sweet, plump golden raisins, perfect for baking, cooking, or snacking.",
    nutrition: {
      calories: "130 kcal per 40g",
      protein: "1.3g",
      fats: "0.1g",
      carbs: "31g",
      fiber: "1.5g",
      benefits: "Good source of potassium and antioxidants. Helps with digestion and provides quick energy."
    },
    discount: "Buy 2 Get 1 Free",
    isOrganic: false,
    inStock: true,
  },
  {
    id: 8,
    name: "Dried Apricots",
    price: 10.99,
    rating: 4.6,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1742477269/Dried_Apricots_hrdpi1.jpg",
    category: "Dried Fruits",
    origin: "Turkey",
    description: "Naturally sweet dried apricots with no added sugar or preservatives.",
    nutrition: {
      calories: "80 kcal per 35g",
      protein: "1g",
      fats: "0.1g",
      carbs: "19g",
      fiber: "2.5g",
      benefits: "Rich in vitamin A, potassium, and iron. Supports eye health and digestion."
    },
    discount: null,
    isOrganic: false,
    inStock: true,
  },
  {
    id: 9,
    name: "Brazil Nuts",
    price: 15.99,
    rating: 4.7,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1742477345/Brazil_Nuts_h6jbmb.jpg",
    category: "Nuts",
    origin: "Brazil",
    description: "Large, creamy Brazil nuts known for their high selenium content.",
    nutrition: {
      calories: "186 kcal per 28g",
      protein: "4g",
      fats: "19g",
      carbs: "3.5g",
      fiber: "2g",
      benefits: "Extremely high in selenium. Supports thyroid function and immune system health."
    },
    discount: null,
    isOrganic: false,
    inStock: false,
  },
  {
    id: 10,
    name: "Organic Dried Figs",
    price: 12.99,
    rating: 4.8,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1742477511/Organic_Dried_Figs_p0lowu.jpg",
    category: "Dried Fruits",
    origin: "Greece",
    description: "Organic sun-dried figs, naturally sweet and rich in fiber.",
    nutrition: {
      calories: "110 kcal per 40g",
      protein: "1.5g",
      fats: "0.5g",
      carbs: "27g",
      fiber: "5g",
      benefits: "Excellent source of dietary fiber and minerals. Supports digestive health and bone strength."
    },
    discount: "15% OFF",
    isOrganic: true,
    inStock: true,
  },
  {
    id: 11,
    name: "Macadamia Nuts",
    price: 18.99,
    rating: 4.9,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1742477694/Macadamia_Nuts_zshaip.jpg",
    category: "Nuts",
    origin: "Australia",
    description: "Buttery, creamy macadamia nuts, lightly roasted to enhance flavor.",
    nutrition: {
      calories: "204 kcal per 28g",
      protein: "2.2g",
      fats: "21.5g",
      carbs: "3.9g",
      fiber: "2.4g",
      benefits: "Rich in monounsaturated fats and antioxidants. Supports heart health and provides long-lasting energy."
    },
    discount: null,
    isOrganic: false,
    inStock: true,
  },
  {
    id: 12,
    name: "Dried Mango Slices",
    price: 11.99,
    rating: 4.7,
    image: "https://res.cloudinary.com/djb0v8sck/image/upload/v1742477797/Dried_Mango_Slices_znj6rr.jpg",
    category: "Dried Fruits",
    origin: "Philippines",
    description: "Sweet and tangy dried mango slices, perfect for a tropical snack.",
    nutrition: {
      calories: "140 kcal per 40g",
      protein: "1g",
      fats: "0.3g",
      carbs: "33g",
      fiber: "1.5g",
      benefits: "Contains vitamin A and vitamin C. Supports immune system and skin health."
    },
    discount: "Buy 1 Get 1 50% OFF",
    isOrganic: false,
    inStock: true,
  },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {handleAddToCart} = useContext(CartContext);



  return (
    <div className="shop-page">
      <main className="shop-main">
        <section className="shop-hero">
          <div className="shop-container">
            <h1 className="shop-title">Shop Our Dry Fruits</h1>
            <p className="shop-subtitle">
              Discover our premium selection of high-quality dry fruits and nuts from around the world. 
              Perfect for healthy snacking, baking, or gifting.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="shop-products">
          <div className="container">
            <div className="product-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <div className="product-actions">
                      <button className="btn-cart" onClick={() => {handleAddToCart(product)}}>
                        <Cart2 className="icon1" />
                        Add to Cart
                      </button>
                      <button className="btn-info" onClick={() => setSelectedProduct(product)}>
                        <InfoCircleFill className="icon2" />
                        Nutrition Info
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition Info Modal */}
        {selectedProduct && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setSelectedProduct(null)}>&times;</span>
              <h2>{selectedProduct.name} - Nutrition Facts</h2>
              <p className="nutrition-item"><strong>Calories:</strong> {selectedProduct.nutrition.calories}</p>
              <p className="nutrition-item"><strong>Protein:</strong> {selectedProduct.nutrition.protein}</p>
              <p className="nutrition-item"><strong>Fats:</strong> {selectedProduct.nutrition.fats}</p>
              <p className="nutrition-item"><strong>Carbs:</strong> {selectedProduct.nutrition.carbs}</p>
              <p className="nutrition-item"><strong>Fiber:</strong> {selectedProduct.nutrition.fiber}</p>
              <p className="nutrition-benefits"><strong>Health Benefits:</strong> {selectedProduct.nutrition.benefits}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Shop;
