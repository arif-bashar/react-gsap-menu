import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// animations
import {
  closeMenu,
  closeMenuBG,
  openMenu,
  openMenuBG,
  staggerReveal,
  staggerText,
  fadeInUp,
  handleCity,
  handleCityReturn,
  handleHover,
  handleHoverExit,
} from "../Animations";

// Hardcoded cities array
import { Cities } from "./Cities";

const Hamburger = ({ state }) => {
  // References to DOM nodes that we'll animate
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBG = useRef(null);
  let cityBG = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  // Main animation caller each time state changes
  useEffect(() => {
    if (state.clicked === false) {
      // close hamburger menu
      closeMenuBG(revealMenu, revealMenuBG);
      closeMenu(menu);
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu
      openMenu(menu);
      openMenuBG(revealMenuBG, revealMenu);
      staggerReveal(revealMenuBG, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBG = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div ref={(el) => (cityBG = el)} className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(event) => handleHover(event)}
                      onMouseOut={(event) => handleHoverExit(event)}
                      ref={(el) => (line1 = el)}
                      to="/opportunities"
                    >
                      Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(event) => handleHover(event)}
                      onMouseOut={(event) => handleHoverExit(event)}
                      ref={(el) => (line2 = el)}
                      to="/solutions"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(event) => handleHover(event)}
                      onMouseOut={(event) => handleHoverExit(event)}
                      ref={(el) => (line3 = el)}
                      to="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p>
                  The purpose of lorem ipsum is to create a natural looking
                  block of text (sentence, paragraph, page, etc.) that doesn't
                  distract from the layout. A practice not without controversy,
                  laying out pages with meaningless filler text can be very
                  useful when the focus is meant to be on design, not content.
                </p>
              </div>
              <div className="locations">
                Locations:
                {Cities.map((city) => (
                  <span
                    key={city.name}
                    onMouseEnter={() => handleCity(cityBG, city.image)}
                    onMouseOut={() => handleCityReturn(cityBG)}
                  >
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
