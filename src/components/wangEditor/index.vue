<template>
  <div id="editor"></div>
  <a-button @click="hdClick">click</a-button>
  <a-button @click="clearContent">clearContent</a-button>
  <a-button @click="resetContent">resetContent</a-button>
  <div v-html="state.content"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRaw } from "vue";
import E from "wangeditor";
export default defineComponent({
  props: ["width", "height"],
  setup(props) {
    const state = reactive({
      data: [],
      content: "321",
    });
    let aaa = ref("aaaa");
    let editor: any;
    onMounted(() => {
      editor = new E("#editor");
      props.height ? (editor.config.height = props.height) : null;
      editor.create();
    });
    function hdClick() {
      state.data = editor.txt.getJSON();
      aaa.value = editor.txt.text();
      state.content = editor.txt.text();
      console.log(aaa.value);
    }
    function clearContent() {
      editor.txt.clear();
    }
    function resetContent() {
      editor.txt.setJSON(state.content);
    }
    return {
      state,
      aaa,
      hdClick,
      clearContent,
      resetContent,
      // ...toRaw(state),
    };
  },
});
</script>
