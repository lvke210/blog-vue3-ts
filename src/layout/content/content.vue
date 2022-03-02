<template>
  <a-layout-content :class="isDark ? 'darkTheme' : ''">
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <!-- <a-breadcrumb-item>{{ curBreak }}</a-breadcrumb-item> -->
    </a-breadcrumb>
    <div style="display: flex" class="content_wrap">
      <div
        :style="{
          padding: '24px',
          flex: '1',
          width: '100%',
        }"
        :class="isDark ? 'darkTheme' : ''"
      >
        <router-view></router-view>
      </div>
      <Silder :class="isDark ? 'darkTheme' : ''" />
    </div>
    <a-back-top>
      <div class="ant-back-top-inner"><img src="@/assets/1.gif" alt="" /></div>
    </a-back-top>
  </a-layout-content>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import Silder from "./sider.vue";
import { store as useStore } from "@/store";
const isDark = computed(() => {
  return useStore().isDark;
});
const routes = useRouter().options.routes.find(
  (item) => item.meta?.title === "layout"
)?.children;
const curBreak = computed(() => {
  return useRouter().currentRoute.value.name;
});

// window.onclick = () => {
//   const audio: HTMLAudioElement | null = document.querySelector("#audio");
//   audio?.play();
// };
</script>
<style scoped>
.content_wrap::-webkit-scrollbar {
  width: 0 !important;
}

@media screen and (max-width: 480px) {
  .ant-back-top {
    right: 50px;
  }
}
</style>
