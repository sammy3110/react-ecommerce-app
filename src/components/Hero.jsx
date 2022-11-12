import React from "react";
import "./css/hero.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Description } from "./styled-components/Description";
import { Heading } from "./styled-components/Heading";
import { PrimaryButton } from "./styled-components/PrimaryButton";
import { Glass } from "./styled-components/Glass";

const Hero = () => {
  const star = <AiFillStar size={20} color="yellow" />;

  return (
    <div className="hero-container container">
      <div className="hero-info">
        <div className="hero-info-top">
          <Heading fontSize="7rem" maxWidth="5em" className="heading">
            Summer Collections <span>2022</span>
          </Heading>
          <div className="hero-side">
            <Description maxWidth="25em">
              The styles of shoe available to consumers are endless and profit
              too
            </Description>
            <PrimaryButton className="primary-button">
              <p>Shop Now</p>
              <p>
                <BsArrowRightCircleFill />
              </p>
            </PrimaryButton>
            <div className="hero-info-bottom">
              <div className="hero-info-review">
                <div className="hero-info-review-top">
                  <h1>4.9</h1>
                  <p>|</p>
                  <div className="stars">
                    {star}
                    {star}
                    {star}
                    {star}
                    {star}
                  </div>
                </div>
                <div className="hero-info-review-bottom">
                  <p>120k Total Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- BANNER ---------------------- */}

      <div className="hero-banner">
        <div className="hero-nike">
          <img src="images/poster.png" alt="nike-shoe" />
          <h1>NIKE</h1>
        </div>
        <div className="hero-glass">
          <Glass>
            <h3>Get up to 30% off</h3>
            <p>You can get upto 30 percentage discount from here.</p>
          </Glass>
        </div>
      </div>
    </div>
  );
};

export default Hero;
