import React from "react";
import "./css/popular-products.css";
import { Heading } from "./styled-components/Heading";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ProductItem from "./ProductItem";

const PopularProducts = () => {
  return (
    <div className="popular-container container">
      <div className="popular-title">
        <Heading maxWidth="9em" fontSize="2.8rem">
          Popular <span>Products</span>
        </Heading>
        <div className="popular-title-arrows">
          <div className="arrow-icon">
            <BsArrowLeft size={20}/>
          </div>
          <div className="arrow-icon">
            <BsArrowRight size={20}/>
          </div>
        </div>
      </div>

      <div className="product-list">
        <ProductItem/>
      </div>
    </div>
  );
};

export default PopularProducts;
