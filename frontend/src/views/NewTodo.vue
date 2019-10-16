<template>
  <edit-todo @submit="submitTodo"></edit-todo> 
</template>

<script>
import EditTodo from "@/components/TodoEdit";
export default {
  methods: {
    async submitTodo(todo) {
      await this.$store.dispatch('addTodo', todo);
      this.$router.push('/');
    }
  },
  components: {
    EditTodo
  }
}
</script>

<style scoped>

</style>