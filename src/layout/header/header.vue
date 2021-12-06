<template>
  <a-layout-header
    style="position: fixed; z-index: 1; width: 100%; display: flex"
  >
    <div class="logo" />
    <a-menu
      @click="hdclick"
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <router-link to="/game">game</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/cat">cat</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/hole">hole</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    function hdclick(keys: any) {
      const { key } = keys;
      console.log(key);
    }
    return {
      hdclick,
      selectedKeys: ref<string[]>(["2"]),
    };
  },
});
</script>
<style scoped>
.logo {
  width: 100px;
  background-color: rgb(231, 49, 49);
}
</style>
