import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencies: [],
  },
  mutations: {
    setcurrencies(state, currencies) {
      state.currencies = currencies;
    },
  },
  actions: {
    async fetchCurrency({ commit }) {
      try {
        const response = await axios.get("http://localhost:8000/api/currency");
        commit("setcurrencies", response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    // definisikan getters di sini
  },
});
