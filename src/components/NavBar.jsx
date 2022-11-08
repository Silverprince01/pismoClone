import React from "react";
import logo from "../images/pismo-logo.webp";
const Navbar = ({ handleToggle, navBar }) => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul className={navBar ? "active" : ""}>
        <li>
          Platform
          <ul className="lmao">
            <li>Card Issuing</li>
            <li>Card Banking</li>
            <li>Corporate Banking</li>
            <li>Digital Lending</li>
            <li>Digital Wallet</li>
            <li>Seller Management</li>
          </ul>
        </li>
        <li>Developers</li>
        <li>
          Insights
          <ul className="lmao">
            <li>Blog</li>
            <li>Knowledge</li>
            <li>Videos</li>
            <li>Events</li>
          </ul>
        </li>
        <li>
          About Us
          <ul className="lmao">
            <li>Pismos</li>
            <li>Investors</li>
            <li>Partners</li>
            <li>News</li>
            <li>Newsletter</li>
          </ul>
        </li>
        <li>Careers</li>
        <li>
          <button> Contact Us</button>
        </li>
        <li>EN</li>
      </ul>
      <div
        onClick={handleToggle}
        className={navBar ? "hamburger active" : "hamburger"}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
