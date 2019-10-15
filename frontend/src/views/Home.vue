<template>
  <div class="login-container" v-if="!$store.state.isAuthenticated"> <!-- If not logged in -->
    <p class="center-text">A place to track your todos, but made in Vue!</p>
    <div class="login-register-container">
      <login-register></login-register>
    </div>
  </div>

  <div class="todo-container" v-else> <!-- if logged in, show TODOs -->
    <button @click="$store.dispatch('logout')">logout</button>
    <div v-for="todo in $store.state.todos" :key="todo.slug">
      <p>Entered: {{todo.entered}}</p>
      <p>due: {{todo.due}}</p>
      <p>completion status: {{todo.completed}}</p>
      <p>title: {{todo.title}}</p>
      <p>body: {{todo.body}}</p>
      <p>slug: {{todo.slug}}</p>
      <br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginRegister from "@/components/LoginRegister";

export default {
  name: 'home',
  components: {
    LoginRegister
  }
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