import React from "react";
import Slider from "react-slick";
import eduardo from "../images/Eduardo.webp";
import itau from "../images/itauTrans.png";
import adolfo from "../images/adolfo.webp";
import btg from "../images/btgash.webp";
import "./styles/Slides.css";

const Slides = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const ideas = [
    {
      id: 1,
      img: eduardo,
      text: "Pismo offers a trustworthy service. We never have to worry about  outages or delays. The platform's reliability allows us to scale upour services confidently, and its flexibility enables us to quicklybuild whatever we need to offer innovative features to ourcustomers. Furthermore, we receive a rich stream of data from it,which we utilise to learn about our customers and serve them better.",
      nameF: "Eduardo Del Guerra Prota",
      role: "CEO ofN26 Brasil",
    },
    {
      id: 2,
      img: itau,
      text: "We operate in a highly competitive market for digital accounts and payments. The partnership with Pismo enables us to be agile,innovative, digital, scalable, and resilient. With a good capacity for continuous evolution and mastery of business and cutting-edge technology, Pismo contributes enormously to our strategic objectives.",
      nameF: "Iti Itau",
      role: "CIO(Chief Information Officer)",
    },
    {
      id: 3,
      img: adolfo,
      text: "Pismo offers a scalable cloud-native platform that is totally aligned with our business. We are building together a digital wallet from scratch in a fast and reliable way. We consider Pismo more than a solution provider; they are a partner for us.",
      nameF: "Adolfo Pittaluga Hahn",
      role: "CEO at FPay",
    },
    {
      id: 4,
      img: btg,
      text: "As BTG Pactual decided to jump into the retail banking business, we looked for modern and flexible solutions, cutting-edge technology, fast responses, and a provider with a genuine partnership spirit. Our purpose is to bring new solutions to innovate and disrupt the traditional and static banking sector, understanding and anticipating customer's needs. Pismo was chosen and is corresponding as the ideal partner to achieve these challenging requirements.",
      nameF: "BTG Pactual",
      role: "Head of Consumer Banking and Associate Partners",
    },
  ];
  return (
    <Slider {...settings}>
      {ideas.map((idea) => {
        return (
          <div className="slideContainer">
            <div className="container">
              <img src={idea.img} alt="ideaimg" />
              <div className="textSlides">
                <p> {idea.text}</p>
                <div className="lowTextSlides">
                  <p className="bold">{idea.nameF}</p>
                  <p>{idea.role}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Slides;
