<template>
  <div class="float-right count-navbar">
    <a class="active">Wishlist <span>{{wishlist}}</span></a>
    <a class="active">Trolly <span>{{trolly}}</span></a>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["trolly",'wishlist']),
};
</script>

<style>
.count-navbar a span {
  font-size: 12px;
  color: #fbb72c;
}
</style>
