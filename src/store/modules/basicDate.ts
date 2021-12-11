const state = {
  isDark: false,
};

const actions = {
  changeTheme: function (context: any, value: boolean) {
    console.log("actions", value);
    context.commit("CHANGETHEME", value);
    // CHANGETHEME(data)
  },
};

const mutations = {
  CHANGETHEME: function (state: any, value: boolean) {
    console.log("mutations", value);
    state.isDark = value;
  },
};

export default { state, actions, mutations };
