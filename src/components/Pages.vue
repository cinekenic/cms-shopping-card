<template>
  <div class="row mt-3">
    <div class="col">categories</div>
    <div class="col-9">
      {{ pageContent }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import Header from "./components/Header.vue";

export default {
  components: {},
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
