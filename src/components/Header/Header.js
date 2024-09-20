import React, { useState } from "react";
import "./Header.scss";
import HeaderImage from "../../images/header_image.svg";
import ExpertIcon from "../../images/icons/expert.svg";
import GlobalyIcon from "../../images/icons/globaly.svg";
import ProjectIcon from "../../images/icons/project.svg";
import RateIcon from "../../images/icons/rate.svg";

const Header = () => {
  const headerIcons = [
    {
      img: ProjectIcon,
      title: "4K+",
      detail: "Cyber Security Project",
    },
    {
      img: GlobalyIcon,
      title: "100K+",
      detail: "Customer Globally",
    },
    {
      img: ExpertIcon,
      title: "350+",
      detail: "Cyber Security Expert",
    },
    {
      img: RateIcon,
      title: "100%",
      detail: "Client Retention Rate",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="logo">Secure Nexus</div>

          <div className="navigation">
            <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about-us"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#resources"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>

            <div
              className="burger-menu"
              onClick={toggleMenu}
            ></div>

            <button className="cta-button">Get Protection Now</button>
          </div>
        </div>

        <div className="header-bottom">
          <div className="description">
            <h1>
              Empowering Your Digital World with Advanced Security Solutions
            </h1>

            <p>
              Discover unparalleled protection with Secure Nexus, your partners
              in defending against cyber threats and enhancing your operational
              integrity.
            </p>

            <div className="buttons">
              <button className="learn-more">Learn More</button>
              <button className="get-started">Get Started</button>
            </div>
          </div>

          <div className="image-container">
            <img
              src={HeaderImage}
              alt="Header_Image"
            />
          </div>
        </div>

        <div className="info-blocks">
          <div className="block">Comprehensive Security Audit</div>
          <div className="block">Real-Time Threat Monitoring</div>
          <div className="block">Cutting-Edge Cyber Defense Technologies</div>
        </div>
      </header>

      <div className="detailed-blocks">
        {headerIcons.map((headerIcon) => (
          <div className="detailed--block">
            <img
              src={headerIcon.img}
              alt={headerIcon}
            />

            <div className="detailed--block__description">
              <h1 className="detailed--block__title">{headerIcon.title}</h1>
              <p className="detailed--block__detail">{headerIcon.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
