import { defineStore } from "pinia";

export const store = defineStore("main", {
  state: () => {
    return {
      isDark: false,
      user: {},
    };
  },
});
