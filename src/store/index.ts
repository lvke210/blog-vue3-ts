import { createStore } from "vuex";
import basicDate from "./modules/basicDate";
const modules = {
  basicDate,
};
export default createStore({
  modules,
});
