import shop from "@/api/shop";

const state = {
  items: []
};

const getters = {
  availableProducts(state, getters) {
    return state.items.filter(product => product.inventory > 0);
  },

  productIsInStock() {
    return product => {
      return product.inventory > 0;
    };
  }
};

const mutations = {
  setProducts(state, products) {
    // update products
    state.items = products;
  },

  decrementProductInventory(state, product) {
    product.inventory--;
  }
};

const actions = {
  fetchProducts({ commit }) {
    return new Promise((resolve, reject) => {
      // make the call
      // call setProducts mutation
      shop.getProducts(products => {
        commit("setProducts", products);
        resolve();
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
