import React from "react";
import { Link } from "react-router-dom";
import image1 from "../img/logo.png";
import image2 from "../img/yumyard.png";
import image3 from "../img/cart.png";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#E3DEDE",
        height: 75,
        marginTop: -16,
        position: "fixed",
        width: "100%",
        top: 0,
      }}
    >
      <ul style={{ listStyleType: "none", padding: 28, fontSize: 12 }}>
        <img
          src={image1}
          alt="LOGO"
          style={{ width: 50, height: 50, position: "fixed", marginTop: -20 }}
        ></img>
        <li style={{ display: "inline-block", marginRight: "70px" }}> </li>
        <img
          src={image2}
          alt="YumYard"
          style={{
            width: 150,
            height: 30,

            marginTop: -10,

            position: "fixed",
          }}
        ></img>
        <li style={{ display: "inline-block", marginRight: "350px" }}> </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <Link
            to="/Home"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#004E58",
              padding: "3px 10px",
              borderRadius: "8px",
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#004E58",
              padding: "3px 10px",
              borderRadius: "8px",
            }}
          >
            About Us
          </Link>
        </li>
        <li style={{ display: "inline-block", marginRight: "480px" }}>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#004E58",
              padding: "3px 10px",
              borderRadius: "8px",
            }}
          >
            Contact
          </Link>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <Link
            to="/Login"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#004E58",
              padding: "3px 10px",
              borderRadius: "8px",
            }}
          >
            Login
          </Link>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <Link
            to="/Register"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#004E58",
              padding: "3px 10px",
              borderRadius: "8px",
            }}
          >
            Register
          </Link>
        </li>
        <img
          src={image3}
          alt="CART"
          style={{ width: 42, height: 30, position: "fixed", marginTop: -10 }}
        ></img>
      </ul>
    </nav>
  );
};

export default Navbar;
