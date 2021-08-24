import React from "react";

import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="test-container">
      <div className="test-part1">
        <i class="fas fa-quote-left"></i>
        <div>
          <p className="p-test">
            Here you should write some nice things that someone has said about
            you. No lies though,employers can tell when you are lying.
          </p>
          <h3 className="h-test">--Aly Abdelhady</h3>
          <p className="p-test">
            That Aly Abdelhady must be one of the most brilliant developers i've
            ever met! It is amazing that np body has hired him yet. Hey you, you
            should hire this guy,he may be fresh out university and have zero on
            the job experience but Iam confident that he will be one of you best
            developers in no time!
          </p>
          <h3 className="h-test">--Marah salameh...impersonator</h3>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
