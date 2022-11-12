import React from "react";
import "./css/product-item.css";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const ProductItem = ({ item }) => {
  const [fav, setFav] = useState(false);
  const addRemoveFav = () => {
    setFav((pre) => !pre);
  };
  return (
    <div className="product-item-container">
      <div className="product-item-image">
        <div className="item-image">
          <img src={"images/PNG/shoe" + item.id + ".1-300.png"} alt={"nike-shoe-" + item.id} />
        </div>
        <div onClick={addRemoveFav} className="item-icon">
          {fav ? (
            <AiFillHeart color="#f05e64" size={20} className="heart" />
          ) : (
            <AiOutlineHeart size={20} className="heart" />
          )}
        </div>
      </div>
      <div className="product-item-info">
        <div className="info-rating">
          <AiFillStar size={20} color="yellow" />
          <p>({item.rating})</p>
        </div>
        <h3>{item.title}</h3>
        <div className="info-price">
          <h2>{item.price}</h2>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
