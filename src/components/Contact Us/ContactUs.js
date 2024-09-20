import React from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  const variants = ["E-books", "Webinars", "Blog Articles"];

  return (
    <div className="contact-us" id="contact" >
      <div className="contact-us--info">
        <div className="contact-us--info--block">
          <h1 className="contact-us--info--block__title">
            Explore Our Rich Library of Cybersecurity Resources
          </h1>

          <div className="contact-us--info--block__description">
            Enhance your knowledge with our curated content featuring best
            practices, case studies, and the latest industry insights
          </div>
        </div>

        <div className="contact-us--info--blocks">
          {variants.map((variant) => (
            <div className="contact-us--info--blocks__variants">
              <h2 className="contact-us--info--blocks__variants__detail">
                {variant}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-us--form">
        <div className="contact-us--form__inputs">
          <h1 className="contact-us--form__title">
            Connect With Our Cybersecurity Experts Today
          </h1>

          <p className="contact-us--form__description">
            Ready to protect your business? Get in touch with us to discuss your
            cybersecurity needs and discover how our tailored solutions can
            bolster your defenses
          </p>

          <div className="contact-us--form__main">
            <form>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
              />

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message"
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-us--form__bg"></div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
