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
      <div class="_sider">Sider</div>
    </div>
  </a-layout-content>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
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
</script>
<style scoped>
._sider {
  width: 300px;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  margin-left: 5px;
}
</style>
