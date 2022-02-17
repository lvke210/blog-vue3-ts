<template>
  <div class="container">
    <div class="title">
      <h1>{{ blogData.title }}</h1>
    </div>
    <div v-html="blogData.content" class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";

import { getArticleList } from "../../../api";

export default defineComponent({
  setup() {
    const state = reactive({
      blogData: {} as any,
    });

    onMounted(async () => {
      const index = Number(window.location.href.split("/").pop());

      const { data } = await getArticleList();
      state.blogData = data.data.find((item: { id: number }) => item.id === index);
      console.log(index, "index", state.blogData);
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style scoped>
.title {
  text-align: center;
  border-bottom: 1px solid rgb(218, 212, 212);
  padding: 50px 0;
}
.content {
  padding: 5vw;
}
.container {
  background-color: #fff;
  min-height: 75vh;
}
</style>
