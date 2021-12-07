import axios from "axios";
const URL = "https://autumnfish.cn";
const getJokeList = () => axios.get(URL + `/api/joke`);
export { getJokeList };
