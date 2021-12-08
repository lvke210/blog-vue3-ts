<template>
  <a-layout-content :style="{ padding: '0 50px' }">
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <!-- <a-breadcrumb-item>{{ curBreak }}</a-breadcrumb-item> -->
    </a-breadcrumb>
    <div style="display: flex">
      <div
        :style="{
          background: '#fff',
          padding: '24px',
          minHeight: '80vh',
          flex: '1',
        }"
      >
        <router-view></router-view>
      </div>
      <Silder />
    </div>
    <a-back-top>
      <div class="ant-back-top-inner"><img src="@/assets/1.gif" alt="" /></div>
    </a-back-top>
  </a-layout-content>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import Silder from "./sider.vue";
export default defineComponent({
  components: { Silder },
  setup() {
    const routes = useRouter().options.routes.find(
      (item) => item.meta?.title === "layout"
    )?.children;
    const curBreak = computed(() => {
      return useRouter().currentRoute.value.name;
    });
    return {
      routes,
      curBreak,
    };
  },
});
// window.onclick = () => {
//   const audio: HTMLAudioElement | null = document.querySelector("#audio");
//   audio?.play();
// };
</script>
