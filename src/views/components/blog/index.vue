<template>
  <!-- <Editor height="200" /> -->
  blog
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from "vue";
// import Editor from "@/components/wangEditor/index.vue";
export default defineComponent({
  // components: { Editor },
  setup() {
    const state = reactive({});

    return {
      ...toRaw(state),
    };
  },
});
</script>
