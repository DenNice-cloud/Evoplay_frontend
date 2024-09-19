import React from "react";
import "./Services.scss";
import ArrowIcon from "../../images/Arrow.svg";

const Services = () => {
  const services = [
    {
      title: "Risk Assessment",
      description:
        "Proactively identify vulnerabilities and threats before they become problems.",
    },
    {
      title: "Incident Response",
      description:
        "Rapid and effective action to mitigate the effects of security breaches.",
    },
    {
      title: "Compliance Solutions",
      description:
        "Ensure your business meets all regulatory and compliance requirements for cybersecurity.",
    },
  ];

  return (
    <div className="services" id="services" >
      <div className="services__title">
        Our Comprehensive Range of Cybersecurity Services
      </div>

      <div className="services__description">
        From audits to full-scale security management, our services cover all
        aspects of cyber protection to keep your data safe and your business
        secure
      </div>

      <div className="services--block">
        {services.map((service) => (
          <div
            key={service.title}
            className="block"
          >
            <div className="services--block__bg"></div>
            <div className="services--block__title">{service.title}</div>
            <div className="services--block__description">
              {service.description}
            </div>

            <div className="services--block__button">
              <p className="services--block__button-name">Learn More</p>
              <img
                src={ArrowIcon}
                alt="Arrow Icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
