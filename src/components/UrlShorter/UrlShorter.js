import React, { useState } from "react";
import { shortUrl } from "../../services/short-url.service";
import { Formik } from "formik";
import { createNotification } from "../Notification/Notification";

const UrlShorter = (props) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (_url) => {
    const res = await shortUrl(_url);
    if (res["error"]) {
      createNotification("Error", res["error"], "danger");
      setLoading(false);
      return;
    }

    const urlToSave = `https://rel.ink/${res.hashid}`;
    const savedUrls = localStorage.getItem("urls")
      ? JSON.parse(localStorage.getItem("urls"))
      : [];

    // Check if urls are in storage and if the urlToSave is in storage
    localStorage.setItem(
      "urls",
      localStorage.getItem("urls")
        ? savedUrls.includes(urlToSave)
          ? JSON.stringify([...savedUrls])
          : JSON.stringify([...savedUrls, urlToSave])
        : JSON.stringify([urlToSave])
    );
    setLoading(false);
  };

  return (
    <>
      UrlShorter Component
      {loading && <p>Loading...</p>}
      <Formik
        initialValues={{ url: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.url) {
            errors.url = "Required";
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
            <input
              type="text"
              name="url"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.url}
            />
            {touched.url && errors.url && (
              <p>{errors.url && touched.url && errors.url}</p>
            )}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default UrlShorter;