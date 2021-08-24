import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="parent">
      <div className="child">
        <h1 className="home-head">I'm Aly Abd-Elhady</h1>
        <p className="home-p">
          i'm a (Your City) based{" "}
          <span className="p-span">(Your Occupation Here).</span> Here will be
          your description. Use this to describe what you do or whatever you
          feel best describes your self to apotential employer.
        </p>
      </div>
      <div className="media-icon">
        <Link to="/" className="media-link">
          <i class="fab fa-facebook-f"></i>
        </Link>
        <Link to="/" className="media-link">
          <i class="fab fa-twitter"></i>
        </Link>
        <Link
          to="/"
          className="
          media-link"
        >
          <i class="fab fa-instagram"></i>
        </Link>
        <Link
          to="/"
          className="
          media-link"
        >
          <i class="fab fa-google-plus-g"></i>
        </Link>
        <Link
          to="/"
          className="
          media-link"
        >
          <i class="fab fa-skype"></i>
        </Link>
      </div>
    </div>
  );
}

export default Home;
