import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import "@/style/index.css";
import VueLuckyCanvas from "@lucky-canvas/vue"; //抽奖插件
const store = createPinia();
createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .use(VueLuckyCanvas)
  .mount("#app");
