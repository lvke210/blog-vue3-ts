import Lvke from "./lvkeui/index.vue";
const lvkeUI: any = {};
lvkeUI.install = function (Vue: any) {
  Vue.component("Lvke", Lvke);
};
export default lvkeUI;
