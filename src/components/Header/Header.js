import React, { useState } from "react";
import NavMenu from "./NavMenu/NavMenu";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = (props) => {
  const links = [
    { type: "normal", text: "Features", url: "#/features" },
    { type: "normal", text: "Pricing", url: "#/pricing" },
    { type: "normal", text: "Resources", url: "#/resources" },
    { type: "option", text: "Login", url: "#/login" },
    { type: "option", text: "Sign Up", url: "#/signup" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.padding__container}>
      <header className={styles.header__container}>
        <NavLink to="/home">
          <h1>Shortly</h1>
        </NavLink>
        <NavMenu
          className={styles.menuItems}
          links={links}
          menuOpen={menuOpen}
        ></NavMenu>
        <div
          className={[
            styles.menuIcon,
            menuOpen ? styles.menuIconOpen : "",
          ].join(" ")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </div>
  );
};

export default Header;
