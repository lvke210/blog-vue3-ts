<template>
  <div class="wrap">
    <form id="form">
      <div>
        <input placeholder="请输入用户名" required v-model="userInfo.name" />
      </div>
      <div>
        <input
          type="password"
          placeholder="请输入密码"
          required
          v-model="userInfo.password"
        />
      </div>
      <div>
        <a-button @click="login">{{
          pageDate.isLogin ? "登陆" : "注册"
        }}</a-button>
      </div>
      <div class="footer">
        <div>忘记密码</div>
        <div @click="pageDate.isLogin = !pageDate.isLogin">
          {{ !pageDate.isLogin ? "登陆" : "注册" }}
        </div>
      </div>
    </form>
  </div>
  <div class="wrap2"></div>
  <div class="wrap3"></div>
</template>
<script lang="ts">
import { userLogin, userRegister } from "@/api";
import { message } from "ant-design-vue";
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { store } from "@/store";
interface UserInfo {
  name?: string;
  password?: string;
}
export default defineComponent({
  setup() {
    let userInfo: UserInfo = reactive({ name: "admin", password: "123456" });
    const pageDate = reactive({
      isLogin: true,
    });
    const router = useRouter();
    async function login() {
      if (!(userInfo.name && userInfo.password)) {
        return;
      }
      if (pageDate.isLogin) {
        const { data } = await userLogin(userInfo);
        if (data.status === 0) {
          data.data["tokenKey"] = data.tokenKey;
          store().user = data.data;
          userInfo = data.data;
          localStorage.setItem("token", data.tokenKey);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          router.push("/jokes");
        } else {
          message.warning(`${data.msg}`);
        }
      } else {
        const { status } = await userRegister(userInfo);
        if (status === 200) {
          message.success("注册成功");
          pageDate.isLogin = true;
        }
      }

      // localStorage.setItem("userInfo", JSON.stringify(userInfo));
      // router.push("/home");
    }

    return {
      login,
      userInfo,
      pageDate,
    };
  },
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  const formPosition: HTMLFormElement | null = document.querySelector("#form");
  if (formPosition) {
    formPosition.style.transform = `translateY(${scrollPosition * 0.8}px)`;
  }
  // formPosition.style.transform = `translate(-100%, ${scrollPosition * 0.8 + 200}px)`;
});
</script>
<style scoped>
.wrap {
  background: url("../../assets/a6.jpeg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#form {
  width: 15%;
  background: transparent;
  box-shadow: 2px 2px 5px 5px white;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  padding-top: 30px;
  margin: 10% 10% 0 0;
}
#form div {
  width: 100%;
}
input,
button {
  margin-bottom: 20px;
  outline: none;
  border: none;
  width: 100%;
  letter-spacing: 4px;
}
input::-webkit-input-placeholder {
  color: white;
}
input {
  background: transparent;
  border-bottom: 1px solid gainsboro;
  padding: 0 10% 0 10%;
  color: white;
}
button {
  border-radius: 5px;
  opacity: 0.5;
  cursor: pointer;
}
.footer {
  opacity: 0.5;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
}
.footer div {
  /* background-color: aquamarine; */
  color: azure;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
.wrap2 {
  height: 100vh;
  background: url("../../assets/a5.jpeg");
  background-size: cover;
}
.wrap3 {
  height: 100vh;
  background: url("../../assets/a1.jpeg");
  background-size: cover;
}
</style>
