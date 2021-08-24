import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="fotter-icon">
        <Link to="/" className="fmedia-link">
          <i class="fab fa-facebook-f"></i>
        </Link>
        <Link to="/" className="fmedia-link">
          <i class="fab fa-twitter"></i>
        </Link>
        <Link
          to="/"
          className="
          fmedia-link"
        >
          <i class="fab fa-instagram"></i>
        </Link>
        <Link
          to="/"
          className="
          fmedia-link"
        >
          <i class="fab fa-google-plus-g"></i>
        </Link>
        <Link
          to="/"
          className="
          fmedia-link"
        >
          <i class="fab fa-skype"></i>
        </Link>
      </div>
      <p className="p-footer">
        Copy right 2021 Tim Baker <span className="f-point">.</span> Designed by{" "}
        <span className="f-name">Aly Abd-Elhady</span>
      </p>
    </div>
  );
}

export default Footer;
