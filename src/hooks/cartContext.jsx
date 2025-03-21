import React, { useState, createContext, useEffect } from 'react';

// Helper function to safely get the initial cart state from localStorage with SSR guard and error handling
// const getInitialCart = () => {
//   if (typeof window === 'undefined') return [];
//   try {
//     const storedCart = localStorage.getItem('cartItem');
//     return storedCart ? JSON.parse(storedCart) : [];
//   } catch (error) {
//     console.error("Error parsing cart items from localStorage:", error);
//     return [];
//   }
// };

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItem')) || [];

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(cartItemsFromLocalStorage);

  // Single useEffect to update localStorage when cartItem changes
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem("cartItem", JSON.stringify(cartItem));
  //   }
  // }, [cartItem]);
  useEffect(()=>{
    localStorage.setItem("cartItem",JSON.stringify(cartItem));
},[cartItem])

  // function for adding to cart
  let handleAddToCart = (product) => {
    const item = cartItem.find((singleItem) => singleItem.id === product.id);
    if (item) {
      setCartItem(cartItem.map((oneItem) =>
        oneItem.id === product.id ? { ...item, quantity: item.quantity + 1 } : oneItem
      ));
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

// function for increase and decrease and remove
// function for increasing cart single item  
  function handleIncrease(product) {
    const item = cartItem.find((singleItem) => singleItem.id === product.id);
    if (item) {
      setCartItem(cartItem.map((oneItem) =>
        oneItem.id === product.id ? { ...item, quantity: item.quantity + 1 } : oneItem
      ));
    }
  }

// function for decreasing cart single item 
  function handleDecrease(product) {
    const item = cartItem.find((singleItem) => singleItem.id === product.id);
    if (item.quantity === 1) {
      setCartItem(cartItem.filter((oneItem) => oneItem.id !== product.id));
    } else {
      setCartItem(cartItem.map((items) =>
        items.id === product.id ? { ...item, quantity: item.quantity - 1 } : items
      ));
    }
  }

// function for clearing cart 
  function handleRemove(product) {
    setCartItem(cartItem.filter((oneItem) => oneItem.id !== product.id));
  }

  return (
    <CartContext.Provider value={{ cartItem, handleAddToCart, handleIncrease, handleDecrease, handleRemove }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;