<template>
  <div class="col-3">
    <h3>Categories</h3>
    <ul class="nav flex-column mt-3">
      <li class="nav-item" v-for="(category, i) in categories" :key="i">
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
  computed: {
    ...mapGetters(["categories"]),
  },
};
</script>
