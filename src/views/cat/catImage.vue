<template>
  <div>hello cat</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CatImage",
  // props: ["person", "title"],
  props: {
    person: {
      type: Object,
    },
    title: {
      require: true,
      type: String,
    },
  },
  setup(props) {
    console.log(props);
  },
});
</script>
