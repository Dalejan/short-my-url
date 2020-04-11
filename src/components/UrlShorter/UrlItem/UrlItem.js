import React, { useRef, useState } from "react";
import { createNotification } from "../../Notification/Notification";
import styles from "./UrlItem.module.scss";
import PropTypes from "prop-types";

const UrlItem = (props) => {
  const { short, original } = props.url;
  const ref = useRef();
  const [isCopied, setIsCopied] = useState(false);

  window.addEventListener("click", function (event) {
    setIsCopied(false);
  });

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(ref.current.innerHTML)
      .then(() => {
        createNotification("Copied", "You have copied the url!", "success");
        setIsCopied(true);
      })
      .catch((err) => {
        createNotification("Error", "Imposible to copy the url", "danger");
        setIsCopied(false);
      });
  };

  return (
    <div className={styles.item__container}>
      <p className={styles.originalUrl}>{original}</p>
      <div className={styles.item__containerLeft}>
        <p ref={ref} className={styles.shortUrl}>
          {short}
        </p>
        <button
          disabled={isCopied}
          onClick={() => handleCopyToClipboard()}
          className={isCopied ? styles.buttonCopied : ""}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default UrlItem;

UrlItem.propTypes = {
  url: PropTypes.shape({
    short: PropTypes.string,
    original: PropTypes.string,
  }),
};
