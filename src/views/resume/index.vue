<template>
  <div class="resume_container">
    <div class="resume_item">第一页</div>
    <div class="resume_item">第二页</div>
    <div ref="third" class="resume_item">第三页</div>
  </div>
  <svg
    v-show="showCloseBtn"
    class="icon resume_icon"
    width="50px"
    height="50px"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    @click="closeToIndex"
  >
    <path
      fill="#333333"
      d="M915.746268 0h-807.911811C48.273134 0 0 48.482772 0 107.834457v807.911811c0 59.561323 48.482772 107.834457 107.834457 107.834456h807.911811c59.561323 0 107.834457-48.482772 107.834456-107.834456v-807.911811c0-59.343622-48.482772-107.834457-107.834456-107.834457z m56.634456 915.746268c0 31.139276-25.495181 56.634457-56.634456 56.634456h-807.911811c-31.139276 0-56.634457-25.495181-56.634457-56.634456v-807.911811c0-31.139276 25.495181-56.634457 56.634457-56.634457h807.911811c31.139276 0 56.634457 25.495181 56.634456 56.634457v807.911811zM666.648189 356.948661a25.479055 25.479055 0 0 0-36.154457 0L511.790362 475.635906 393.086992 356.948661a25.479055 25.479055 0 0 0-36.146394 0 25.479055 25.479055 0 0 0 0 36.146394L475.635906 511.790362 356.948661 630.493732a25.479055 25.479055 0 0 0 0 36.154457 25.454866 25.454866 0 0 0 18.173985 7.522772c6.692283 0 13.166866-2.507591 18.182047-7.522772L512 547.944819 630.70337 666.648189a25.454866 25.454866 0 0 0 18.182047 7.522772c6.68422 0 13.158803-2.507591 18.173985-7.522772a25.479055 25.479055 0 0 0 0-36.154457L547.944819 511.790362 666.648189 393.086992a25.479055 25.479055 0 0 0 0-36.146394z"
    />
  </svg>
  <a-button class="goBack" v-show="showCloseBtn" @click="closeToIndex"
    >Go Back</a-button
  >
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    onMounted(() => {
      const inters = new IntersectionObserver(
        (entries) =>
          (showCloseBtn.value = entries[0].isIntersecting ? true : false),
        {
          threshold: [1],
        }
      );
      inters.observe(third.value);
    });
    let showCloseBtn = ref(false);
    const third = ref<Element>(null as any);
    const router = useRouter();
    function closeToIndex() {
      router.push({
        path: "/blog",
      });
    }
    return {
      showCloseBtn,
      third,
      closeToIndex,
    };
  },
});
</script>
<style scoped>
.resume_container::-webkit-scrollbar {
  width: 0 !important;
}
.resume_container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  box-sizing: border-box;
}

.resume_item {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}
.resume_item:nth-child(1) {
  background-color: rgb(145, 236, 145);
}
.resume_item:nth-child(2) {
  background-color: rgb(221, 238, 144);
}
.resume_item:nth-child(3) {
  background-color: rgb(144, 182, 238);
}
.resume_icon {
  position: absolute;
  right: 30px;
  top: 25px;
  z-index: 9999;
  cursor: pointer;
  transition: 0.5s;
}
.goBack {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0px);
  z-index: 999;
  opacity: 0.8;
  border-radius: 5px;
}
</style>
