<template>
  <div class="row mt-3">
    <categories-list :cat="cat" />
    <div class="col-9">
      <div class="row">
        <div class="col-4 mt-3" v-for="(p, index) in products" :key="index">
          <p>
            <img :src="'/media/products/' + p.image" class="img-fluid" />
          </p>
          <h3>{{ p.name }}</h3>
          <p>{{ p.description }}</p>
          <p>{{ p.price | currency }}</p>
          <p>
            <button class="btn btn-primary">Add to card</button>
          </p>
        </div>
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

  data() {
    return {
      cat: "",
    };
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
    this.cat = category;
    console.log(this.cat);
  },
  beforeRouteUpdate(to, from, next) {
    this.setProductsByCategoryActions(to.params.category);
    this.cat = to.params.category;
    console.log(this.cat);
    next();
  },
};
</script>
