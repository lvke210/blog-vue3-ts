<template>
  <div class="_sider">
    <img src="@/assets/3.gif" alt="" />

    <div id="test">
      <div id="hatbox">
        <div id="hat" :class="hidden ? 'hidden' : ''"></div>
      </div>

      <div id="light" @click="changeTheme()">
        <div id="hat" :class="!hidden ? 'hidden' : ''"></div>
      </div>
    </div>

    <audio id="audio" autoplay="true" controls>
      <source src="@/assets/Aloha.mp3" />
    </audio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const hidden = ref(false);
    const store = useStore();
    function changeTheme() {
      hidden.value = !hidden.value;
      store.dispatch("changeTheme", hidden.value);
    }
    return {
      changeTheme,
      hidden,
    };
  },
});
</script>

<style scoped>
._sider {
  width: 300px;
  padding: 24px;
  margin-left: 5px;
}
._sider img,
audio {
  width: 100%;
}

#test {
  display: flex;
  position: fixed;
  top: 10px;
  right: 10%;
  z-index: 2;
  height: 50px;
}

#test:hover::after {
  content: "戴上?";
  position: absolute;
  font-size: 12px;
  margin-left: 60px;
  margin-top: 50px;
  color: aliceblue;
}
#hatbox {
  width: 100px;
  height: 50px;
}
#hat {
  width: 100%;
  height: 100%;
  background: url("../../assets/hat.png") no-repeat;
  background-size: contain;
}
#light {
  width: 100%;
  height: 50px;
  background: url("../../assets/light.png") no-repeat;
  background-size: contain;
  cursor: pointer;
}
.hidden {
  display: none;
}
</style>
