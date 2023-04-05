import axios from "axios";

const baseUrl = "https://colour-test.onrender.com";

// http://localhost:8000

export const apiPost = (path, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
      "Content-Type": "application/json",
    },
  };

  const requestData = JSON.stringify(data);

  return axios.post(`${baseUrl}${path}`, requestData, config);
};
