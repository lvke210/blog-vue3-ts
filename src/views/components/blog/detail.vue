<template>detail</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      data: [],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
