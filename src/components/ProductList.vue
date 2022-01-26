<template>
  <div class="row mt-3">
    <CategoriesList />
    <div class="col-9">
      <div class="col-4 mt-3" v-for="(p, index) in products" :key="index">
        <p>image</p>
        <h3>{{ p.name }}</h3>
        <p>{{ p.description }}</p>
        <p>{{ p.price }}</p>
        <button class="btn-block btn btn-primary">Add to card</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CategoriesList from "./CategoriesList.vue";

export default {
  components: {
    CategoriesList,
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["setProductsByCategoryActions"]),
  },
  created() {
    let category = this.$route.params.category;
    this.setProductsByCategoryActions(category);
  },
  beforeRouteUpdate(to, from, next) {
    this.setProductsByCategoryActions(to.params.category);
    next();
  },
};
</script>
