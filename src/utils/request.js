import axios from "axios";
import qs from "qs";
const fetch = axios.create({
  //baseURL: "http://api.wfas.org.cn",
  timeOur: 5000, // 请求过期时间
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
});
fetch.interceptors.request.use(
  function(config) {
    if (config.method === "post") {
      config.data = JSON.stringify(config.data);
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default fetch;
