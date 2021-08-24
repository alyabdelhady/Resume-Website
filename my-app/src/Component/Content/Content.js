import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Works from "../Works/Works";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

function Content() {
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Works />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Content;
