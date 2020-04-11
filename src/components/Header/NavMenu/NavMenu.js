import React from "react";
import NavMenuItem from "./NavMenuItem.js/NavMenuItem";
import PropTypes from "prop-types";
import "./NavMenu.scss";
const NavMenu = (props) => {
  const { links, menuOpen } = props;
  const normals = links.filter((el) => el.type === "normal");
  const options = links.filter((el) => el.type === "option");
  return (
    <nav
      className={[
        "menu__container ",
        menuOpen ? "menu__container-open" : "",
      ].join(" ")}
    >
      <div className="navItem-normals__container">
        {normals.map((link, i) => {
          return <NavMenuItem link={link} key={i}></NavMenuItem>;
        })}
      </div>
      <div className="navItem-options__container">
        {options.map((link, i) => {
          return <NavMenuItem link={link} key={i}></NavMenuItem>;
        })}
      </div>
    </nav>
  );
};

export default NavMenu;
NavMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};
