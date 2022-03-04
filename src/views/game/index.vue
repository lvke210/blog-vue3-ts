<template>
  <input type="text" ref="iptref" value="432432" />
  <button @click="hdclick">click</button>
  <WheelLucky />
  <canvas id="tankCanvas" width="1000" height="600"></canvas>
</template>
<script setup lang="ts">
import WheelLucky from "./wheel.vue";
import { ref } from "vue";
const iptref = ref<any>();
console.log(iptref.value, "iptref");
function hdclick() {
  console.log(iptref.value, "iptref");
}
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
