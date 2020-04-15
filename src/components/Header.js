import React from "react";
import PropTypes from "prop-types";
import "./Navigation/Navigation.css";
import Navbar from "./Navigation/Navbar";
import Navlinks from "./Navigation/Navlinks";

const Header = (props) => {
  const { navlinks, toggleNavlinks } = props;

  return (
    <div>
      <Navbar toggleNavlinks={toggleNavlinks} />
      <Navlinks
        toggleNavlinks={toggleNavlinks}
        visibility={navlinks ? "show-navlinks" : "hide-navlinks"}
      />
    </div>
  );
};

Header.propTypes = {
  toggleNavlinks: PropTypes.func.isRequired,
};

export default Header;
