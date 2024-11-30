import "./navbar.css";
import React, { useState, useEffect } from 'react';
import logo from '../../../src/assets/images/logo.svg'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("#home"); // Zustand für aktive Sektion

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  const handleScrollTo = (e) => {
    e.preventDefault(); // Verhindert das Standardverhalten des Ankers
    const targetId = e.target.getAttribute("href"); // Ziel-ID extrahieren
    const targetElement = document.querySelector(targetId); // Ziel-Element holen

    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight, // Offset wegen fixierter Navbar
        behavior: "smooth", // Smooth Scroll
      });
    }

    setActiveSection(e.target.getAttribute("href")); // Update active section when clicked
    closeNavbar();
  };

  // Funktion zum Setzen der aktiven Sektion beim Scrollen
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navbarHeight - 50; // 50px Puffer
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setActiveSection(`#${section.id}`); // Automatisch aktive Sektion setzen
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Event-Listener für Scrollen
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup bei Component-Unmount
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a
                href="#home"
                onClick={handleScrollTo}
                className={activeSection === "#home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#training"
                onClick={handleScrollTo}
                className={activeSection === "#training" ? "active" : ""}
              >
                Training
              </a>
            </li>
            <li>
              <a
                href="#werte"
                onClick={handleScrollTo}
                className={activeSection === "#werte" ? "active" : ""}
              >
                Über uns
              </a>
            </li>
            <li>
              <a
                href="#socialmedia"
                onClick={handleScrollTo}
                className={activeSection === "#socialmedia" ? "active" : ""}
              >
                Folge uns
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                onClick={handleScrollTo}
                className={activeSection === "#kontakt" ? "active" : ""}
              >
                Kontakt
              </a>
            </li>
            <li>
              <a
                href="#impressum"
                onClick={handleScrollTo}
                className={activeSection === "#impressum" ? "active" : ""}
              >
                Impressum
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hamburger = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24">
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#ffb703"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="4"
        transform="translate(304 57)"
        fill="#ffb703"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#ffb703"
      />
    </g>
  </svg>
);

export default Navbar;
