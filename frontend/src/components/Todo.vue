<template>
  <div class="todo-container">
    <div class="todo-controls">
      <button @click="$store.dispatch('completeTodo', todo.slug)">Complete</button>
      <button>Edit</button>
    </div>

    <div class="todo-data">
      <p>Entered: {{new Date(todo.entered).toLocaleString()}}</p>
      <p>due: {{new Date(todo.due).toLocaleString()}}</p>
      <p>completion status: {{todo.completed}}</p>
      <p>title: {{todo.title}}</p>
      <p>body: {{todo.body}}</p>
      <p>slug: {{todo.slug}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'todo',
  components: {
  },
  props: ["todo", "showComplete"],
}
</script>

<style scoped>
.todo-container {
  border: 1px solid black;
  margin-bottom: 80px;
}
</style>