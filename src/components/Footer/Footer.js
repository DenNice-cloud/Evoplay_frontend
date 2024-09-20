import React from "react";
import "./Footer.scss";
import phoneIcon from "../../images/icons/phone.svg";
import locationIcon from "../../images/icons/location.svg";
import messageIcon from "../../images/icons/message.svg";

const Footer = () => {
  const footerValues = [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#about-us" },
        { label: "Services", href: "#services" },
        { label: "Resources", href: "#resources" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Compliance", href: "#" },
      ],
    },
    {
      title: "Company Information",
      info: [
        { label: "+1-800-SECURE", href: "tel:+1800SECURE", icon: phoneIcon },
        {
          label: "contact@guardiantech.com",
          href: "mailto:contact@guardiantech.com",
          icon: messageIcon,
        },
        {
          label: "123 Cyber Lane, Tech City, IN 46000, United States",
          icon: locationIcon,
          isClickable: false,
        },
      ],
    },
    {
      title: "Careers",
      links: [{ label: "Join Our Team", href: "#" }],
      info: [
        {
          label:
            "Interested in making a difference in cybersecurity? Visit our Careers page to see available opportunities and become a part of our innovative team.",
          isClickable: false,
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <h2 className="footer__title">Secure Nexus</h2>

      <div className="footer__container">
        {footerValues.map((section) => (
          <div
            key={section}
            className="footer__section"
          >
            <h3 className="footer__subtitle">{section.title}</h3>

            {section.links && (
              <ul className="footer__list">
                {section.links.map((link) => (
                  <li
                    key={link.label}
                    className="footer__item"
                  >
                    <a
                      href={link.href}
                      className="footer__link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {section.info && (
              <ul className="footer__list">
                {section.info.map((item, i) => (
                  <li
                    key={i}
                    className={`footer__item${
                      item.isClickable === false ? "--description" : "--company"
                    }`}
                  >
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={`${item.label} Icon`}
                      />
                    )}
                    {item.isClickable === false ? (
                      <p className="footer__description">{item.label}</p>
                    ) : (
                      <a
                        href={item.href}
                        className="footer__link"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © 2024 Secure Nexus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
