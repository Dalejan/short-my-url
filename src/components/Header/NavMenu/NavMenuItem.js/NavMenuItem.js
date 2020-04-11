import React from "react";
import ProptTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./NavMenuItem.scss";
const NavMenuItem = (props) => {
  const { url, text } = props.link;
  return (
    <NavLink
      to={url}
      className={[
        "navMenuItem__container",
        text === "Sign Up" ? "signUp" : "",
      ].join(" ")}
    >
      {text}
    </NavLink>
  );
};

export default NavMenuItem;

NavMenuItem.propTypes = {
  link: ProptTypes.shape({
    url: ProptTypes.string,
    text: ProptTypes.string,
    type: ProptTypes.string,
  }),
};
