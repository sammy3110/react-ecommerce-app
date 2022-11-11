import React from "react";
import "./css/popular-products.css";
import { Heading } from "./styled-components/Heading";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const PopularProducts = () => {
  return (
    <div className="popular-container container">
      <div className="popular-title">
        <Heading maxWidth="9em" fontSize="3rem">
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
    </div>
  );
};

export default PopularProducts;
