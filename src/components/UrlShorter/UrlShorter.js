import React, { useState, useEffect } from "react";
import { shortUrl } from "../../services/short-url.service";
import { Formik } from "formik";
import { createNotification } from "../Notification/Notification";
import UrlItem from "./UrlItem/UrlItem";
import styles from "./UrlShorter.module.scss";

const UrlShorter = (props) => {
  const [loading, setLoading] = useState(false);
  const [shortedUrls, setShortedUrls] = useState([]);

  useEffect(() => {
    setShortedUrls(
      JSON.parse(localStorage.getItem("urls"))
        ? JSON.parse(localStorage.getItem("urls"))
        : []
    );
    return () => {};
  }, [loading]);

  const handleSubmit = async (_url) => {
    const res = await shortUrl(_url);
    if (res["error"]) {
      createNotification("Error", res["error"], "danger");
      setLoading(false);
      return;
    }
    const urlToSave = {
      original: res.url,
      short: `https://rel.ink/${res.hashid}`,
    };
    const savedUrls = localStorage.getItem("urls")
      ? JSON.parse(localStorage.getItem("urls"))
      : [];

    // Check if urls are in storage and if the urlToSave is in storage
    localStorage.setItem(
      "urls",
      savedUrls.includes(urlToSave)
        ? JSON.stringify(savedUrls)
        : JSON.stringify([...savedUrls, urlToSave])
    );
    createNotification("Shorted!", "Url have been shorted", "success");

    setLoading(false);
  };

  return (
    <div className={styles.urlShorter__container}>
      <Formik
        initialValues={{ url: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.url) {
            errors.url = "An Url is required";
          } else if (
            !/^http[s]?:\/\/(?:[a-z]|[0-9]|[$-_@.&+]|[!*,]|(?:%[0-9a-f][0-9a-f]))+/i.test(
              values.url
            )
          ) {
            errors.url = "Please enter a valid url";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setLoading(true);
          handleSubmit(values.url);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.input__container}>
              <input
                type="text"
                name="url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.url}
                placeholder="Shorten a link here..."
                className={errors.url ? styles.inputError : ""}
              />
              {touched.url && errors.url && (
                <p>{errors.url && touched.url && errors.url}</p>
              )}
            </div>
            <button type="submit" disabled={isSubmitting || errors.url}>
              {loading ? "Loading..." : "Shorten It!"}
            </button>
          </form>
        )}
      </Formik>
      {shortedUrls.map((url, i) => {
        return <UrlItem url={url} key={i}></UrlItem>;
      })}
    </div>
  );
};

export default UrlShorter;
