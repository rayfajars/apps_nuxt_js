<template>
  <div class="container">
    <NavBar />
    <button
      class="button button-category"
      :class="getClickCategory == '' ? 'button-selected' : ''"
      @click="categoryClick('')"
    >
      All
    </button>
    <template v-for="(category, index) in categorys">
      <button
        class="button button-category"
        :class="getClickCategory == category ? 'button-selected' : ''"
        @click="categoryClick(category)"
      >
        {{ category }}
      </button>
    </template>

    <div v-if="loading == true" class="loading-page">
      <Loading />
    </div>
    <div v-if="loading == false" class="grid-container">
      <template v-for="(product, index) in products">
        <div class="column">
          <CardProduct :product="product" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      products: [],
      categorys: [],
      limit: 8,
      apiSelected: "",
      apiProducts: this.$axios.defaults.baseURL,
      apiCategory: this.$axios.defaults.baseURL + `/categories`,
      apiProductSelectedCategory: this.$axios.defaults.baseURL + `/category/`,
      getClickCategory: "",
      loading: false,
    };
  },
  methods: {
    // ...mapActions({
    //   getProducts: "product/getProducts",
    // }),
    async getProduct() {
      this.loading = true;
      const data = await this.$axios.$get(this.apiSelected, { progress: true });
      // console.log(data);

      if (data) {
        this.products = data;
        this.loading = false;
      }
    },
    async getCategory() {
      this.categorys = await this.$axios.$get(this.apiCategory);
    },
    categoryClick(data) {
      if (data) {
        this.apiSelected =
          this.apiProductSelectedCategory + data;
      } else {
        this.apiSelected = this.apiProducts;
      }

      this.getClickCategory = data;
      this.getProduct();
    },
  },
  mounted() {
    this.apiSelected = this.apiProducts;
    this.getProduct();
    this.getCategory();
  },
  //  created() {
  //       this.getProducts()
  //   },
  //   computed: {
  //       ...mapGetters('product', [ 'productsArray' ]),
  //   },
};
</script>
