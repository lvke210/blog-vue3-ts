<template>
  <h3>时间计算器</h3>
  <div style="display: flex">
    <div>
      <a-range-picker
        :show-time="{ format: 'HH:mm' }"
        format="YYYY-MM-DD HH:mm"
        :placeholder="['Start Time', 'End Time']"
        @change="onRangeOk"
      />
    </div>
    <div style="margin-left: 10px; line-height: 2em">时间差:{{ result }}</div>
  </div>
  <h1>倒计时</h1>
  <div>
    <a-date-picker show-time placeholder="Select Time" @change="countDownChange" />
  </div>
  <div style="margin-left: 10px; line-height: 2em; font-size: 5em">{{ countDown }}</div>
</template>
<script setup lang="ts">
import { getCountDown } from "@/utils";
import { ref } from "vue";
let result = ref<string | undefined>(undefined);
let countDown = ref<string | undefined>(undefined);
function onRangeOk(values: any) {
  const [startTime, endTime] = values;
  result.value = getCountDown(startTime, endTime);
}
let tim: number | undefined;
function countDownChange(value: any) {
  if (value) {
    tim = setInterval(() => {
      countDown.value = getCountDown("", value);
    }, 1000);
  } else {
    clearInterval(tim);
  }
}
</script>
