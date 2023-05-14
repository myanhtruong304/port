import React from "react";
import Marquee from "react-fast-marquee";

function Projects() {
  const projects = [
    {
      projectName: "Supreme Finance",
      link: "https://www.supremefinance.io/",
      image: "./image/HYPE.jpeg",
    },
    {
      projectName: "Carmin",
      link: "https://carmin.inc/",
      image: "./image/CARMIN.jpeg",
    },
    {
      projectName: "Funch",
      link: "https://www.funch.app/",
      image: "./image/FUNCH.jpeg",
    },
  ];
  return (
    <div className="card-container" style={{ width: "100%" }}>
      <div
        className="marquee-container"
        style={{
          width: "100%",
        }}
      >
        <Marquee pauseOnHover={true} speed={200}>
          {projects.map((p, index) => (
            <div style={{ marginLeft: "100px", marginRight: "100px" }}>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <img className="image-marquee" src={p.image} alt="..." />
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Projects;
