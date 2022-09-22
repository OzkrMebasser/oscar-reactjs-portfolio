import React, { Fragment } from "react";

import {GrSend} from "react-icons/gr";
import MyMap from "./MyMap";
//https://mailtrap.io/blog/react-contact-form/#Create-the-contact-form TO SEE EXAMPLE
//https://mdbootstrap.com/docs/b4/jquery/forms/contact/
//https://w3collective.com/react-contact-form/

import "../Contact/Contact.css";

const Contact = () => {
  return (
    <Fragment>
      
      <section id="contact">
      <h4 className="contactTitle">LET´S GET IN TOUCH!</h4>
        <div class="contact-box">
        
          <div class="contact-form-wrapper">
            <form>
              <div class="form-item">
                <input type="text" name="sender" required />
                <label>Name:</label>
              </div>
              <div class="form-item">
                <input type="text" name="email" required />
                <label>Email:</label>
              </div>
              <div class="form-item">
                <textarea class="" name="message" required></textarea>
                <label>Message:</label>
              </div>
              <button class="submit-btn">SEND <GrSend className="sizer"/></button>
            </form>
          </div>

          <div class="contact-links">
           
          
            <div className="map">
            <div className="located">
              <strong><p>I´m currently located at</p></strong>
              <div id="social-icons">
              <ul className="ulContact">
                <li className="liContact">
                  <a
                    href="https://www.linkedin.com/in/oscar-antonio-moreno-martinez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
                <li className="liContact">
                  <a
                    href="https://github.com/OzkrMebasser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
                <li className="liContact">
                  <a
                    href="https://t.me/OscarMorenoDev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
                <li className="liContact">
                  <a
                    href="https://wa.me/19841681509?text=Hey,%20are%20you%20available%20for%20an%20interview%20?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
                <li className="liContact">
                  <a
                    href="javascript:void(0)"
                    onClick={() =>
                      (window.location = "mailto:oscarmoreno80@gmail.com")
                    }
                  >
                    <span></span>
                  </a>
                </li>
                <li className="liContact">
                  <a
                    href="https://www.facebook.com/oscar.moreno.127201/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
            </div>
            <MyMap/>
            
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
