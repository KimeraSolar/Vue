import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    setProducts(state, products){
      state.products = products;
    },

    setBag(state, bag){
      state.productsInBag = bag;
    }
  },
  actions: {
    async loadProducts({commit}){
      const resp = await axios.get('https://fakestoreapi.com/products');
      commit('setProducts', resp.data);
    },

    addToBag({commit, state}, product){
      if(!state.productsInBag.find(prod => prod.id === product.id))
        commit('setBag', [...state.productsInBag, product]);
    },

    removeFromBag({commit, state}, product){
      commit('setBag', state.productsInBag.filter(prod => prod.id !== product.id));
    },

    setQuantity({commit, state}, {product, newQuantity}){
      const newProductsBag = state.productsInBag.map(prod => {
        if(prod.id === product.id)
          return {...prod, quantity: newQuantity};
        return prod;
      });
      commit('setBag', newProductsBag);
    }
  },
  modules: {
  }
})
