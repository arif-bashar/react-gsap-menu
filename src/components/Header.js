import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {
  // State for menu button press
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // State for disabling the menu button for good UX purposes
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    // This condition will execute once the first time menu is clicked
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });

      // Back and forth open/close toggler
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  // Disable button handler
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HAMBRG.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger />
    </header>
  );
};

export default Header;
