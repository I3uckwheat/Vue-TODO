<template>
  <div class="login-container" v-if="!$store.state.isAuthenticated"> <!-- If not logged in -->
    <p class="center-text">A place to track your todos, but made in Vue!</p>
    <div class="login-register-container">
      <login-register></login-register>
    </div>
  </div>

  <div class="todo-container" v-else> <!-- if logged in, show TODOs -->
    <button @click="$store.dispatch('logout')">logout</button>
    <br>
    <router-link to="/new-todo"><button>Add new task</button></router-link>
    <label> Show Completed Tasks
      <input type="checkbox" v-model="showComplete" />
    </label>
    <div v-for="todo in $store.state.todos" :key="todo.slug">
      <todo v-if="!todo.completed || showComplete" :todo="todo"></todo>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginRegister from "@/components/LoginRegister";
import Todo from "@/components/Todo";

export default {
  name: 'home',
  data() {
    return {
      showComplete: false
    }
  },
  components: {
    LoginRegister,
    Todo
  },
}
</script>

<style scoped>
  .login-container {
    width: 30%;
  }

  .todo-container {
    width: 100%;
  }

  .center-text {
    text-align: center;
  }
</style>