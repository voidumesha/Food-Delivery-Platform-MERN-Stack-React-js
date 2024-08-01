import { Link, useNavigate } from "react-router-dom";
import image1 from "./img/logo.png";
import image2 from "./img/yumyard.png";
import image3 from "./img/cart.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/cart");
  };
  return (
    <nav
      style={{
        backgroundColor: "#E3DEDE", //navbar color
        height: 80,
        marginTop: -2,
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
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
            width: 170,
            height: 35,

            marginTop: -12,

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
        <li style={{ display: "inline-block", marginRight: "440px" }}>
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
        <li style={{ display: "inline-block", marginRight: "35px" }}>
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
          style={{
            width: 42,
            height: 30,
            position: "fixed",
            marginTop: -7,
            marginLeft: -10,
          }}
          onClick={handleImageClick}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
