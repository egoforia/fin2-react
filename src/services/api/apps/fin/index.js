import axios from "axios";

const FinApi = () => {
  return axios.create({
    headers: {
      "content-type": "application/json",
    },
    baseURL: process.env.REACT_APP_SERVER_URL,
    responseType: "json",
  });
};

export default FinApi;
