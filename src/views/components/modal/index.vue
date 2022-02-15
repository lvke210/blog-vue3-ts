<template>
  <a-modal
    v-model:visible="visible"
    title="welcome"
    @ok="hdcancel"
    @cancel="hdcancel"
    :footer="null"
    width="80%"
  >
    <div class="modal">
      <WheelLucky />
    </div>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, ref, onMounted } from "vue";
import WheelLucky from "../game/wheel.vue";
export default defineComponent({
  components: { WheelLucky },
  props: ["visible2"],
  setup(props) {
    onMounted(() => {
      console.log(props, "props");
    });
    let visible = ref<boolean>(props.visible2 ?? false);
    const state = reactive({
      data: "",
    });

    function hdcancel() {
      console.log(visible.value);
      visible.value = false;
    }
    return {
      hdcancel,
      visible,
      ...toRaw(state),
    };
  },
});
</script>
<style scoped>
.modal {
  min-height: 60vh;
  width: max-content;
  margin: 0 auto;
}
</style>
