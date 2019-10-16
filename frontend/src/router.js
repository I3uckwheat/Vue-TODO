import Vue from 'vue'
import store from "./store"
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewTodo from './views/NewTodo'
import EditTodo from './views/EditTodo'

Vue.use(Router)

async function initialize() {
  if(!store.state.initialized) {
    await store.dispatch('initialize');
  } 
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      async beforeEnter(to, from, next) {
        await initialize()
        next();
      }
    },
    {
      path: '/new-todo',
      name: 'NewTodo',
      component: NewTodo,
      async beforeEnter(to, from, next) {
        await initialize()
        next();
      }
    },
    {
      path: '/:slug/edit',
      name: 'EditTodo',
      component: EditTodo,
      async beforeEnter(to, from, next) {
        await initialize()
        next();
      }
    }   
  ]
});
