<template>
  <div class="container">
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

    <div class="grid-container">
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
      apiProducts: `https://fakestoreapi.com/products`,
      apiCategory: "https://fakestoreapi.com/products/categories",
      apiProductSelectedCategory: `https://fakestoreapi.com/products/category/`,
      getClickCategory: "",
    };
  },
  methods: {
    async getProduct() {
      const data = await this.$axios.$get(this.apiSelected);

      this.products = data;
    },
    async getCategory() {
      this.categorys = await this.$axios.$get(this.apiCategory);
    },
    categoryClick(data) {
      if (data) {
        this.apiSelected =
          this.apiProductSelectedCategory + data + `?limit=${this.limit}`;
      } else {
        this.apiSelected = this.apiProducts + `?limit=${this.limit}`;
      }

      this.getClickCategory = data;
      this.getProduct();
    },
  },
  mounted() {
    this.apiSelected = this.apiProducts + `?limit=${this.limit}`;
    this.getProduct();
    this.getCategory();
  },
};
</script>
