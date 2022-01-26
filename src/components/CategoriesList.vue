<template>
  <div class="col-3">
    <h3>Categories</h3>
    <ul class="nav flex-column mt-3">
      <li
        class="nav-item"
        v-for="(category, i) in categories"
        :key="i"
        :class="{ active: cat === category }"
      >
        <router-link class="nav-link" :to="'/categories/' + category">
          {{ category }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["cat"],
  computed: {
    ...mapGetters(["categories"]),
  },
};
</script>

<style scoped>
li.active a,
li:hover a {
  background: #007bff;
  color: white;
}
</style>
