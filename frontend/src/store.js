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
    },
    addTodos(state, todoData) {
      if(Array.isArray(todoData)) {
        todoData.forEach(todo => state.todos.push(todo));
      } else {
        state.todos.push(todoData);
      }
    },
    deleteTodo(state, slug) {
      state.todos = state.todos.filter(todo => todo.slug !== slug);
    },
    changeCompletionStatus(state, {slug, completed}) {
      state.todos.find(todo => todo.slug == slug).completed = completed;
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

      if(user.isAuthenticated) {
        const todoRes = await Vue.axios.get(`${process.env.VUE_APP_API}/todos`);
        commit('addTodos', todoRes.data);
      }

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
    },
    async deleteTodo({commit}, slug) {
      const res = await Vue.axios.delete(`${process.env.VUE_APP_API}/todos/${slug}`);
      commit('deleteTodo', slug);
      return res.status;
    },
    async completeTodo({commit}, slug) {
      const res = await Vue.axios.put(`${process.env.VUE_APP_API}/todos/${slug}`, {
        completed: true
      });

      commit('changeCompletionStatus', {slug, completed: true});
      return res.status;
    },
    async unCompleteTodo({commit}, slug) {
      const res = await Vue.axios.put(`${process.env.VUE_APP_API}/todos/${slug}`, {
        completed: false
      });

      commit('changeCompletionStatus', {slug, completed: false});
      return res.status;
    },
    async addTodo({commit}, todo) {
      const res = await Vue.axios.post(`${process.env.VUE_APP_API}/todos`, todo);
      commit('addTodos', res.data);
    }
  }
})
