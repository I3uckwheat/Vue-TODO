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
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('username', userDetails.username);

      state.isAuthenticated = userDetails.isAuthenticated;
      state.username = userDetails.username;
    },
    logout(state) {
      localStorage.setItem('isAuthenticated', false);
      localStorage.setItem('username', null);

      state.isAuthenticated = false;
      state.username = null;
      state.todos = [];
    }
  },
  actions: {
    async initialize({commit}) {
      // To prevent flashing on page load if logged in in the past
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if(isAuthenticated) {
        commit('login', {
          isAuthenticated: true,
          username: localStorage.getItem('username')
        });
      }

      // Validate that localStorage is correct
      const res = await Vue.axios.get(`${process.env.VUE_APP_API}/user`);
      const user = res.data;
      commit('login', {
        isAuthenticated: user.isAuthenticated,
        username: user.username || null
      });

      // TODO proceed to get TODOs
    },
    async login({commit}, details) {
      commit('login', {
        isAuthenticated: true,
        username: details.username
      });

    },
    async logout({commit}) {
      await Vue.axios.post(`${process.env.VUE_APP_API}/user/logout`);
      commit('logout');
    }
  }
})
