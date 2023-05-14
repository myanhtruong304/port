import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactCard from "./card/Contact-card";
import ImageCard from "./card/Image-card";
import TechStack from "./card/Tech-stacks";
import Experience from "./card/Experience";
import Projects from "./card/Project";

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <div
          className="card-container"
          style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}
        >
          <ContactCard />
          <ImageCard />
          <TechStack />
        </div>
        <div className="build">
          <div>What I builded</div>
        </div>
        <div className="card-container">
          <Projects />
        </div>
        <div className="build">
          <div>My Journey</div>
        </div>
        <div className="card-container">
          <Experience />
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
