<template>
  <!-- <div>
    {{ products }}
    <CardProduct />
  </div> -->

  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <div v-else>
      <!-- <li v-for="(mountain, index) in mountains" :key="index">
        {{ mountain.title }}
      </li> -->
      <template v-for="(product, index) in products" >
        <CardProduct :product="product"/>
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
    };
  },
  // methods: {
  // async fetchSomething() {
  //   const ip = await this.$axios.$get("https://fakestoreapi.com/products");
  //   this.products = ip;
  // },

  async fetch() {
    this.products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );

    console.log(this.products)
  },
};
</script>
