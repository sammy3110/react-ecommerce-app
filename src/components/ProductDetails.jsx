import React from "react";
import "./css/product-details.css";
import { Description } from "./styled-components/Description";
import { Heading } from "./styled-components/Heading";
import { SubHeading } from "./styled-components/SubHeading";

import { MdOutlineShoppingCart } from "react-icons/md";

const ProductDetails = () => {
  return (
    <div className="product-details-container container">
      <div className="product-details-info">
        <SubHeading className="sub-heading">Product Details</SubHeading>
        <Heading className="heading" maxWidth="10em" fontSize="4.5rem">
          Get to Know Our Feature <span>Product</span>
        </Heading>
        <Description className="description" maxWidth="35em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          accusamus corrupti et saepe dignissimos assumenda.
        </Description>
        <div className="info-badge-wrapper">
          <div className="badge-icon">
            <img src="images/badge.png" alt="badge" />
          </div>
          <div className="badge-info">
            <h4>Best Quality Shoes</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
              corporis!
            </p>
          </div>
        </div>
        <div className="info-badge-wrapper">
          <div className="badge-icon">
            <img src="images/dollar.png" alt="badge" />
          </div>
          <div className="badge-info">
            <h4>Best Giving Pricing</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
              corporis!
            </p>
          </div>
        </div>
      </div>

      {/* Image */}

      <div className="product-details-card">
        <div className="card-wrapper">
          <div className="card-image">
            <img src="images/PNG/shoe3.4.png" alt="nike-shoes" />
          </div>
          <div className="card-info">
            <h1>Nike Series 7</h1>
            <div className="card-info-price">
              <h3>
                <span>$50.20</span> $30.20
              </h3>
              <div className="icon">
                <MdOutlineShoppingCart size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
