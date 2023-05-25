import React from "react";
import image from "../images/main-logo.png";
import { Link } from "react-router-dom";

export const Navbar = ({ cartItems }) => {
  return (
    <div className="nav">
      <div className="container">
        <a href="#">
          <img src={image} />
        </a>
        <div className="nav-btn">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#category">Categories</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#about">About </a>
            </li>
            <li>
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
          <button className="btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <Link to="./cart" className="btn">
            <i className="fa fa-cart-shopping"></i>
            {cartItems.length >= 1 && <p>{cartItems.length}</p>}
          </Link>
        </div>
      </div>
    </div>
  );
};
