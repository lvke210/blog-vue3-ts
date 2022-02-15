<template>
  <router-view />
  <Welcome :visible2="true" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Welcome from "./views/components/modal/index.vue";
export default defineComponent({
  components: { Welcome },
});
</script>
