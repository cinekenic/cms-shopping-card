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
    currentPage: 1,
    pageCount: 0,
    pageSize: 4,
    currentCategory: "All",
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

    setPageCount(state, count) {
      state.pageCount = Math.ceil(Number(count) / state.pageSize);
    },

    setCurrentPage(state, page) {
      state.currentPage = page;
    },

    setCurrentCategory(state, category) {
      state.currentCategory = category;
    },
  },
  actions: {
    async setPagesActions(contex) {
      contex.commit("setPages", (await Axios.get(pagesUrl)).data);
    },
    async setCategoriesActions(contex) {
      contex.commit("setCategories", (await Axios.get(categoriesUrl)).data);
    },
    async setProductsByCategoryActions(context, category) {
      let url;
      if (category !== "All") {
        url =
          productsUrl +
          `?category=${category}&_page=${context.state.currentPage}&_limit=${context.state.pageSize}`;
      } else {
        url =
          productsUrl +
          `?_page=${context.state.currentPage}&_limit=${context.state.pageSize}`;
      }

      let response = await Axios.get(url);
      //get total numbers of items from some url in json server
      context.commit("setPageCount", response.headers["x-total-count"]);

      context.commit("setProducts", (await Axios.get(url)).data);

      console.log(context.state.pageCount);
    },

    async setProductsByCategoryPaginationActions(context, page) {
      let url;
      if (context.state.currentCategory !== "All") {
        url =
          productsUrl +
          `?category=${context.state.currentCategory}&_page=${page}&_limit=${context.state.pageSize}`;
      } else {
        url = productsUrl + `?_page=${page}&_limit=${context.state.pageSize}`;
      }

      context.commit("setProducts", (await Axios.get(url)).data);
    },
  },
});
