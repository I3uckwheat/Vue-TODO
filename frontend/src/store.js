import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    username: null,
    todos: [],
  },
  mutations: {
    login(state, userDetails) {
      state.isAuthenticated = userDetails.isAuthenticated;
      state.username = userDetails.username;
    }
  },
  actions: {
    async login({commit}, details) {
      commit('login', {
        isAuthenticated: true,
        username: details.username
      });

      // Proceed to get TODOs 
    }
  }
})
