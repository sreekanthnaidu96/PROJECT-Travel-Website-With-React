import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [HamClick, setHamClick] = useState(false);
  const [ShowButton, setShowButton] = useState(true);

  function ButtonShow() {
    if (window.innerWidth <= 960) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }

  window.addEventListener("resize", ButtonShow);
  useEffect(() => {
    ButtonShow();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => setHamClick(false)}
          >
            S R E E <i className="fas fa-dharmachakra"></i>
          </Link>
          <div className="menu-icon">
            <i
              onClick={() => setHamClick(!HamClick)}
              className={HamClick ? "fas fa-times-circle" : "fas fa-database"}
            ></i>
          </div>
          <ul className={HamClick ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/"
                onClick={() => setHamClick(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/Tours"
                onClick={() => setHamClick(false)}
              >
                Tours
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/services"
                onClick={() => setHamClick(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links-mobile"
                to="/signup"
                onClick={() => setHamClick(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {ShowButton && (
            <Link to="/signup" className="btn-mobile">
              <button className="btn btn_outline btn_medium">Sign Up</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
