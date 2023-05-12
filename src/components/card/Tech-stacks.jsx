import React from "react";
function TechStack() {
  const tech = [
    "Golang",
    "Python",
    "Nodejs",
    "Blockchain",
    "MongoDB",
    "Postgres",
    "REST API",
    "Docker",
  ];
  return (
    <div className="card-container">
      <div className="card border-dark tech-card d-flex align-items-center">
        <div className="card-body">
          <h6 className="card-title">
            Hi, Anne here! 🙋‍♀️ I'm a software developer with expertise in
            front-end and back-end. Here you can find the technologies I'm
            using.
          </h6>
          <div className="d-flex align-items-center flex-wrap contact-group">
            {tech.map((techItem, index) => (
              <p
                key={index}
                className={`skills tech-item ${
                  index % 2 === 1 ? "odd" : "even"
                }`}
                style={{ marginRight: "8px", padding: "10px" }}
              >
                {techItem}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
