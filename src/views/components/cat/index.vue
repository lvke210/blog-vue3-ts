<template>
  <CatImage :person="person" title="cateImage" />
  <hr />
  <TodoList />
  <hr />
  <a-select @change="hdChange" v-model:value="curSelect" style="width: 120px" :options="data">
  </a-select>
  <hr />
  <CountDown />
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import CatImage from "./catImage.vue";
import TodoList from "../todo/index.vue";
import CountDown from "./countDown.vue";
export default defineComponent({
  components: { CatImage, TodoList, CountDown },
  setup() {
    const state = reactive({
      person: {
        name: "owen",
        age: 18,
      },
      data: [
        { id: 1, label: "label1", value: "value1" },
        { id: 2, label: "label2", value: "value2" },
        { id: 3, label: "label3", value: "value3" },
        { id: 4, label: "label4", value: "value4" },
        { id: 5, label: "label5", value: "value5" },
        { id: 6, label: "label6", value: "value6" },
      ],
      curSelect: "11111111111",
    });

    function hdChange() {
      console.log(state.curSelect);
    }
    return {
      hdChange,
      ...toRefs(state),
    };
  },
});
</script>
