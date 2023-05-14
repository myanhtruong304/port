import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import "../../custom-css/style.css";

function Experience() {
  return (
    <div>
      {[
        {
          name: "Dwarves Foundation",
          position: "Backend Engineer",
          bgColor: "#e23d5e",
          imgSrc: "./image/Dwarves 1.png",
          tech: [
            "Golang 🔥",
            "Nodejs",
            "Web3",
            "Blockchain",
            "MongoDB",
            "Postgres",
            "REST API 🔥",
            "Docker",
            "Kubernetes",
          ],
          intro:
            "I was responsible for managing databases, developing APIs, resolving software defects, and deploying scalable systems. I also collaborated with front-end engineers and built a server to crawl transactions from various sources.",
          period: "2021-2023",
          image: ["./image/df/1.png", "./image/df/2.png", "./image/df/3.png"],
          url: "https://www.pod.town",
        },
        {
          name: "Treehouse Finance",
          position: "Backend Developer",
          bgColor: "#21d0c3",
          imgSrc: "./image/THF.jpeg",
          tech: [
            "Python 🔥",
            "Portfolio Analytics 🔥",
            "Data Visualization",
            "Blockchain",
            "MongoDB",
            "Defi",
          ],
          intro:
            "I builded and improved data products, troubleshooting database issues, and providing analysis-related support to teams. This role also requires analyzing high-traffic protocols for web3 data scoping and lead generation.",
          period: "2020-2021",
          image: [
            "./image/thf/1.png",
            "./image/thf/2.png",
            "./image/thf/3.png",
          ],
          url: "https://www.treehouse.finance",
        },
        {
          name: "CoinMarketcap",
          position: "Data Scientist",
          bgColor: "#276aff",
          imgSrc: "./image/CMC.png",
          tech: [
            "R",
            "Python 🔥",
            "Machine Learning 🔥",
            "Cryptocurrencies",
            "Data Visualization",
          ],
          intro:
            "Worked on CoinMarketCap's listings team to improve content quality. Skilled in analyzing high-quality projects, understanding tokenomics and risk metrics, and troubleshooting. Proficient in advanced cryptocurrency concepts and utilizing exchanges and DeFi platforms.",
          image: [
            "./image/cmc/1.png",
            "./image/cmc/2.png",
            "./image/cmc/3.png",
          ],
          period: "2018-2020",
          url: "https://coinmarketcap.com",
        },
      ].map((company, index) => (
        <div key={index} className="card-container">
          <a href={company.url} target="_blank" rel="noopener noreferrer">
            <div
              className="company"
              data-content={company.position}
              style={{
                backgroundColor: "#ffffff",
                margin: "0px 10px 10px",
                "--bg-color": company.bgColor,
                color: "black",
              }}
            >
              <img
                src={company.imgSrc}
                alt="..."
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
              {company.name}
            </div>
          </a>
          <div
            id={`carouselExampleAutoplaying-${index}`}
            className="carousel slide work-image"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={company.image[0]}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={company.image[1]}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={company.image[2]}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
              style={{ color: "black" }}
            >
              Next
            </button>
          </div>
          <div className="experience card border-dark">
            <h6>{company.period}</h6>
            <h6 className="card-title">{company.intro}</h6>
            <div className="d-flex  align-items-center flex-wrap contact-group">
              {company.tech.map((techItem, index) => (
                <p
                  key={index}
                  className={`skills tech-item ${
                    index % 2 === 1 ? "odd" : "even"
                  }`}
                  style={{ marginRight: "8px", padding: "5px" }}
                >
                  {techItem}{" "}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
