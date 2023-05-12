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
    <div className="card-container">
      <Marquee>
        <div className="marquee-items ">
          {projects.map((p) => (
            <div>
              {p.projectName}
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <img className="image-marquee" src={p.image} />
              </a>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Projects;
