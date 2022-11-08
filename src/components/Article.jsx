import React, { useState, useEffect } from "react";

import cardissuing from "../images/cardissuing.webp";
import coreBank from "../images/coreBank.webp";
import digitalending from "../images/digitalending.webp";
import digitalwallet from "../images/digitalwallet.webp";
import coporateBank from "../images/coporateBank.webp";
import sellerManagement from "../images/sellerManagement.webp";
const Article = () => {
  const [time, setTime] = useState(0);
  const article = [
    {
      id: 1,
      img: cardissuing,
      head: "Card Issuing",
      explanation:
        "Take advantage of our fully featured platform for Visa, Mastercard, and private labels to issue credit, debit, and pre-paid cards. Issue plastic cards, virtual cards, and one-time cards for specific merchants and transactions",
    },
    {
      id: 2,
      img: coreBank,
      head: "Core Banking",
      explanation:
        "Create the best digital experiences and products regardless of whether you are building a new bank or dealing with legacy technology. Our platform offers you the freedom to innovate seamlessly",
    },
    {
      id: 3,
      img: digitalending,
      head: "Digital Lending",
      explanation:
        "Offer innovative loan products with scalability and a quick time to market. Leverage the Pismo platform for booking, disbursement, auto-repayment, product return handling, and much more.",
    },
    {
      id: 4,
      img: coporateBank,
      head: "Corporate Banking",
      explanation:
        "Create corporate demand deposit accounts (DDAs) with the Pismo platform. Manage complex operations and transactions between accounts in a multi-country, multi-region, and multi-branch structure.",
    },
    {
      id: 5,
      img: digitalwallet,
      head: "Digital Wallets",
      explanation:
        "Build a proprietary digital wallet to compete with the most iconic wallets in the market, like PayPal, Alipay, WePay, Venmo, FPay, or iti. Manage both sellers and buyers on any device or platform.",
    },
    {
      id: 6,
      img: sellerManagement,
      head: "Seller Management",
      explanation:
        "Provide your merchants with high-speed seamless transaction processing, reconciliation, and statements. Make payments when needed, finance receivables, and allow several types of charges, fees, and taxes.",
    },
  ];
  let randomText = [
    "US$ 109 B in transactions per year",
    "110 Billion API calls per year",
    "40 Million yearly new accounts",
  ];
  //   const timer = () => {}
  useEffect(() => {
    const tick = () => {
      setTime((i) => i + 1);
    };
    const id = setInterval(tick, 7000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="artContainer">
      <div className="art">
        {article.map((art, id) => {
          return (
            <div className="contain" key={id}>
              <img src={art.img} alt="img" />
              <div className="text">
                <p className="head">{art.head}</p>
                <p>{art.explanation}</p>
                <button className="learnMore">Learn More</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="scorecard">
        <div className="score">
          <p>Pismo scorecard</p>
        </div>
        <div className="time">
          <p> {randomText[time % randomText.length]}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
