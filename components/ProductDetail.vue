<template>
  <div class="product-card-detail">
    <div class="grid-detail">
      <div class="product-tumb-detail">
        <img :src="products.image" alt="" />
      </div>
      <div class="product-details">
        <span class="product-catagory-detail">{{ products.category }}</span>
        <span class="product-title">
          {{ products.title }}
        </span>
        <p>
          {{ products.description }}
        </p>
        <div class="product-bottom-details">
          <div class="product-price">${{ products.price }}</div>
          <div class="product-links">
            <a href="">Rate {{ rate }}</a>
            <a href="">Sold {{ count }}</a>
          </div>
        </div>

        <div class="grid-detail margin-top">
          <div class="mb-3 form-group"></div>

          <div>
            <button @click="addTrolly" class="float-right">Pesan</button>
            <button
              @click="addWishlist"
              class="btn btn-success btn-sm float-right"
              type="submit"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductDetail",
  props: ["products", "count", "rate"],
  fetch({ store }) {
    store.commit("addTrolly");
    store.commit("addWishlist");
  },
  // computed: mapState(["trolly"]),
  methods: {
    addTrolly() {
      this.alertSwal("Trolly");
      this.$store.commit("addTrolly");
    },
    addWishlist() {
      this.alertSwal("Wish List");
      this.$store.commit("addWishlist");
    },
    alertSwal(type) {
      this.$swal({
        type: "success",
        title: `Berhasil menambahkan product ke dalam ${type}`,
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>
