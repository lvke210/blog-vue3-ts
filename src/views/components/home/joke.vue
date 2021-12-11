<template>
  <div class="block" v-for="(val, index) in jokeList" :key="val">
    <div class="block-title"></div>
    <div class="block-content">
      <div class="block-left">
        <img :src="`https://picsum.photos/200/150?random=${index}`" alt="" />
      </div>
      <div class="block-right">{{ val ?? "网络不好，请稍后再试" }}</div>
    </div>
    <div class="block-footer">-------------------</div>
  </div>
  <a-button id="btn" hidden @click="getJokeLists"></a-button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { getJokeList } from "@/api";
import { debounce, isBottom, ObjectMap } from "@/utils";
window.onscroll = debounce(() => {
  if (isBottom(50)) {
    const a: HTMLButtonElement | null = document.querySelector("#btn");
    a?.click();
  }
});
export default defineComponent({
  setup() {
    const jokeList: Array<string> = reactive([]);
    function getJokeLists() {
      for (let i = 0; i < 5; i++) {
        getJokeList().then((res: ObjectMap) => jokeList.push(res.data));
      }
    }
    getJokeLists();
    return {
      jokeList,
      getJokeLists,
    };
  },
});
</script>

<style>
.block {
  margin: 20px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgb(219, 217, 217);
}
.block:hover {
  box-shadow: 1px 1px 5px rgb(168, 166, 166);
}
.block .block-content {
  display: flex;
  flex: 1;
}
.block-title {
  font-size: 20px;
  padding: 5px;
}
.block-left {
  text-align: left;
  padding: 5px;
  margin-top: 10px;
}
.block-right {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding: 5px;
  font-size: 12px;
}
.block-footer {
  text-align: right;
  padding: 5px;
  font-size: 12px;
  opacity: 0.8;
}
</style>
