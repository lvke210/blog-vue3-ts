<template>
  <LuckyWheel
    ref="myLucky"
    width="300px"
    height="300px"
    :prizes="prizes"
    :blocks="blocks"
    :buttons="buttons"
    @start="startCallback"
    @end="endCallback"
  />
  <!-- <SlotMachine
    ref="myLucky"
    width="400px"
    height="400px"
    :prizes="prizes"
    :blocks="blocks"
    :buttons="buttons"
    @start="startCallback"
    @end="endCallback"
  /> -->
  <!-- <LuckyGrid
    ref="myLucky"
    width="300px"
    height="300px"
    :prizes="prizes"
    :blocks="blocks"
    :buttons="buttons"
    @start="startCallback"
    @end="endCallback"
  /> -->
  <canvas id="tankCanvas" width="1000" height="600"></canvas>
  <div ref="hello"></div>
</template>
<script lang="ts">
import { message } from "ant-design-vue";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const myLucky = ref(null as any);
    const state = {
      blocks: [{ padding: "13px", background: "#617df2" }],
      prizes: [
        { fonts: [{ text: "0", top: "10%" }], background: "#e9e8fe" },
        { fonts: [{ text: "1", top: "10%" }], background: "#b8c5f2" },
        { fonts: [{ text: "2", top: "10%" }], background: "#e9e8fe" },
        { fonts: [{ text: "3", top: "10%" }], background: "#b8c5f2" },
        { fonts: [{ text: "4", top: "10%" }], background: "#e9e8fe" },
        { fonts: [{ text: "5", top: "10%" }], background: "#b8c5f2" },
      ],
      buttons: [
        { radius: "50px", background: "#617df2" },
        { radius: "45px", background: "#afc8ff" },
        {
          radius: "40px",
          background: "#869cfa",
          pointer: true,
          fonts: [{ text: "开始\n抽奖", top: "-20px" }],
        },
      ],
    };
    onMounted(() => {
      console.log(myLucky);
    });
    function startCallback() {
      // 调用抽奖组件的play方法开始游戏
      myLucky.value.play();
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        const index = Math.floor(Math.random() * 6);
        // 调用stop停止旋转并传递中奖索引
        myLucky.value.stop(index);
      }, 3000);
    }
    // 抽奖结束会触发end回调

    function endCallback(prize: any) {
      message.success(`今天的幸运号是 ${prize.fonts[0].text} 加油哦`);
    }
    return {
      startCallback,
      endCallback,
      myLucky,
      ...state,
    };
  },
});
</script>

<style scoped>
#tankCanvas {
  background-color: rgb(146, 135, 135);
  clip-path: polygon(
    50% 100%,
    62% 33%,
    9% 43%,
    77% 64%,
    79% 88%,
    47% 77%,
    14% 87%,
    9% 64%,
    91% 57%,
    28% 27%
  );
}
</style>
