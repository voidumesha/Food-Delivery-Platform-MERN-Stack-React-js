import React from "react";
import "../Styles/Cards.css";

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="cards px-5 py-[100px] sm:px-12 md:px-[120px] w-full h-screen overflow-y-scroll">
      <div className="image-box">
        <img src={img} alt="images" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Price- {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
