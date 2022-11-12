import React from "react";
import "./css/popular-products.css";
import { Heading } from "./styled-components/Heading";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ProductItem from "./ProductItem";

const PopularProducts = () => {
  const popular_products = [
    {
      id: '1',
      title: 'Nike Air Jordan-100',
      price: '$20.22',
      rating: '4.5'
    },
    {
      id: '2',
      title: 'Nike Air Jordan-100',
      price: '$22.66',
      rating: '4.2'
    },
    {
      id: '3',
      title: 'Nike Air Jordan-100',
      price: '$27.10',
      rating: '4.8'
    },
    {
      id: '4',
      title: 'Nike Air Jordan-100',
      price: '$19.40',
      rating: '3.9'
    },
  ]
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
        {popular_products.map(item => <div className="item-container"> <ProductItem key={item.id} item={item}/> </div> )}
      </div>
    </div>
  );
};

export default PopularProducts;
