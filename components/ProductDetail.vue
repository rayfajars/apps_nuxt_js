<template>
  <div class="product-card-detail">
    <div class="grid-detail">
      <div class="product-tumb-detail">
        <img :src="products.image" alt="" />
      </div>
      <div class="product-details">
        <span class="product-catagory">{{ products.category }}</span>
        <h4>
          <a href="" class="go-detail">{{ products.title }}</a>
        </h4>
        <p>
          {{ products.description }}
        </p>
        <div class="product-bottom-details">
          <div class="product-price">${{ products.price }}</div>
          <div class="product-links">
            <a href="">Like {{ rate }}</a>
            <a href="">Terjual {{ count }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: ["products",'count','rate'],
};
</script>

<style></style>
