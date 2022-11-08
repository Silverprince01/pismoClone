import React from "react";
import Article from "./Article";
import people from "../images/friends.jpg";
import brasil from "../images/brasil.png";
import itau from "../images/itaupng.png";
import btg from "../images/btg.webp";
import fpay from "../images/fpay.webp";
import vid from "../images/vid.mp4"

import "./styles/Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="intro">
        <div className="background"></div>
        <img className="people" src={people} alt="" />
      </div>
      <div className="leftintro">
        <h2>Next-Gen Banking and Payments Technology</h2>
        <p>
          Build financial products at hyperscale with our all-in-one,
          cloud-native platform
        </p>
        <div className="special">
          <button className="specialist"> Talk to Our Specialist</button>
          <button className="brief">Download our Product Briefing</button>
        </div>
      </div>
      
      <div className="article">
        <div className="dash"></div>
        <div className="container">

        <p className="learn"> Learn more about Pismo</p>
        <video preload="auto" loop controls src={vid}></video>
        </div>
        <div className="far">
          <p className="reach"> A far-reaching platform for financial services</p>
          <p className="native">
            Pismo is the only cloud-native platform that comprises all the core
            functionalities for banking and payment processing
          </p>
          <button> Watch Videos</button>
          <div className="dash"></div>
        </div>

        <div className="fintech">
          <h3>Pismo Customers</h3>
          <p>
            We help banks, fintechs, and non-financial institutions offer
            best-in-class financial products globally
          </p>
          <div className="payment">
            <div>
              <img src={itau} alt="" />
              <p>
                Digital banking and cards for one of the world’s largest
                financial groups
              </p>
            </div>
            <div>
              <img src={btg} alt="" />
              <p>Full retail banking for Latam’s largest investment bank</p>
            </div>
            <div>
              <img src={fpay} alt="" />
              <p>Digital wallet and marketplace for a top retailer globally</p>
            </div>
            <div>
              <img src={brasil} alt="" />
              <p>
                One of the world’s largest financial market infrastructure
                groups
              </p>
            </div>
          </div>
        </div>
      <div className="dash"></div>
      <Article/>
      </div>
    </div>
  );
};

export default Main;
