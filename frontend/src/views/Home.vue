<template>
  <div class="login-container" v-if="!$store.state.isAuthenticated"> <!-- If not logged in -->
    <p class="center-text">A place to track your todos, but made in Vue!</p>
    <div class="login-register-container">
      <login-register></login-register>
    </div>
  </div>

  <div class="todo-container" v-else> <!-- if logged in, show TODOs -->
    <router-link to="/new-todo"><button>Add new task</button></router-link>

    <label for="sorting">Sort By: </label>
    <select id="sorting" v-model="sorting">
      <option value="due">Date Due</option>
      <option value="created">Date Created</option>
    </select>

    <label> Show Completed Tasks
      <input type="checkbox" v-model="showComplete" />
    </label>

    <transition-group name="list" tag="div">
        <todo 
          v-for="todo in sortedTodos" 
          :key="todo.slug" 
          class="list-item" 
          :todo="todo"></todo>
    </transition-group>
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
      showComplete: false,
      sorting: "due"
    }
  },
  computed: {
    filteredTodos() {
      return this.$store.state.todos.filter(todo => {
        return !todo.completed || this.showComplete
      })
    },
    sortedTodos() {
      const sortedTodos = [...this.filteredTodos];
      sortedTodos.sort((a, b) => {
        if(this.sorting === 'created') {
          return new Date(a.created) - new Date(b.created);
        } else {
          return new Date(a.due) - new Date(b.due);
        }
      });

      return sortedTodos;
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
    width: 90%;
    max-width: 600px;
  }

  .todo-container {
    width: 100%;
  }

  .center-text {
    text-align: center;
  }

  .list-enter-active, .list-leave-active {
  transition: all .5s;
  }

  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(900px);
  }
</style>