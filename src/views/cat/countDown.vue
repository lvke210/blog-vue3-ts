<template>
  <div class="count-down">
    <div>元旦倒计时</div>
    <span>{{ day }}</span> 天 <span>{{ hour }}</span
    >时 <span>{{ fen }}</span
    >分 <span>{{ sec }}</span
    >秒
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      day: "",
      hour: "",
      fen: "",
      sec: "",
    });
    onMounted(() => {
      const endTime = new Date("2023-1-1").getTime();
      setInterval(() => {
        const nowTime = new Date().getTime();
        const cha = endTime - nowTime;
        state.day = isAddZero(Math.floor(cha / 1000 / 60 / 60 / 24));
        state.hour = isAddZero(Math.floor((cha / 1000 / 60 / 60) % 24));
        state.fen = isAddZero(Math.floor((cha / 1000 / 60) % 60));
        state.sec = isAddZero(Math.floor((cha / 1000) % 60));
      }, 1000);
    });
    function isAddZero(num: number | string) {
      num = num < 10 ? "0" + num : num;
      return `${num}`;
    }
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style scoped>
.count-down {
  width: 30vw;
  height: 20vh;
  background: rgb(227 107 107);
  margin: 0 auto;
  padding: 5%;
  text-align: center;
  min-height: 250px;
  color: white;
  border-radius: 5px;
}
.count-down span {
  font-size: 50px;
}
</style>
