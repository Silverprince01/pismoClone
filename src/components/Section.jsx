import React from "react";
import Slides from "./Slider";
import interact from "../images/interact.webp";
import moneyUsa from "../images/moneyUSA.webp";
import product from "../images/products.webp";
import forbes from "../images/forbes.webp";
import "./styles/Section.css";
const Section = () => {
  // const [index, setIndex] = useState(1);
  const ideas = [
    {
      id: 1,
      img: forbes,
      header: "Company News",
      text: "Forbes: Pismo is one of the 10 most innovative companies in Brazil",
    },
    {
      id: 2,
      img: product,
      header: "Product",
      text: "How Pismo uses micro frontends to power next-generation CRM",
    },
    {
      id: 3,
      img: interact,
      header: "Pismo's People",
      text: "“We measure to learn”: Pismo’s Ricardo Abdalla talks metrics at Interact 2022",
    },
    {
      id: 4,
      img: moneyUsa,
      header: "Company News",
      text: "Pismo at Money20/20 USA: Insights, connections, and caipirinhas",
    },
  ];

  return (
    <div className="section">
      <div className="dash"></div>
      <p className="custom">
        What <strong>customers say</strong> about our banking and payments
        platform
      </p>
      <Slides />
      <div className="circles">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="lowerSection">
        <p className="lowerText">
          News and <strong>Ideas </strong>
        </p>
        <div className="container">
          {ideas.map((idea) => {
            return (
              <div className="imgContainer">
                <img src={idea.img} alt="ideaimg" />
                <div className="text">
                  <p> {idea.header}</p>
                </div>
                <p className="lowerText">{idea.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section;
