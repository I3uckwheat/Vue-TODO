<template>
  <edit-todo @submit="registerTodo"></edit-todo> 
</template>

<script>
import EditTodo from "@/components/TodoEdit";
export default {
  methods: {
    registerTodo(todo) {
    }
  },
  components: {
    EditTodo
  }
}
</script>

<style scoped>

</style>