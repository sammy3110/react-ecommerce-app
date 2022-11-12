import React from "react";
import "./css/product-item.css";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

const ProductItem = () => {
  return (
    <div className="product-item-container">
      <div className="product-item-image">
        <img src="images/PNG/shoe2.1.png" alt="nike-shoe-1" />
        <AiOutlineHeart/>
      </div>
      <div className="product-item-info">
        <div className="info-rating">
          <AiFillStar size={20} color="yellow" />
          <p>(4.5)</p>
        </div>
        <h3>Nike Air Jordan-100</h3>
        <div className="info-price">
            <h2>$20.20</h2>
            <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
