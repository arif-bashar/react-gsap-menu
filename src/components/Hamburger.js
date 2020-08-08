import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hamburger = ({ state }) => {
  let menu = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close hamburger menu
      menu.style.display = "none";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu
      menu.style.display = "block";
    }
  });

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/opportunities">Opportunities</Link>
                  </li>
                  <li>
                    <Link to="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
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
                <span>Dallas</span>
                <span>Austin</span>
                <span>New York</span>
                <span>San Francisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
