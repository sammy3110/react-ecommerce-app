import React from "react";
import "./css/footer.css";
import { SiNike } from "react-icons/si";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Heading } from "./styled-components/Heading";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-newsletter">
        <Heading className="heading" fontSize="3rem" maxWidth="10em">
          Sign up For <span>Updates</span> &amp; Newsletter
        </Heading>
        <div className="newsletter-input">
          <input type="email" placeholder="Type Your Email" />
          <button>Subscribe Now</button>
        </div>
      </div>

      {/* INFO */}

      <div className="footer-info">
        <div className="footer-info-links">
          <div className="footer-social">
            <div>
              <SiNike size={70} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <div className="social-wrapper">
                <div className="icon">
                  <AiFillFacebook size={27} />
                </div>
                <div className="icon">
                  <AiFillInstagram size={27} />
                </div>
                <div className="icon">
                  <AiFillTwitterSquare size={27} />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-list">
            <div>
              <h4>Find products</h4>
              <ul>
                <li>Brownze Arnold</li>
                <li>Chronograph Blue</li>
                <li>Smart Phones</li>
                <li>Automatic Watch</li>
                <li>Hair Straightners</li>
              </ul>
            </div>
          </div>
          <div className="footer-list">
            <div>
              <h4>Get help</h4>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Return Policy</li>
                <li>Privacy Policy</li>
                <li>Payment Policy</li>
              </ul>
            </div>
          </div>
          <div className="footer-list">
            <div>
              <h4>About us</h4>
              <ul>
                <li>News</li>
                <li>Service</li>
                <li>Our Policy</li>
                <li>Customer Care</li>
                <li>FAQ's</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-info-copyright">
          <p>&copy; 2022 Nike ~ by <span>Shyam.</span> All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
