<template>
  <div class="todo-container">
    <div class="todo-controls">
      <button v-if="!todo.completed" @click="$store.dispatch('completeTodo', todo.slug)">Complete</button>
      <button v-else @click="$store.dispatch('unCompleteTodo', todo.slug)">Un-Complete</button>
      <button>Edit</button>
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

export default {
  name: 'todo',
  components: {
  },
  props: ["todo"],
}
</script>

<style scoped>
.todo-container {
  border: 1px solid black;
  margin-bottom: 80px;
}
</style>