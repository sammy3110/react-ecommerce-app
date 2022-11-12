import React from "react";
import "./css/about-us.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
// import { AiFillStar } from "react-icons/ai";
import { Description } from "./styled-components/Description";
import { Heading } from "./styled-components/Heading";
import { SubHeading } from "./styled-components/SubHeading";
import { PrimaryButton } from "./styled-components/PrimaryButton";
import { Glass } from "./styled-components/Glass";

const AboutUs = () => {
  return (
    <div className="about-us-container container">
      {/* ---------------------- BANNER ---------------------- */}

      <div className="about-us-banner">
        <div className="about-us-nike">
          <img src="images/PNG/shoe2.2.png" alt="nike-shoe" />
          <div className="about-us-background"></div>
        </div>
        <div className="about-us-glass">
          <Glass>
            <h3>Get up to 30% off</h3>
            <p>You can get upto 30 percentage discount from here.</p>
          </Glass>
        </div>
      </div>

      {/* ---------------------- INFO ---------------------- */}

      <div className="about-us-info">
        <div className="about-us-info-top">
          <SubHeading className="sub-heading">About Us</SubHeading>
          <Heading fontSize="4.5rem" maxWidth="10em" className="heading">
            We Provide <span>High</span> Quality Shoes
          </Heading>
        </div>
        <div className="about-us-side">
          <Description maxWidth="34em">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            iusto numquam nostrum nam rem reprehenderit ipsam nemo id libero. Ea
            quia doloremque.
          </Description>
          <Description maxWidth="34em">
            Dolorum earum quod voluptatibus natus explicabo a sunt eaque nisi
            similique.
          </Description>
          <PrimaryButton className="primary-button">
            <p>Explore More</p>
            <p>
              <BsArrowRightCircleFill />
            </p>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
