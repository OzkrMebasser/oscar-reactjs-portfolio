import React, { Fragment, useRef } from "react";
import { useTranslation } from "react-i18next";


import emailjs from '@emailjs/browser';

import MyLocation from "./MyLocation";

import "../Contact/Contact.css";

const Contact = () => {
  const [t, i18n] = useTranslation("global");
  const form = useRef();

  function enviarEmail(e) {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`,`${process.env.REACT_APP_TEMPLATE_NUMBER}`,form.current,`${process.env.REACT_APP_PUBLIC_KEY_EMAILJS}`)
    .then((response) => {
      console.log(response)
      alert(t("contact.alert"))
      console.log('SUCCESS!', response.status, response.text);
   }, (error) => {
      console.log('FAILED...', error);
   });
  };




  

  return (
    <Fragment>
      <section id="contact">
        <h4 className="contactTitle">{t("contact.title")}</h4>
        <div className="contact-box">
          <div className="contact-form-wrapper yellow">
            <form ref={form}  onSubmit={enviarEmail}>
              <div className="form-item">
                <input className="senderInput" type="text" name="sender" required />
                <label className="label">Name:</label>
              </div>
              <div className="form-item">
                <input  className="senderInput" type="text" name="email" required />
                <label className="label" >Email:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required></textarea>
                <label className="label">Message:</label>
              </div>

              <button className="submit-btn ">
                {/* <span className="iconColor " title="Send Message">
                  <i class="fas fa-paper-plane"></i>
                </span> */}
                <div className="btn">
                  <span>Message Sent!</span>

                 <i className="ico"></i>
                </div>
              </button>
            </form>
          </div>


          <div className="contact-links yellow">
            <div className="map">
              <div className="located">
                <strong>
                  <p>I´m currently located at</p>
                </strong>
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
                      onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'})"
                        href="tel:+5219841681509"
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
              <MyLocation />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
