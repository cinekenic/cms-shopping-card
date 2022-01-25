<template>
  <div class="row mt-3">
    <CategoriesList />
    <div class="col-9">
      {{ pageContent }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CategoriesList from "./CategoriesList.vue";

export default {
  components: {
    CategoriesList,
  },
  computed: {
    ...mapState(["pages"]),
    pageContent() {
      let slug = this.$route.params.slug ? this.$route.params.slug : "home";
      let page = this.pages.find((page) => page.slug == slug);
      console.log(slug);
      if (page) {
        console.log(page.content);
        return page.content;
      }
      return "";
    },
  },
};
</script>
