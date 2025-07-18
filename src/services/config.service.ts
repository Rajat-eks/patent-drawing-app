"use client";
import * as axios from "axios";

let axiosObject = axios.default.create();
// axiosObject.defaults.baseURL = "http://localhost:8080/api/v1";
// axiosObject.defaults.baseURL = "https://tpd-server-0twv.onrender.com/api/v1";
axiosObject.defaults.baseURL = "https://api.thepatentdrawings.com/api/v1";
axiosObject.defaults.timeout = 80000;
axiosObject.defaults.withCredentials = false;
axiosObject.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosObject.interceptors.request.use(
  async function (config: axios.InternalAxiosRequestConfig) {
    let token: any = localStorage.getItem("auth_token");
    if (token) {
      token = JSON.parse(token);
      token = token?.access_token;
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

axiosObject.interceptors.response.use(
  async function (config: any) {
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export default axiosObject;
