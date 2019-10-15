<template>
    <p>Entered: {{new Date(todo.entered).toLocaleString()}}</p>
    <p>due: {{new Date(todo.due).toLocaleString()}}</p>
    <p>completion status: {{todo.completed}}</p>
    <p>title: {{todo.title}}</p>
    <p>body: {{todo.body}}</p>
    <p>slug: {{todo.slug}}</p>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'todo',
  components: {
  },
  props: ["todo"]
}
</script>

<style scoped>
</style>