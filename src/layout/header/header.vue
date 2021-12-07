<template>
  <div class="title">天地逆旅 光阴过客</div>
  <a-layout-header style="z-index: 1; width: 100%; display: flex">
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      defaultSelectedKeys="1"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item v-for="(item, index) in navList" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const navList = useRouter().options.routes.find(
      (item) => item.meta?.title === "layout"
    )?.children;
    const selectedKeys = ref([0]);
    return {
      navList,
      selectedKeys,
    };
  },
});
</script>
<style scoped>
.logo {
  width: 100px;
}
.title {
  color: white;
  font-size: 20px;
  text-align: center;
  height: 80px;
  line-height: 80px;
  background: #1abc9c;
}
</style>
