import axios from "axios";

const baseUrl = "http://localhost:8000";

export const apiPost = (path, data) => {
  console.log("axios", data);
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
      "Content-Type": "application/json",
    },
  };

  const requestData = JSON.stringify(data);

  console.log(`${baseUrl}${path}`, requestData, config);
  return axios.post(`${baseUrl}${path}`, requestData, config);
};
