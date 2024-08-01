import React, { useState, useEffect } from "react";
import "./cart.css";

const Cart = () => {
  const [products] = useState([
    { id: 0, image: "image/b1.png", title: "Lion King", price: 120 },
    { id: 1, image: "image/b2.png", title: "banana", price: 60 },
    { id: 2, image: "image/b3.png", title: "flower", price: 230 },
    { id: 3, image: "image/b4.png", title: "lemon", price: 100 },
    { id: 4, image: "image/b5.png", title: "free", price: 180 },
    { id: 5, image: "image/b6.png", title: "lime", price: 190 },
    { id: 6, image: "image/b7.png", title: "Hotdog", price: 110 },
    { id: 7, image: "image/b8.png", title: "familypack", price: 200 },
    { id: 8, image: "image/b9.png", title: "pen", price: 240 },
    { id: 9, image: "image/b10.png", title: "memoryCard", price: 1200 },
    { id: 10, image: "image/b11.png", title: "charger", price: 800 },
    { id: 11, image: "image/b12.png", title: "phone", price: 1660 },
  ]);

  const [cart, setCart] = useState([]);

  const addtocart = (item) => {
    setCart([...cart, item]);
    showSuccessMessage();

    fetch("http://127.0.0.1:3000/add-to-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const delElement = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const showSuccessMessage = () => {
    alert("Added successfully!");
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderDetails = cart.map((item) => ({
      title: item.title,
      count: 1,
      price: item.price,
    }));

    const orderData = {
      items: orderDetails,
      total: cart.reduce((sum, item) => sum + item.price, 0),
    };

    fetch("/place-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Order placed successfully:", data);
        alert("Order placed successfully!");
        setCart([]);
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        alert("Failed to place order.");
      });
  };

  return (
    <>
    <div className="container">
      <div className="root">
        {products.map((item) => (
          <div className="box" key={item.id}>
            <div className="img-box">
              <img className="images" src={item.image} alt={item.title} />
            </div>
            <div className="bottom">
              <p>{item.title}</p>
              <h2>LKR {item.price}.00</h2>
              <button onClick={() => addtocart(item)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <div id="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="row-img">
                  <img className="rowimg" src={item.image} alt={item.title} />
                </div>
                <p style={{ fontSize: "12px" }}>{item.title}</p>
                <h2 style={{ fontSize: "15px" }}>LKR {item.price}.00</h2>
                <button onClick={() => delElement(index)}>Remove</button>
              </div>
            ))}
            <h2>
              Total: LKR {cart.reduce((sum, item) => sum + item.price, 0)}.00
            </h2>
            <button onClick={placeOrder}>Place Order</button>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Cart;
