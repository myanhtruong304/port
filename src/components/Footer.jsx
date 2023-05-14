import React from "react";

function Footer() {
  return (
    <footer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Anne Ng. &copy;{new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
