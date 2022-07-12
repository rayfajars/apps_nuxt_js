<template>
  <div class="navbar" id="mynavbar">
    <CountNavbar />
  </div>
</template>

<script>
import BackNavbar from "./BackNavbar.vue";
import CountNavbar from "./CountNavbar.vue";
export default { components: { BackNavbar, CountNavbar } };
</script>

<style>
.navbar {
  overflow: hidden;
  /* background-color: #333; */
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background-color: #ddd;
  color: #fbb72c;
}

.navbar a.active {
  /* background-color: #04aa6d; */
  color: #00454e;
}

.navbar .icon {
  display: none;
}

.float-right {
  float: right;
}

a.nuxt-link-active {
  font-weight: bold;
  color: #00454e;
}
</style>
