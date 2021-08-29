import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  function handlebut(e) {
    e.preventDefault();
  }
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="subscription-heading">
          Sign Up To Recieve Our Best Deals
        </p>
        <div className="input-grps">
          <form>
            <input
              type="email"
              name="email"
              className="footer-input"
              placeholder="Your Email"
            />
            <button className="btn btn_outline btn_large" onClick={handlebut}>
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links-container">
          <div className="links">
            <h2>About Us</h2>
            <Link to="/signup">How It Works?</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careeres</Link>
            <Link to="/">Terms Of Services</Link>
          </div>
          <div className="links">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-links-container">
          <div className="links">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="links">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-section">
        <div className="icons-container">
          <div className="footer-logo">
            <Link
              className="social-logo"
              to="/"
              onClick={() => window.scroll(0, 0)}
            >
              S R E E <i className="fas fa-dharmachakra"></i>
            </Link>
          </div>
          <small className="rights">M S K N &#9400; 2021 </small>
          <div className="social-icons">
            <Link
              className="facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="instagram"
              to="/"
              target="_blank"
              aria-label="InstaGram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="linkedin"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
