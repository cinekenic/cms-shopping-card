import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3500";
const pagesUrl = `${baseUrl}/pages`;

export default new Vuex.Store({
  strict: true,
  state: {
    pages: [],
  },
  getters: {},
  mutations: {
    setPages(state, pages) {
      state.pages = pages;
    },
  },
  actions: {
    async setPagesActions(contex) {
      contex.commit("setPages", (await Axios.get(pagesUrl)).data);
    },
  },
});
