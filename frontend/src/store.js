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
    async initialize({commit, dispatch}) {
      try {
        const res = await Vue.axios.get('http://localhost:3000/user');
        const user = res.data;
        if(!user.isAuthenticated) return;
        commit('login', {
          isAuthenticated: true,
          username: user.username
        });

        // TODO proceed to get TODOs
      } catch(err) {
        console.log(err);
      }
    },
    async login({commit, dispatch}, details) {
      commit('login', {
        isAuthenticated: true,
        username: details.username
      });

      // Proceed to get TODOs 
    }
  }
})
