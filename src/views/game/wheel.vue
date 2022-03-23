<template>
  <Lvke :data="lvkearr" :bar="prizes" @testChnge="hdLvkeChange" />
  <span>每天一次？</span>
  <a-switch
    v-model:checked="isOnce"
    checked-children="开"
    un-checked-children="关"
    @change="onChange"
  />
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
</template>
<script lang="ts">
import { message } from "ant-design-vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const lvkearr = ["zhangsan", "lisi", "wangwu"];
    const myLucky = ref(null as any);
    let isOnce = ref(true);
    const state = {
      blocks: [{ padding: "13px", background: "#617df2" }],
      prizes: [
        { fonts: [{ text: "0", top: "10%" }], background: "#e9e8fe" },
        { fonts: [{ text: "1", top: "10%" }], background: "#b8c5f2" },
        { fonts: [{ text: "2", top: "10%" }], background: "#e9e8fe" },
        { fonts: [{ text: "3", top: "10%" }], background: "#b8c5f2" },
        { fonts: [{ text: "4", top: "10%" }], background: "#e9e8fe" },
        { fonts: [{ text: "5", top: "10%" }], background: "#b8c5f2" },
        { fonts: [{ text: "6", top: "10%" }], background: "#e9e8fe" },
        { fonts: [{ text: "7", top: "10%" }], background: "#b8c5f2" },
        { fonts: [{ text: "8", top: "10%" }], background: "#e9e8fe" },
        { fonts: [{ text: "9", top: "10%" }], background: "#b8c5f2" },
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
    let isAlreadyPlay = ref(false);

    function startCallback() {
      const localDate = localStorage.getItem("isAlreadyPlay")
        ? JSON.parse(localStorage.getItem("isAlreadyPlay")!)
        : null;
      isAlreadyPlay.value = localDate?.value;
      const today = new Date().getDate();
      if (isAlreadyPlay.value && today === localDate?.time && isOnce.value) {
        message.info(`今天的幸运号是 ${localDate?.number} 明天再来吧`);
        return;
      }

      // 调用抽奖组件的play方法开始游戏
      myLucky.value.play();
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        const leng = state.prizes.length;
        const index = Math.floor(Math.random() * leng);
        // 调用stop停止旋转并传递中奖索引
        myLucky.value.stop(index);
      }, 3000);
    }

    // 抽奖结束会触发end回调
    function endCallback(prize: any) {
      message.success(`今天的幸运号是 ${prize.fonts[0].text} 加油哦`);
      localStorage.setItem(
        "isAlreadyPlay",
        JSON.stringify({
          value: "true",
          time: new Date().getDate(),
          number: prize.fonts[0].text,
          isOnce: isOnce.value,
        })
      );
    }
    function onChange() {
      console.log(isOnce.value);
    }
    function hdLvkeChange(value: string) {
      console.log("实际使用的地方", value);
    }
    return {
      hdLvkeChange,
      startCallback,
      endCallback,
      myLucky,
      onChange,
      isOnce,
      lvkearr,
      ...state,
    };
  },
});
</script>
