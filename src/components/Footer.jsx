import React from "react";
import "./styles/Footer.css";
import pismoMoment from "../images/pismo-moments.webp";
import linkedin from "../images/social-linkedin.webp";
import instagram from "../images/social-instagram.webp";
import glassdoor from "../images/social-glassdoor.webp";
const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div className="left">
          <p className="work">
            <strong>Work</strong> with us
          </p>
          <p>
            We help our customers reimagine banking and payments to positively
            impact people’s lives. Join us: Pismo is hiring globally.
          </p>
          <button className="pismo"> Careers @ Pismo</button>
        </div>
        <div className="pictures">
          <img src={pismoMoment} alt="pismo good moment" />
        </div>
      </div>
      <div className="lowFoot">
        <div class="foot">
          <div>
            <p class="com">Platform</p>
            <br />
            <ul>
              <li>Card Issuing</li>
              <li>Core Banking</li>
              <li>Lending</li>
              <li>Corporate Banking</li>
              <li>Digital Wallets</li>
              <li>Seller Management</li>
            </ul>
          </div>
          <br />
          <div>
            <p class="com">Insights</p>
            <br />
            <ul>
              <li>Blog</li>
              <li>Knowledge</li>
              <li>Videos</li>
              <li>Events</li>
            </ul>
          </div>
          <br />
          <div>
            <p class="com">About Us</p>
            <br />
            <ul>
              <li>Pismo</li>
              <li>Investors</li>
              <li>Partners</li>
              <li>News</li>
              <li>News</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <br />
          <div>
            <p class="com">Careers</p>
            <br />
          </div>
          <div>
            <p class="com">Contact Us</p>
            <br />
          </div>
        </div>
      </div>
      <div className="lowerFoot">
        <div className="social">
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
          <img src={glassdoor} alt="glassdoor" />
        </div>
        <div className="privacy">
          <p>Pismo • All rights reserved © Read our privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
