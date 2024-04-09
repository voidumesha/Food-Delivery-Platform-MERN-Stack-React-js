import React from "react";
import MapRoute from "./componets/mapRoute";
import "./index.css";
import image from "./img/plate1.png";
import Navbar from "./componets/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const inputStyle = {
  boxSizing: "border-box",
  border: "1px solid transparent",
  width: "40%",
  height: "35px",
  padding: "0 12px",
  borderRadius: "5px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  fontSize: "14px",
  outline: "none",
  position: "absolute",
  top: 60,
  left: "50%",
  zIndex: 999,
  display: "inline-block",
};
const inputStyle2 = {
  width: "50%",
  height: "35px",
  padding: "0 12px",
  fontSize: "14px",
  position: "absolute",
  top: "122%",
  left: "45%",
  border: "none",
  fontWeight: "700",
};
const overlayStyle = {
  position: "absolute",
  top: 58,
  left: 0,
  width: "100%",
  height: 600,
  backgroundColor: "#0C5C66",
};

const backgroundImageStyle = {
  position: "absolute",
  top: 50,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const App = () => {
  return (
    <Router>
      <div style={overlayStyle}>
        <input
          type="text"
          placeholder="What would you like to eat ?"
          style={inputStyle}
        />
      </div>

      <img
        src={image}
        alt="Plate"
        style={{
          width: 300,
          height: 300,
          position: "fixed",
          marginTop: 230,
          left: 780,
        }}
      ></img>
      <p style={{ fontSize: 20 }}>Are you Hungry??</p>
      <Navbar />
      <div style={{ position: "relative" }}>
        {/*<p
          style={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: "700",
            color: "#008c9f",
          }}
        >
          FOOD Delivery Section
        </p>
        <div style={backgroundImageStyle}></div>
        <div style={overlayStyle}></div>
        <input
          type="text"
          placeholder="will be retrived delivery address from data database"
          style={inputStyle}
        />?*/}
        {/*<MapRoute/>*/}
      </div>
    </Router>
  );
};

export default App;
