import React, { useEffect, useState } from 'react';
import './cart.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const nic = localStorage.getItem('nic');
    if (!nic) {
      alert('Please log in to view your cart.');
      return;
    }

    fetch(`http://localhost:3001/cart/getCart?nic=${nic}`)
      .then(response => response.json())
      .then(data => setCartItems(data.foodItems))
      .catch(error => console.error('Error fetching cart data:', error));
  }, []);

  return (
    <div className='CartPage'>
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.foodId.imageUrl} alt={item.foodId.foodname} />
            <h2>{item.foodId.foodname}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: LKR {item.foodId.price}</p>
            <p>Total: LKR {item.foodId.price * item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
