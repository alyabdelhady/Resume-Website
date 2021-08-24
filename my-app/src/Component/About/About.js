import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="child-part1">
        <div className="part1">
          <div className="sec1">
            <img className="about-img" src="IMG.JPG" alt="" />
          </div>
          <div className="sec2">
            <h1 className="h-sec2">About Me</h1>
            <p className="p-sec2">
              Use this bio section as your wat of describing yourself and saying
              what you do, what technologies you like to use or feel most
              comfortable with, describing your personally, or whatever else you
              feel like throwing in.
            </p>
          </div>
        </div>
        <div className="part2">
          <div className="sec3">
            <h1 className="h-sec3"> Contact Details</h1>
            <p className="p-sec3">
              Aly Abd-Elhady (Your Street) (Your City) (Your State),(Your
              Zip/Postal Code) 555-555-555 aly.abdelhady2@gmail.com
            </p>
          </div>
          <div className="sec4">
            <a href="/" className="download">
              <i class="fas fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="child-part2">
        <div className="part3">
          <h3 className="h-sec5"> EDUCATION </h3>
          <div className="sec6">
            <h1 className="h-sec6"> University? </h1>
            <p className="p-sec6">
              Modern Academy -Bachelor's degree in Mechanical Engineering - July
              2015 describe your experince at school what you learned, what
              useeful skills you have arequired etc.
            </p>
          </div>
        </div>
        <div className="part4">
          <h1 className="h-sec7"> School #1 Maybe College?</h1>
          <p className="p-sec7"> What did you study 101 - March 2015</p>
        </div>
      </div>
    </div>
  );
}

export default About;
