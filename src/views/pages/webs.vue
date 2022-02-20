<template>
  <div style="padding: 10px">
    <h1>一些好玩有趣的网站/工具</h1>
    <div class="wrap">
      <a-card v-for="item in webs" :key="item.url">
        <a :href="item.url" target="_blank">{{ item.name }}</a>
      </a-card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      webs: [
        {
          name: "Skyline 全球共享摄像头",
          url: "https://www.skylinewebcams.com/",
        },
        {
          name: "千亿像素看中国",
          url: "http://www.bigpixel.cn",
        },
        {
          name: "书签地球",
          url: "https://www.bookmarkearth.com",
        },
        {
          name: "similarsites",
          url: "https://cn.similarsites.com/",
        },
        {
          name: "4k download 视频下载器",
          url: "https://www.4kdownload.com/",
        },
        {
          name: "万有导航",
          url: "https://wanyouw.com/",
        },
        {
          name: "picsum 图片素材",
          url: "https://picsum.photos/",
        },
      ],
    });
    return { ...toRefs(state) };
  },
});
</script>
<style scoped>
.wrap {
  display: flex;
}
.wrap div,
h1 {
  margin: 10px;
}
</style>
