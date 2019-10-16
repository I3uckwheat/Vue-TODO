import Vue from 'vue'
import store from "./store"
import Router from 'vue-router'

import Home from './views/Home.vue'
import NewTodo from './views/NewTodo'
import EditTodo from './views/EditTodo'
import ErrorHandler from './views/ErrorHandler'

Vue.use(Router)

async function initialize() {
  if(!store.state.initialized) {
    await store.dispatch('initialize');
  } 
}

function authGuard(to, from, next) {
  if(store.state.isAuthenticated) {
    next();
  } else {
    next('error/401');
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorHandler,
    },
    {
      path: '/error/:errCode',
      name: 'ErrorCode',
      component: ErrorHandler,
    },
    {
      path: '/new-todo',
      name: 'NewTodo',
      component: NewTodo,
      beforeEnter: authGuard
    },
    {
      path: '/:slug/edit',
      name: 'EditTodo',
      component: EditTodo,
      beforeEnter(to, from, next) {
        if(!store.state.isAuthenticated) {
          next('/error/401');
        } else if(!store.getters.getTodoBySlug(to.params.slug)) {
          next('/error/404');
        } else {
          next();
        }
      }
    },   
    {
      path: '*',
      name: '404',
      component: ErrorHandler
    }   
  ]
});

router.beforeEach(async (to, from, next) => {
  await initialize();
  next();
});

export default router;