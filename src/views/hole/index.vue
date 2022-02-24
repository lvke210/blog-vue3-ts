<template>
  <div id="hole" class="content">
    <a-textarea rows="3" v-model:value="content" class="textarea"></a-textarea>
    <a-button class="btn" type="primary" @click="hdClick">仍进洞里</a-button>
    <div v-for="item in pageData.list" :key="item.id" class="block">
      <div class="flex block-content">
        <div
          class="block-right"
          style="text-align: left; padding-left: 30px; white-space: pre-wrap"
        >
          {{ item.content }}
        </div>
      </div>
      <div class="block-footer">---{{ formatDate(new Date(item.create_time ?? "")) }}---</div>
    </div>
  </div>
</template>
<script lang="ts">
import { addMsg, getMsgList, delMsg } from "../../api";
import { formatDate } from "../../utils";
import { message } from "ant-design-vue";
import { defineComponent, onMounted, reactive, ref } from "vue";
interface List {
  id: number;
  content: string;
  create_time?: string;
}
interface PageData {
  list: Array<List>;
}
export default defineComponent({
  setup() {
    let content = ref<string>("");
    const pageData: PageData = reactive({
      list: [],
    });
    async function hdClick() {
      const create_time = new Date();
      const param = {
        content: content.value,
        create_time,
      };
      const { status } = await addMsg(param);
      if (status === 200) {
        getMsg();
        content.value = "";
        message.success("百步穿杨");
      }
    }

    onMounted(() => {
      getMsg();
    });
    function getMsg() {
      getMsgList().then((res: any) => {
        pageData.list = res.data.data;
      });
    }
    return {
      hdClick,
      content,
      pageData,
      formatDate,
    };
  },
});
</script>

<style>
.btn {
  margin-top: 20px;
}

.block {
  margin: 20px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgb(219, 217, 217);
}
.block:hover {
  box-shadow: 1px 1px 5px rgb(168, 166, 166);
}
.block:hover .delete {
  display: inline;
}
.block .block-content {
  flex: 1;
}

.block-title {
  font-size: 20px;
  padding: 5px;
}
.block-left {
  text-align: center;
  padding: 5px;
  margin-top: 10px;
}
.block-right {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding: 5px;
  font-size: 12px;
}
.block-footer {
  text-align: right;
  padding: 5px;
  font-size: 12px;
  opacity: 0.8;
}
.textarea {
  opacity: 0.8;
}
.delete {
  cursor: pointer;
  text-decoration-line: underline;
  display: none;
}
</style>
