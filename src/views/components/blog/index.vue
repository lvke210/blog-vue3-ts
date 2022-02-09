<template>
  <div>blog</div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      date: [],
    });
    return {
      ...toRaw(state),
    };
  },
});
</script>
