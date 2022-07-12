<template>
  <div>
    <NavBarDetail />
    <ProductDetail :products="products" :rate="rate" :count="count" />
    <h2 class="hr-bottom-full">Related <strong>Products</strong></h2>
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
import NavBarDetail from "../../components/NavBarDetail.vue";
export default {
  name: "DetailProduct",
  data() {
    return {
      products: [],
      apiSelected: "",
      apiProducts: this.$axios.defaults.baseURL,
      apiProductSelectedCategory: this.$axios.defaults.baseURL + `/category/`,
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
  components: { ProductDetail, NavBarDetail },
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

.product-details .product-title {
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #c7f291;
  text-decoration: none;
  transition: 0.3s;
  font-size: 32px;
}

.product-catagory-detail {
  display: block;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 18px;
}

.hr-bottom-full {
  overflow: hidden;
  border-bottom: 1px solid #000;
  padding-bottom: 20px;
}

.margin-top {
  margin-top: 25%;
}
</style>
