import React from "react";
// import eduardo from "../images/Eduardo.webp";
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
      {/* <p>
        What <strong>customers say</strong> about our banking and payments
        platform
      </p>
      <div className="slideShow">
        <div className="slides eduardo">
          <img src={eduardo} alt="Eduardo" />
          <div className="eduardoComment">
            <p className="comment">
              Pismo offers a trustworthy service. We never have to worry about
              outages or delays. The platform's reliability allows us to scale
              up our services confidently, and its flexibility enables us to
              quickly build whatever we need to offer innovative features to our
              customers. Furthermore, we receive a rich stream of data from it,
              which we utilise to learn about our customers and serve them
              better.
            </p>
            <div>
              <p>Eduardo Del Guerra Prota</p>
              <p>CEO ofN26 Brasil</p>
            </div>
          </div>
        </div>
        <div className="slides itau">
          <img src={eduardo} alt="Eduardo" />
          <div className="itauComment">
            <p className="comment">
              We operate in a highly competitive market for digital accounts and
              payments. The partnership with Pismo enables us to be agile,
              innovative, digital, scalable, and resilient. With a good capacity
              for continuous evolution and mastery of business and cutting-edge
              technology, Pismo contributes enormously to our strategic
              objectives.
            </p>
            <div>
              <p>Iti Itau</p>
              <p>CIO(Chief Information Officer)</p>
            </div>
          </div>
        </div>
        <div className="slides eduardo">
          <img src={eduardo} alt="Eduardo" />
          <div className="eduardoComment">
            <p className="comment">
              Pismo offers a scalable cloud-native platform that is totally
              aligned with our business. We are building together a digital
              wallet from scratch in a fast and reliable way. We consider Pismo
              more than a solution provider; they are a partner for us.
            </p>
            <div>
              <p>Adolfo Pittaluga Hahn</p>
              <p>CEO at Fpay</p>
            </div>
          </div>
        </div>
        <div className="slides eduardo">
          <img src={eduardo} alt="Eduardo" />
          <div className="eduardoComment">
            <p className="comment">
              As BTG Pactual decided to jump into the retail banking business,
              we looked for modern and flexible solutions, cutting-edge
              technology, fast responses, and a provider with a genuine
              partnership spirit. Our purpose is to bring new solutions to
              innovate and disrupt the traditional and static banking sector,
              understanding and anticipating customers&#8217; needs. Pismo was
              chosen and is corresponding as the ideal partner to achieve these
              challenging requirements.
            </p>
            <div>
              <p>BTG Pactual</p>
              <p>Head of Consumer Banking and Associate Partners</p>
            </div>
          </div>
        </div>
      </div>
      <div className="circles">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div> */}
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
