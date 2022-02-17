<template>
  <div class="title">天地逆旅 光阴过客</div>
  <a-layout-header style="z-index: 1; width: 100%; display: flex" class="flex-sb header">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      defaultSelectedKeys="1"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item v-for="(item, index) in navList" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </a-menu-item>
    </a-menu>
    <div class="userInfo">
      <a-popover placement="bottom"
        ><template #content>
          <div class="userInfo">
            <div @click="showModal">个人设置</div>
            <div @click="showConfirm">退出登陆</div>
          </div>
        </template>

        <!-- <a-upload
          v-model:file-list="fileList"
          name="file"
          :multiple="true"
          @change="handleChange"
          :customRequest="customRequest"
        >
          <a-avatar />
        </a-upload> -->
        <a-avatar :src="baseurl + userInfo.avatar" />
        {{ userInfo.name }}</a-popover
      >
    </div>
  </a-layout-header>
  <a-modal
    title="个人设置"
    style="text-align: center"
    v-model:visible="pageDate.visible"
    @cancel="pageDate.visible = false"
    @ok="changeAvatar"
  >
    <div class="imgBox">
      <img style="width: 100%" :src="baseurl + pageDate.avatar_pre" alt="" />
    </div>

    <a-upload
      v-model:file-list="fileList"
      name="file"
      @change="handleChange"
      :customRequest="customRequest"
    >
      <a-button>点击上传</a-button>
    </a-upload>
  </a-modal>
</template>
<script lang="ts">
import { uploadFile, userupdate } from "@/api";
import { ObjectMap } from "@/utils";
import { message, Modal } from "ant-design-vue";
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}
interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const navList = router.options.routes
      .find((item) => item.meta?.title === "layout")
      ?.children?.filter((item) => {
        return item.meta?.notShow !== true;
      });

    console.log(router, navList, "fqr4qt");
    const currentRoute = router.currentRoute.value;
    const index = navList?.findIndex((val) => val.path === currentRoute.path);
    const selectedKeys = ref([index]);
    const userInfo = JSON.parse(localStorage.getItem("userInfo") ?? "");
    const pageDate: any = reactive({
      visible: false,
      avatar_pre: "",
      avatar: "",
    });
    function logout() {
      localStorage.removeItem("userInfo");
      message.success("退出登陆");
      router.push("/login");
    }
    const showConfirm = () => {
      Modal.confirm({
        title: "确定要退出吗?",
        onOk() {
          logout();
        },
        onCancel() {
          console.log("Cancel");
        },
        class: "test",
      });
    };
    const handleChange = (info: FileInfo) => {
      if (info.file.status === "done") {
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} 上传失败`);
      }
    };
    const fileList = ref([]);

    async function customRequest(file: ObjectMap) {
      const formData = new FormData();
      formData.append("file", file.file);
      const { data, status } = await uploadFile(formData);
      if (data && status === 200) {
        pageDate.avatar_pre = data.data.url;

        file.onSuccess();
      } else {
        file.onError();
      }
    }
    function showModal() {
      pageDate.visible = true;
    }
    async function changeAvatar() {
      pageDate.avatar = pageDate.avatar_pre;
      userInfo.avatar = pageDate.avatar_pre;
      const { data } = await userupdate(userInfo);
      console.log(data);
      pageDate.visible = false;
    }
    return {
      showModal,
      changeAvatar,
      showConfirm,
      userInfo,
      navList,
      selectedKeys,
      customRequest,
      handleChange,
      fileList,
      pageDate,
      baseurl: "http://lvke210.com",
    };
  },
});
</script>
<style scoped>
.logo {
  width: 100px;
}
.title {
  color: white;
  font-size: 20px;
  text-align: center;
  height: 80px;
  line-height: 80px;
  background: #1abc9c;
}
.header {
  padding: 0 10%;
}
.userInfo {
  cursor: pointer;
}
.imgBox {
  width: 100px;
  height: 100px;
  background-color: rgb(228, 225, 225);
  margin: 10px auto;
}
</style>
