"use strict";
import axios from "axios";
import { message } from "ant-design-vue";
import store from "../store";
import Qs from "qs";

import { getToken, removeToken } from "@/utils";
import { delDate } from "@/utils";
import { curry, has, toUpper, equals } from "ramda";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers["Accept"] = " */*";
axios.defaults.headers["clientType"] = 10;
import { resetRouter } from "@/router";
let is_MessageBox = true;
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: { accessToken: getToken() },
});

instance.interceptors.response.use((response) => {
  if (equals(0, response.data.code)) {
    return response.data;
  } else {
    console.error(response.data.msg); // for debug
    return response;
  }
});
// request拦截器
axios.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers.accessToken = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
axios.interceptors.response
  .use
  // (response) => {
  //   /**
  //    * code为非200是抛错 可结合自己业务进行修改
  //    */
  //   const res = response.data;
  //   if (!has("data", res)) {
  //     message.info("返回数据异常,请稍后重试，或请联系管理");
  //     return Promise.reject("接口返回数据异常");
  //   }
  //   if (equals(0, res.status) || res.code) {
  //     return response;
  //   } else {
  //     message.info(`${res?.msg}`);
  //     return Promise.reject(res.msg);
  //   }
  // }
  // (error) => {
  //   if (error.response && equals(401, error.response.status)) {
  //     if (is_MessageBox) {
  //       is_MessageBox = false;
  //       message
  //         .info("登录状态失效，可以取消继续留在该页面，或者重新登录", "确定登出")
  //         .then(() => {
  //           is_MessageBox = true;
  //           location.reload();
  //           removeToken();
  //           resetRouter(); //
  //         })
  //         .catch(() => {
  //           is_MessageBox = true;
  //         });
  //     }
  //   } else if (error.response && equals(403, error.response.status)) {
  //     message.info(`请求没有权限,请联系管理员`);
  //     console.error("请求没有权限");
  //     return Promise.reject("Permission denied, Please contact Administrator!");
  //   } else {
  //     const message22 = "服务器异常，请稍后重试";
  //     message.info(`请求没有权限,请联系管理员`);
  //     return Promise.reject(message22);
  //   }
  // }
  ();
const getKye = (method) => {
  const equalsMethod = equals(toUpper(method));
  if (equalsMethod("POST") || equalsMethod("PUT")) {
    return "data";
  }
  return "params";
};
let http = (method, url, params = {}) => {
  const key = getKye(method);
  return axios({
    url,
    method,
    paramsSerializer: function (params) {
      return Qs.stringify(params, {
        arrayFormat: "brackets",
        charset: "utf-8",
      });
    },
    [key]: equals(toUpper(method), "GET") ? delDate(params) : params,
  });
};
http = curry(http);
const httpGet = http("GET");
const httpPost = http("POST");
const httpPut = http("PUT");
const httpDelete = http("delete");
const httpPatch = http("PATCH");
export { http, httpGet, httpPost, httpPut, httpDelete, httpPatch, instance };
export default axios;
