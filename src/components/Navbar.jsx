import React from "react";
import "./css/navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { PrimaryButton } from "./styled-components/PrimaryButton";

const Navbar = () => {
  return (
    <div className="navbar-container container">
      <img src="images/nike_logo.png" alt="nike-logo" />
      <nav>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Products">Products</a>
          </li>
          <li>
            <a href="#Testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#Shop">Shop</a>
          </li>
        </ul>
      </nav>
      <div className="navbar-side">
        <div>
          <BiSearch size={25} className="icon" />
          <MdOutlineShoppingCart size={25} className="icon" />
        </div>
        <PrimaryButton className="primary-button">
          <p>Contact Us</p>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Navbar;
