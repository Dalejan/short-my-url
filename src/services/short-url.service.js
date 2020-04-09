import axios from "axios";
const URL_API = "https://rel.ink/api/links/";

export const shortUrl = async (url) => {
  return axios
    .post(URL_API, { url })
    .then((res) => {
      console.log("ULR SHORTED ", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error("Error gettin url data ->", err.response.data);
      return { error: err.response.data.url[0] };
    });
};
