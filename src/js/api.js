// import axios from "axios";

// export default axios.create({
//   baseURL: "https://77-dev.uicgroup.tech/api/v1",
// });

const BASE_URL = "https://77-dev.uicgroup.tech/api/v1";
const token = localStorage.getItem("access");

const service = (method, url, data, params) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    if(token){
        headers.Authorization = `Bearer ${token}`
    }
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + url, {
      method,
      headers,
      body: JSON.stringify(data),
      params,
    })
      .then((res) => res.json())  
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        // console.log("Error");
        reject(err);
      });
  });
};``
export default {
    post(url, data, params) {
      return service('POST', url, data, params);
    },
  get(url, params) {
    return service("GET", url, params);
  },
};
