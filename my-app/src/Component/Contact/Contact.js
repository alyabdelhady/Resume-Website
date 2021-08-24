import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-part1">
        <i class="fas fa-envelope"></i>
        <p className="p-contact1">
          Here is where you should write your massage to readers to have them
          get in contact with you
        </p>
      </div>
      <div className="contact-part2">
        <div className="contact-header">
          <div className="contact-parts">
            <div className="test66">
              <h1 className="h-contact">
                Name <span className="star">*</span>
              </h1>
            </div>
            <input className="text" type="text" />
          </div>
          <div className="contact-parts">
            <div className="test66">
              <h1 className="h-contact">
                Email <span className="star">*</span>
              </h1>
            </div>
            <input className="text" type="text" />
          </div>
          <div className="contact-parts">
            <div className="test66">
              <h1 className="h-contact">
                Subject <span className="star">*</span>
              </h1>
            </div>
            <input className="text" type="text" />
          </div>
          <div className="contact-parts">
            <div className="test66">
              <h1 className="h-contact hh-contact">
                Massage <span className="star">*</span>
              </h1>
            </div>
            <textarea
              className="text-area"
              name="massage"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div className="submit-cont">
              <input className="submit" type="submit" value="SUBMIT" />
            </div>
          </div>
        </div>
        <div className="contact3">
          <h3 className="h3-contact">Address and Phone</h3>
          <p className="p-contact3">
            Aly Abd-Elhady (Your Street) (Your City) (Your State),(Your
            Zip/Postal Code) 555-555-555 -- aly.abdelhady2@gmail.com
          </p>
          <h3 className="h3-contact">Latest Tweets</h3>
          <p className="p-contact3">
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum
            <a className="contact-link"> http://t.co/CGIrdxIlI3 </a> 2 Days Ago
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et
            <a className="contact-link"> quasihttp://t.co/CGIrdxIlI3 </a> 3 Days
            Ago
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
