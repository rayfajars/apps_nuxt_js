<template>
  <div>
    <ProductDetail :products="products" :rate="rate" :count="count"/>
    <h2>Related <strong>Products</strong></h2>
    <div class="grid-container">
      <template v-for="(product, index) in relatedProduct">
        <div class="column" v-if="product.id != products.id">
          <CardProduct :product="product" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import ProductDetail from "../../components/ProductDetail.vue";
export default {
  name: "DetailProduct",
  data() {
    return {
      products: [],
      apiSelected: "",
      apiProducts: `https://fakestoreapi.com/products`,
      apiProductSelectedCategory: `https://fakestoreapi.com/products/category/`,
      id: this.$route.params.detailproduct,
      rate: 0,
      count: 0,
      relatedProduct: [],
    };
  },
  methods: {
    async getProduct() {
      const data = await this.$axios.$get(this.apiSelected);
      this.products = data;
      this.rate = data.rating.rate;
      this.count = data.rating.count;
      this.getRelatedProduct(data.category);
    },
    async getRelatedProduct(category) {
      const data = await this.$axios.$get(
        this.apiProductSelectedCategory + category + "?limit=5"
      );
      this.relatedProduct = data;
    },
  },
  mounted() {
    this.apiSelected = this.apiProducts + `/${this.id}`;
    this.getProduct();
  },
  components: { ProductDetail },
};
</script>

<style>
.product-card-detail {
  width: 100%;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  margin: 50px auto;
  background: #00454e;
}

.grid-detail {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  padding: 10px;
}

.product-tumb-detail {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  padding: 50px;
  background: #fff;
}

.product-tumb-detail img {
  max-width: 500px;
  max-height: 500px;
}
</style>
