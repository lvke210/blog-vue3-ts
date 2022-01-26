<template>
  <div class="todo">
    <div class="todu-input">
      <a-input v-model:value="todoValue" type="text" placeholder="请输入待办" />
      <a-button @click="addItem">增加</a-button>
    </div>
    <div class="todolist">
      <div v-for="(item, index) in todoList" :key="index" class="todoItem">
        {{ item }} <span class="delItem" @click="delItem(index)">删除</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
interface State {
  todoValue: string;
  todoList: Array<string>;
}
export default defineComponent({
  name: "TodoList",
  setup() {
    const state: State = reactive({
      todoValue: "",
      todoList: ["打豆豆", "睡觉觉"],
    });
    function addItem() {
      state.todoList.push(state.todoValue);
      state.todoValue = "";
    }
    function delItem(index: number) {
      state.todoList.splice(index, 1);
    }
    return {
      delItem,
      addItem,
      ...toRefs(state),
    };
  },
});
</script>
<style scoped>
.todu-input {
  width: 200px;
  display: flex;
}
.todoItem:hover {
  transition: 0.5s;
  transform: translate(0, -1px);
}
.todoItem:hover .delItem {
  display: inline-block;
}
.delItem {
  display: none;
  cursor: pointer;
  color: red;
  font-size: 12px;
  text-decoration: underline;
}
</style>
