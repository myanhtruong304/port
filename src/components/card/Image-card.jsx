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
    <div
      className="card border-dark align-items-center"
      style={{
        display: "inline-flex",
        backgroundColor: "#FFCCCC",
        margin: "10px 0px 10px 10px",
        width: "40%",
      }}
    >
      <img
        className="rounded-circle bg-dark d-flex align-items-center justify-content-center text-white"
        src="./image/avatar.jpeg"
        alt="..."
        style={{
          borderRadius: "50%",
          height: "var(--circle-size)",
          width: "var(--circle-size)",
          border: `1px solid black`,
          margin: "30px",
        }}
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
  );
}

export default ImageCard;
