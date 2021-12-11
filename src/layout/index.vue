<template>
  <a-layout>
    <Header />
    <keep-alive>
      <Content />
    </keep-alive>
    <Footer />
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/layout/header/header.vue";
import Content from "@/layout/content/content.vue";
import Footer from "@/layout/footer/footer.vue";
export default defineComponent({
  components: { Header, Content, Footer },
});
</script>
<style scoped>
.logo {
  width: 100px;
  background-color: rgb(231, 49, 49);
}
</style>
