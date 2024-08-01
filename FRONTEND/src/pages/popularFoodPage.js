import React, { useEffect, useState } from 'react';
import './cart.css';

const PopularFoodPage = () => {
  const [foods, setFoods] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/Food/fetch')
      .then(response => response.json())
      .then(data => setFoods(data))
      .catch(error => console.error('Error fetching food data:', error));
  }, []);

  const handleQuantityChange = (foodId, value) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [foodId]: value,
    }));
  };

  const handleAddToCart = (foodId) => {
    const nic = localStorage.getItem('nic');
    if (!nic) {
      alert('Please log in to add items to your cart.');
      return;
    }

    const quantity = quantities[foodId] || 1;

    const cartData = {
      nic,
      foodId,
      quantity
    };
    
    fetch('http://localhost:3001/CartItem/addItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => console.error('Error adding item to cart:', error));
    
  }
  return (
    <div className='popularpage'>
      <h1>Our Popular Food Items</h1>
      <div className="food-items">
        {foods.map(food => (
          <div key={food._id} className="food-item">
            <img src={food.imageUrl} alt={food.foodname} />
            <h2>{food.foodname}</h2>
            <p>{food.description}</p>
            <p>Price: LKR {food.price}</p>
            <input 
              type="number" 
              min="1" 
              value={quantities[food._id] || 1}
              onChange={(e) => handleQuantityChange(food._id, parseInt(e.target.value))} 
            />
            <button onClick={() => handleAddToCart(food._id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFoodPage;
