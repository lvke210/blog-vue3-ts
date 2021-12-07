<template>
  <div class="wrap">
    <ul>
      <li><img src="https://picsum.photos/700/400?random=1" alt="" /></li>
      <li><img src="https://picsum.photos/700/400?random=2" alt="" /></li>
      <li><img src="https://picsum.photos/700/400?random=3" alt="" /></li>
      <li><img src="https://picsum.photos/700/400?random=4" alt="" /></li>
    </ul>
  </div>
  <Joke />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Joke from "./joke.vue";
export default defineComponent({
  components: { Joke },
  setup() {
    console.log(1);
  },
});
</script>
<style scoped>
.wrap {
  height: 400px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wrap ul {
  padding: 0;
}
.wrap ul li {
  float: left;
  width: 20%;
  height: 400px;
  list-style: none;
  transition: all 0.5s;
}
.wrap ul li img {
  height: 100%;
}
.wrap ul:hover li {
  /* width: 7%; */
  width: 7%;
}
.wrap ul li:hover {
  /* width: 36%; */
  width: 50%;
}
</style>
>
