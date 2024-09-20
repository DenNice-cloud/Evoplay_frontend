import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us" >
      <div className="about-us--img-block"></div>

      <div className="about-us--block">
        <div className="about-us--block__title">
          Leading the Way in Cybersecurity Innovation
        </div>

        <div className="about-us--block__description">
          With decades of expertise and a relentless pursuit of excellence, we
          deliver security solutions designed to protect multinational
          corporations and small businesses alike
        </div>

        <div className="about-us--img-block__phone"></div>

        <div className="about-us--block__additional__description">
          At Secure Nexus/Guardian Tech, we understand the complexity of
          cybersecurity challenges that businesses face today. Our team of
          experts is committed to providing state-of-the-art solutions tailored
          to your specific needs, ensuring robust protection and peace of mind.
        </div>

        <button className="about-us--block__button">Read More</button>
      </div>
    </div>
  );
};

export default AboutUs;
