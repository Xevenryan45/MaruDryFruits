import React, { useContext } from 'react';
import CartContext from '../hooks/cartContext';
import { DashSquareFill, FileXFill, PlusSquareFill } from 'react-bootstrap-icons';

const Cart = () => {
  const { cartItem, handleIncrease, handleDecrease, handleRemove } = useContext(CartContext);

  if (cartItem.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Your Shopping Cart</h1>
      <div style={{display: 'flex'}}>
        <div style={{flex: '55%'}}>
        <h2 style={{textAlign:'center', marginTop: '24px'}}>Cart Items (<span>{cartItem.length}</span>)</h2>
      {cartItem.map(item => (
        <div key={item.id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className=''><img src={item.image} alt="" style={{maxHeight: "100%",height: "170px",width:"220px", borderRadius:"10px", aspectRatio: "1/1"}}/></div>
          <div style={{display: "flex", border: "1px solid red", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: "50px"}}>
          <h3>{item.name}</h3>
          <p>
            Price: ${item.price} | Quantity: {item.quantity}
          </p>
          </div>
          <div style={{border: "1px solid red", display: "flex", alignItems: "center"}}>
          <button onClick={() => handleIncrease(item)} style={{backgroundColor: "white", border: "none",marginRight: "20px", fontSize: "20px"}}> <PlusSquareFill  style={{color: "#D97706"}}/> </button>
          <button onClick={() => handleDecrease(item)} style={{backgroundColor: "white",border: "none",marginRight: "20px",fontSize: "20px"}}> <DashSquareFill style={{color: "#D97706"}} /> </button>
          <button onClick={() => handleRemove(item)} style={{backgroundColor: "white",border: "none",marginRight: "20px",fontSize: "22px"}}> <FileXFill style={{color: "#D97706"}} /> </button>
          </div>
        </div>
        </div>
      ))}</div>
        <div style={{flex: '40%'}}></div>
      </div>
    </div>
  );
};

export default Cart;