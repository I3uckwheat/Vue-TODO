<template>
  <div class="todo-container">
    <div class="mask" v-if="loading">
      <loader />
    </div>
    <div class="todo-controls">
      <button v-if="!todo.completed" @click="completeTodo" :disabled="loading">Complete</button>
      <button v-else @click="unCompleteTodo">Un-Complete</button>
      <router-link :to="`/${todo.slug}/edit`" :disabled="loading"><button>Edit</button></router-link>
    </div>

    <div class="todo-data">
      <p>Entered: {{new Date(todo.entered).toLocaleString()}}</p>
      <p>due: {{new Date(todo.due).toLocaleString()}}</p>
      <p>title: {{todo.title}}</p>
      <p>body: {{todo.body}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Loader from "./Loader"

export default {
  name: 'todo',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async completeTodo() {
      if(this.loading) return;
      this.loading = true
      await this.$store.dispatch('completeTodo', this.todo.slug)
      this.loading = false
    },
    async unCompleteTodo() {
      if(this.loading) return;
      this.loading = true
      await this.$store.dispatch('unCompleteTodo', this.todo.slug)
      this.loading = false
    }
  },
  components: {
    Loader
  },
  props: ["todo"],
}
</script>

<style scoped>
.todo-container {
  border: 1px solid black;
  margin-bottom: 80px;
  position: relative;
}

.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>