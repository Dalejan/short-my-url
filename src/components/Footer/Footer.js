import React from "react";
import styles from "./Footer.module.scss";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import pinterestIcon from "../../assets/icon-pinterest.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
const Footer = (props) => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.padding__container}>
        <h1>Shortly</h1>

        <div className={styles.links__container}>
          <div className={styles.links__container__row}>
            <h3>Features</h3>
            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>
          <div className={styles.links__container__row}>
            <h3>Resources</h3>
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </div>
          <div className={styles.links__container__row}>
            <h3>Company</h3>
            <p>About</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://facebook.com">
            <img src={facebookIcon} alt="icon"></img>
          </a>
          <a href="https://twitter.com">
            <img src={twitterIcon} alt="icon"></img>
          </a>
          <a href="https://pinterest.com">
            <img src={pinterestIcon} alt="icon"></img>
          </a>
          <a href="https://instagram.com">
            <img src={instagramIcon} alt="icon"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
