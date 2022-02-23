//axios拦截器
import axios from "axios";
// import iView from "iview";
// import Cookies from "js-cookie";
// import util from "./util";
// axios.defaults.timeout = 2000000;

// 自动根据浏览器系统语言设置语言
// const navLang = navigator.language;
// const localLang = navLang === "zh-CN" || navLang === "en-US" ? navLang : false;
// let lang = window.localStorage.lang || localLang || "zh-CN";
// let local = Cookies.get("local") || lang || "zh-CN";
axios.interceptors.request.use(
  (config) => {
    // config.headers["Authorization"] = Cookies.get("token"); //传入token
    // config.headers["language"] = local; //传入语言参数

    //增加几口时间戳
    config.params = {
      _t: Date.parse(new Date()),
      ...config.params,
    };

    return config;
  },
  (error) => {
    //发送请求错误操作
    // iView.Message.error("error：" + error.message);
    return Promise.reject(error);
  }
);
// axios.defaults.baseURL = util.rootPath;
axios.interceptors.response.use(
  (response) => {
    //对响应数据做操作
    if (response.headers["content-type"].indexOf("application/json") > -1) {
      if (response.status == 0) {
        return response;
      } else if (response.status == 1) {
        // iView.Message.error(response.data.meta.message);
        return response;
        // } else if (response.data.meta.status == 9) {
        //   iView.Message.error("登录已过期请重新登陆");
        //   Cookies.remove("token");
        //   Cookies.remove("userName");
        //   Cookies.remove("userId");
        //   window.location.href = "#/login";
      } else {
        // iView.Message.error(response.data.meta.message);
        return response;
      }
    } else {
      return response;
    }
  },
  (error) => {
    // iView.Message.error("error:" + error.message);
    return Promise.reject(error);
  }
);

export default axios;
