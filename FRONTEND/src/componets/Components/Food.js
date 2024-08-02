import React from "react";
import "../Styles/Cart.css";

const Cart = ({ cartItems, handleRemoveFromCart, handlePlaceOrder }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="row-img">
                <img className="rowimg" src={item.image} alt={item.title} />
              </div>
              <p style={{ fontSize: "12px" }}>{item.title}</p>
              <h2 style={{ fontSize: "15px" }}>LKR {item.price}.00</h2>
              <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            </div>
          ))}
          <div className="total">
            <h2>Total: LKR {total}.00</h2>
          </div>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;
