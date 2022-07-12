<template>
  <div class="product-card">
    <div class="product-tumb">
      <img :src="product.image" alt="" />
    </div>
    <div class="product-details">
      <span class="product-catagory">{{ product.category }}</span>
      <h4>
        <a type="button" class="go-detail-pointer" @click="goDetail(product.id)">{{ product.title }}</a>
      </h4>
      <p class="limit-description">
        {{ product.description }}
      </p>
      <div class="product-bottom-details">
        <div class="product-price">${{ product.price }}</div>
        <div class="product-links">
          <a href="">Like {{ product.rating.rate }}</a>
          <a href="">Terjual {{ product.rating.count }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
  methods: {
    goDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>
