<template>
  <section class="todo-container">
    <div class="mask" v-if="loading">
      <loader />
    </div>
    <div class="todo-data">
      <div class="flex-container">
        <h1>{{todo.title}}</h1>
        <p>due: {{new Date(todo.due).toLocaleString()}}</p>
      </div>
      <p>{{todo.body}}</p>
      <p class="created">Created on: {{new Date(todo.entered).toLocaleString()}}</p>
    </div>

    <div class="todo-controls">
      <button v-if="!todo.completed" @click="completeTodo" :disabled="loading">Complete</button>
      <button v-else @click="unCompleteTodo">Un-Complete</button>
      <router-link :to="`/${todo.slug}/edit`" :disabled="loading"><button>Edit</button></router-link>
    </div>
  </section>
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

p {
  margin: 8px 0;
}

h1 {
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
  font-size: 26px;
}

.due {
  color: #444;
}

.created {
  color: #444;
  font-size: 12px;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.todo-container {
  margin: 24px 0;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.24), 0 1px 4px rgba(0,0,0,.12);
  background: white;
  max-width: 500px;
  border-radius: 4px;
  padding: 16px;

  position: relative;
}
</style>