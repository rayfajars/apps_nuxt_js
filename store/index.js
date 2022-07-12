export const state = () => ({
  productsArray: [],
  wishlist: 0,
  trolly: 0,
  // apiProducts: this.$axios.defaults.baseURL,
  // apiCategory: this.$axios.defaults.baseURL + `/categories`,
  // apiProductSelectedCategory: this.$axios.defaults.baseURL + `/category/`,
});

export const getters = {
  productsArray(state) {
    return state.productsArray;
  },
};
export const mutations = {
  setProducts(state, value) {
    state.productsArray = value;
  },
  addTrolly(state) {
    state.trolly++;
  },
  addWishlist(state) {
    state.wishlist++;
  },
};

export const actions = {
  async getProducts({ commit }) {
    const productsArray = await this.$axios.$get(this.$axios.defaults.baseURL);
    console.log(productsArray);
    commit("setProducts", productsArray);
  },
};
