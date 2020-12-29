import { createStore } from 'vuex';

export default createStore({
  state: {
    chatId: {
      item: null,
      index: null,
    },
  },
  mutations: {
    selectChatId(state, { item, index }) {
      state.chatId.item = item;
      state.chatId.index = index;
    },
  },
  actions: {},
  modules: {},
});
