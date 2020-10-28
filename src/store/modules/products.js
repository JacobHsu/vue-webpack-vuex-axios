import shop from "@/api/shop";
import Request from '@/api/request'

const state = {
  items: [],
  itemsMore: []
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
  setMoreProducts(state, products) {
    // update products
    state.itemsMore = products;
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
  },
  fetchRequest({ commit }, payload) {
    return Request({ commit }, "setMoreProducts", {
      url: 'api/xxx',
      body: payload,
      method: 'POST',
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
