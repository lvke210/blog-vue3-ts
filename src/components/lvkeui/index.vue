<template>
  <a-select style="width: 100px" @change="hdChange">
    <a-select-option v-for="item in data" :key="item">{{ item }}</a-select-option>
  </a-select>
</template>
<script setup lang="ts">
import { defineProps, reactive, defineEmits } from "vue";
const props = defineProps(["data", "bar"]);
const emit = defineEmits(["testChnge"]);
const data = reactive(props.data);
function hdChange(value: string) {
  emit("testChnge", value);
}
</script>
