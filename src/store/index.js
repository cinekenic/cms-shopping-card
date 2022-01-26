import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3500";
const pagesUrl = `${baseUrl}/pages`;
const categoriesUrl = `${baseUrl}/categories`;
const productsUrl = `${baseUrl}/products`;

export default new Vuex.Store({
  strict: true,
  state: {
    pages: [],
    categoriesList: [],
    products: [],
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
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async setPagesActions(contex) {
      contex.commit("setPages", (await Axios.get(pagesUrl)).data);
    },
    async setCategoriesActions(contex) {
      contex.commit("setCategories", (await Axios.get(categoriesUrl)).data);
    },
    async setProductsByCategoryActions(contex, category) {
      let url;
      if (category !== "All") {
        url = productsUrl + `?category=${category}`;
      } else {
        url = productsUrl;
      }
      contex.commit("setProducts", (await Axios.get(url)).data);
    },
  },
});
