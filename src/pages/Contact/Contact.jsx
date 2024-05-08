import React, { Fragment, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Tooltip as MyLocationIs } from "react-tooltip";


import emailjs from "@emailjs/browser";

import MyLocation from "../../Components/Maps/MyLocation";

import "./Contact.css";

const Contact = () => {
  const [t, i18n] = useTranslation("global");
  const form = useRef();

  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_NUMBER}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY_EMAILJS}`
      )
      .then(
        (response) => {
          console.log(response);
          alert(t("contact.alert"));
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <Fragment>
      <section id="contact">
        <h4 className="contactTitle">{t("contact.title")}</h4>
        <div className="located">
          {/* <strong>
                  <p>I´m currently located at</p>
                </strong> */}
          <div id="">
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
                  // onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'})"
                  href="tel:+16729747575"
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
                // href="https://wa.me/16729747575?text=Hey,%20are%20you%20available%20for%20an%20interview%20?"
                  href={`https://wa.me/16729747575?text=${t("contact.whastsAppText")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
              </li>
              <li className="liContact">
                <a
                  href="#"
                  onClick={() =>
                    (window.location = "mailto:oscarmoreno80@gmail.com")
                  }
                >
                  <span></span>
                </a>
              </li>
              {/* <li className="liContact">
                <a
                  href="https://www.facebook.com/oscar.moreno.127201/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="contact-box">
          {/* <div className="contact-form-wrapper ">
            <form ref={form} onSubmit={enviarEmail}>
              <div className="form-item">
                <input
                  className="senderInput"
                  type="text"
                  name="sender"
                  required
                />
                <label className="label">Name:</label>
              </div>
              <div className="form-item">
                <input
                  className="senderInput"
                  type="text"
                  name="email"
                  required
                />
                <label className="label">Email:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required></textarea>
                <label className="label">Message:</label>
              </div>

              <button className="submit-btn ">
             
                <div className="btn">
                  <span>Message Sent!</span>

                  <i className="ico"></i>
                </div>
              </button>
            </form>
          </div> */}
          <div className="contact-form-wrapper conctact-card">
            <span className="subTitleContact">{t("contact.drop_message")}</span>
            <form className="form" ref={form} onSubmit={enviarEmail}>
              <div className="group">
                <input placeholder="" type="text" name="sender" required />
                <label htmlFor="name">{t("contact.your_name")}</label>
              </div>
              <div className="group">
                <input
                  placeholder=""
                  type="email"
                  id="email"
                  name="email"
                  required=""
                />
                <label htmlFor="email">{t("contact.your_email")}</label>
              </div>
              <div className="group">
                <textarea
                  placeholder=""
                  id="message"
                  name="message"
                  rows="5"
                  required=""
                ></textarea>
                <label htmlFor="message">{t("contact.your_message")}</label>
              </div>
              {/* <button type="submit">Submit</button> */}
              <button className="submit-btn ">
                <div className="btn">
                  <span className="ml-2"> {t("contact.send_message")}</span>

                  <i className="ico"></i>
                </div>
              </button>
            </form>
          </div>

          <div className="contact-map ">
            <div className="map">
              <MyLocation />
              <span className="text-living"
              
              //  data-tooltip-content={`${t("myProjects.websiteLink")}`}
              >
                <img
                 id="myLocationIs"
                 data-tooltip-content={t("contact.iLiveHere")}
                 data-tooltip-variant="light"
                  className="myLocIcon arrow-down  "
                  src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/mylocationbgtrans.png?alt=media&token=f7b105af-a117-448e-8686-1d392b8b124c"
                  alt="my location"
                />
              </span>
              <MyLocationIs anchorId="myLocationIs"  />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
