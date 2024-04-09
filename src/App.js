import React, { useState, useEffect } from "react";
import "./index.css";
import image from "./img/search.png";
import image1 from "./img/plate1.png";
import image2 from "./img/plate2.png";
import image3 from "./img/plate3.png";
import image4 from "./img/plate4.png";
import "./componets/DynamicImage.css";

import Navbar from "./componets/Navbar";

import { BrowserRouter as Router } from "react-router-dom";

const inputStyle = {
  boxSizing: "border-box",
  tabSize: "20",
  border: "1px solid transparent",
  width: "40%",
  height: "35px",
  padding: "0px 12px",
  paddingLeft: "40px",
  borderRadius: "5px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  padding: "10px 40px 10px 20px",
  backgroundImage: `url(${image})`,
  backgroundPosition: "top 5px left 3px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "25px 25px",
  fontSize: "14px",
  outline: "none",
  position: "absolute",
  top: 100,
  left: "50%",
  zIndex: 999,
  display: "inline-block",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: "#0C5C66",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const App = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(changeImage, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div style={overlayStyle}>
        <input
          type="text"
          placeholder="What would you like to eat ?"
          style={inputStyle}
        />
      </div>

      <div className="dynamic-image-container">
        <div className="image-wrapper">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Dynamic Image"
              className={index === currentImageIndex ? "active" : ""}
              style={{
                width: 420,
                height: 420,
                marginTop: 170,
                marginLeft: 790,
              }}
            />
          ))}
        </div>
      </div>
      <p style={{ fontSize: 20 }}>Are you Hungry ?</p>
      <Navbar />
    </Router>
  );
};

export default App;
