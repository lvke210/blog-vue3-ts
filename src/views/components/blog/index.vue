<template>
  <!-- <Editor height="200" /> -->
  <div class="container">
    <a-list :data-source="data" :pagination="pagination">
      <template #renderItem="{ item }">
        <router-link :to="`/blog/detail/${item.id}`">
          <a-card style="cursor: pointer">
            <a-list-item>
              <a-list-item-meta :title="item.title">
                <template #description>
                  <div class="blogList" v-html="item.content"></div>
                  <!-- <pre>
                  <code>
                    {{item.content}}
                  </code>
                </pre> -->
                </template>
              </a-list-item-meta>
              <div class="block-footer">
                ---{{ item.create_time ? formatDate(new Date(item.create_time ?? "")) : "" }}---
              </div>
            </a-list-item>
          </a-card>
        </router-link>
      </template>
    </a-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { getArticleList } from "../../../api";
import { formatDate } from "../../../utils";
export default defineComponent({
  setup() {
    const state = reactive({
      data: [],
    });
    const pagination = {
      // onChange: (page: number) => {
      //   console.log(page);
      // },
      pageSize: 5,
    };
    onMounted(async () => {
      const { data } = await getArticleList();
      state.data = data.data;
    });

    return {
      formatDate,
      pagination,
      ...toRefs(state),
    };
  },
});
</script>
<style scoped>
.container {
  margin: 0 auto;
  width: 70vw;
}
.blogList {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-height: 70px;
}
</style>
