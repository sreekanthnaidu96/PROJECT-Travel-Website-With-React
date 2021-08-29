import React from "react";
import { Link } from "react-router-dom";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="main-container">
      <video src="./videos/main.mp4" autoPlay muted loop />
      <h1>Explore The World</h1>
      <p>What Are You Waiting For ?</p>
      <div className="main-buttons">
        <Link to="/Signup" className="btn-mobile">
          <button className="btn btn_outline btn_large">Get Started</button>
        </Link>
        <Link to="/signup" className="btn-mobile">
          <button className="btn btn_primary btn_large">
            Watch Trailer <i className="fab fa-youtube"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainSection;
