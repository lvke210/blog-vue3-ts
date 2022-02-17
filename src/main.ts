import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import "@/style/index.css";
import VueLuckyCanvas from "@lucky-canvas/vue";
createApp(App).use(Antd).use(store).use(router).use(VueLuckyCanvas).mount("#app");
