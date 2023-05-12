import React from "react";
function ImageCard() {
  const techStack = [
    { name: "Python", icon: "fa-brands fa-python fa-2xl", color: "#000000" },
    { name: "Golang", icon: "fa-brands fa-golang fa-2xl", color: "#000000" },
    {
      name: "Square JS",
      icon: "fa-brands fa-square-js fa-2xl",
      color: "#000000",
    },
  ];

  return (
    <div className="card-container">
      <div className="card border-dark image-card align-items-center">
        <img
          className="avatar border-img"
          src="./image/avatar.jpeg"
          alt="..."
        />
        <div className="tech-stack ">
          {techStack.map((tech) => (
            <i
              key={tech.name}
              className={tech.icon}
              style={{
                color: tech.color,
                marginRight: "10px",
                marginLeft: "10px",
              }}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
