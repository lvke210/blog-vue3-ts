import { ObjectMap } from "@/utils";
import axios from "axios";
const URL2 = "https://autumnfish.cn";
const URL = "";

// 登陆
const userLogin = (param: ObjectMap): ObjectMap => axios.post(URL + "/api/login", param);
//注册
const userRegister = (param: ObjectMap): ObjectMap => axios.post(URL + "/api/register", param);
//更新
const userupdate = (param: ObjectMap): ObjectMap => axios.post(URL + "/api/update", param);

//获取随机笑话
const getJokeList = () => axios.get(URL2 + `/api/joke`);

//获取树洞留言列表
const getMsgList = () => axios.get(URL + "/api/getHoleList");

//添加留言
const addMsg = (req: ObjectMap) => axios.post(URL + "/api/addHole", req);

// 删除留言
const delMsg = (id: number) => axios.get(URL + `/api/delHole?id=${id}`);

//获取博客列表
const getArticleList = () =>
  axios.get("/api/getArticleList", {
    headers: {
      "Cache-Control": "max-age=300",
    },
  });

const uploadFile = (param: ObjectMap) => axios.post(URL + "/api/profile", param);

export {
  getJokeList,
  addMsg,
  getMsgList,
  delMsg,
  uploadFile,
  userLogin,
  userRegister,
  userupdate,
  getArticleList,
};
