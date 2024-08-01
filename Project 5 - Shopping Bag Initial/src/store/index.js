import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products){
      state.products = products;
    }
  },
  actions: {
    async loadProducts({commit}){
      const resp = await axios.get('https://fakestoreapi.com/products');
      commit('setProducts', resp.data);
    }
  },
  modules: {
  }
})
