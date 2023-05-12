import * as React from "react";

function Header() {
  return (
    <header className="gradient-background">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" id="brand-info" href="http://localhost:3000">
            <i class="fa-solid fa-otter" style={{ color: "#000000" }}></i>
            <p className="brand-name">annee</p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center menu"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="http://localhost:3000"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end login"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a
                  class="nav-link sign-up-link"
                  href="https://drive.google.com/file/d/1jdcJBlJAm9dqTIrsmiF-fQ4MTTgSjTSB/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
