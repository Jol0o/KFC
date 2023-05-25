import React from "react";
import Logo from "../images/footer.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-logo">
          <img src={Logo} />
        </div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">About </a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <Link to="/signUp" className="btn">
          SIGN UP
        </Link>
      </div>
      <div className="contact">
        <p>TERM AND CONDITIONS</p>
        <p>COPYRIGHT BY KFC ALL RESERVED 2022</p>
        <ul>
          <li>
            <a href="">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
