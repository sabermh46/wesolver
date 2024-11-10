import React from "react";
import InnerContactForm from "./InnerContactForm";
import InnerContactInfo from "./InnerContactInfo";

const InnerContactArea = () => {
  return (
    <section className="inner-contact-area">
      <div className="container">
        <div className="inner-contact-wrap">
          <div className="row">
            <div className="col-xl-9 col-lg-10">
              <div className="section-title title-style-two mb-50">
                <h2 className="title">
                  Have a <span>Cool Project?</span> Get in touch!
                </h2>
              </div>

              <div className="inner-contact-form-wrap">
                <InnerContactForm />
              </div>

              <div id="contact-map">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d141326.34090555785!2d90.33728806344861!3d23.780975728279113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1731268781029!5m2!1sen!2sbd"
                  allowFullScreen
                  loading="lazy"
                  title="myUniqueIframe1"
                />
              </div>

              <div className="inner-contact-info">
                <InnerContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerContactArea;
