import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3500";
const pagesUrl = `${baseUrl}/pages`;
const categoriesUrl = `${baseUrl}/categories`;

export default new Vuex.Store({
  strict: true,
  state: {
    pages: [],
    categoriesList: [],
  },
  getters: {
    categories: (state) => ["All", ...state.categoriesList],
  },
  mutations: {
    setPages(state, pages) {
      console.log(state);
      console.log(pages);
      state.pages = pages;
    },
    setCategories(state, categories) {
      state.categoriesList = categories;
    },
  },
  actions: {
    async setPagesActions(contex) {
      contex.commit("setPages", (await Axios.get(pagesUrl)).data);
    },
    async setCategoriesActions(contex) {
      contex.commit("setCategories", (await Axios.get(categoriesUrl)).data);
    },
  },
});
