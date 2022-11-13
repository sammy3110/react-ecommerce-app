import React from "react";
import "./css/testimonials.css";
import { Heading } from "./styled-components/Heading";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Testimonials = () => {
  const star = <AiFillStar size={18} color="#fd6452" />;

  return (
    <div className="testimonials-container container">
      <div className="testimonials-title">
        <Heading className="heading" maxWidth="8em" fontSize="3rem">
          What Our <span>Customers Says</span>
        </Heading>
        <div className="title-icons">
          <div className="icon">
            <BsArrowLeft size={20} />
          </div>
          <div className="icon">
            <BsArrowRight size={20} />
          </div>
        </div>
      </div>

      {/*  */}

      <div className="testimonials-wrapper">
        <div className="testimonials-box">
          <img src="images/profile2.jpg" alt="profile1" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            corporis assumenda tempora numquam aliquid aperiam perferendis
            libero ut vero, eaque eum exercitationem iste esse. Nesciunt
            doloribus suscipit perferendis quasi ut!
          </p>
          <div className="stars-wrapper">
            {star}
            {star}
            {star}
            {star}
            <AiOutlineStar size={18} />
          </div>
          <h3>Remington</h3>
        </div>
        <div className="testimonials-box">
          <img src="images/profile1.jpg" alt="profile1" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            corporis assumenda tempora numquam aliquid aperiam perferendis
            libero ut vero, eaque eum exercitationem iste esse. Nesciunt
            doloribus suscipit perferendis quasi ut!
          </p>
          <div className="stars-wrapper">
            {star}
            {star}
            {star}
            {star}
            <AiOutlineStar size={18} />
          </div>
          <h3>Thompson Zarki</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
