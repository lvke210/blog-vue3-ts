import { ObjectMap } from "@/utils";
import axios from "axios";
const URL2 = "https://autumnfish.cn";
const URL = "http://127.0.0.1:4320";
//获取随机笑话
const getJokeList = () => axios.get(URL2 + `/api/joke`);

//获取树洞留言列表
const getMsgList = () => axios.get(URL + "/api/getHoleList");

//添加留言
const addMsg = (req: ObjectMap) => axios.post(URL + "/api/addHole", req);

// 删除留言
const delMsg = (id: number) => axios.get(URL + `/api/delHole?id=${id}`);

const uploadFile = (param: ObjectMap) => axios.post(URL + "/api/profile", param);

export { getJokeList, addMsg, getMsgList, delMsg, uploadFile };
