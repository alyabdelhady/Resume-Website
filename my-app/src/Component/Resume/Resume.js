import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="res-container">
      <h1 className="part-1">SKILLS</h1>
      <div className="part-2">
        <p className="p-sec">
          Here you can create a short write u p of your skills to show off to
          employers
        </p>
        <div>
          <p className="p-types">GIT</p>
          <div className="skills-container">
            <div className="skill git"></div>
          </div>
        </div>
        <div>
          <p className="p-types">ILLUSTRATOR</p>
          <div className="skills-container">
            <div className="skill illustrator"></div>
          </div>
        </div>
        <div>
          <p className="p-types">REACTJS</p>
          <div className="skills-container">
            <div className="skill reactjs"></div>
          </div>
        </div>
        <div>
          <p className="p-types">CSS</p>
          <div className="skills-container">
            <div className="skill css"></div>
          </div>
        </div>
        <div>
          <p className="p-types">HTML5</p>
          <div className="skills-container">
            <div className="skill html"></div>
          </div>
        </div>
        <div>
          <p className="p-types">VUEJS</p>
          <div className="skills-container">
            <div className="skill vuejs"></div>
          </div>
        </div>
        <div>
          <p className="p-types">MONGODB</p>
          <div className="skills-container">
            <div className="skill mongodb"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
