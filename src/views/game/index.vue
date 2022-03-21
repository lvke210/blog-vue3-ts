<template>
  <div class="wrap">
    <div class="game-nav">
      <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys">
        <a-menu-item v-for="item in navList" :key="item.name">
          <router-link :to="item.path" class="nav-item">{{
            item.name
          }}</router-link>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="game-content"><router-view> </router-view></div>
  </div>

  <br />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const openKeys = ref([]);
const selectedKeys = ref([]);
const router = useRouter();
const navList = router.options.routes
  .find((item) => item.name === "Layout")
  ?.children?.find((val) => val.name === "Game")?.children;
</script>

<style scoped>
.wrap {
  display: flex;
}
.game-content {
  margin-top: 10px;
  flex: 1;
  padding: 0 5vw;
}
.nav-item {
  display: inline-block;
  padding: 0 5px;
}
.ant-menu-overflow,
.ant-menu,
.ant-menu-root,
.ant-menu-horizontal,
.ant-menu-dark {
  background: #ffffff00 !important;
}
</style>
