<template>
  <todo-edit @submit="submitTodo" :todo="todo"></todo-edit> 
</template>

<script>
import TodoEdit from "@/components/TodoEdit";
export default {
  methods: {
    async submitTodo(todo) {
      const slug = this.$route.params.slug;
      await this.$store.dispatch('editTodo', {slug: slug, ...todo});
      this.$router.push('/');
    }
  },
  computed: {
    todo() {
      return this.$store.getters.getTodoBySlug(this.$route.params.slug);
    }
  },
  components: {
    TodoEdit
  }
}
</script>

<style scoped>

</style>