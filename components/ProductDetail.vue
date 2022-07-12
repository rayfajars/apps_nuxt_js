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
            <button class="btn btn-success btn-sm float-right" type="submit">
              Pesan
            </button>
            <button class="btn btn-success btn-sm float-right" type="submit">
              Wishlist
            </button>
          </div>
        </div>

        <!-- <form class="mt-3" v-on:submit.prevent>
          <div class="mb-3 form-group">
            <label for="jumlah_pesanan" class="form-label"
              >Jumlah Pesanan :
            </label>
            <input
              type="number"
              class="form-control"
              id="jumlah_pesanan"
              min=""
            />
          </div>
          <div class="mb-3 form-group">
            <label for="keterangan" class="form-label"
              >Keterangan Pesanan :
            </label>
            <textarea
              name="keterangan"
              id="keterangan"
              class="form-control"
              placeholder="Keterangan spt: Pedas, Nasi setengah .."
              cols="20"
              rows="5"
            ></textarea>
          </div>

          <button class="btn btn-success btn-sm float-right" type="submit">
            Pesan
          </button>
        </form> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: ["products", "count", "rate"],
};
</script>
