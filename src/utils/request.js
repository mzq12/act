import axios from "axios";
import qs from "qs";
const fetch = axios.create({
  //baseURL: "http://api.wfas.org.cn",
  timeOut: 5000, // 请求过期时间
  withCredentials: false
  //headers: { "Content-Type": "application/json" }
});
fetch.interceptors.request.use(
  function(config) {
    if (
      config.method === "post" &&
      config.headers["Content-Type"] !== "multipart/form-data;charset=UTF-8"
    ) {
      // config.data = JSON.stringify(config.data);
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default fetch;
