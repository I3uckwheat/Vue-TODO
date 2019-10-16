<template>
  <div>
    <button @click="deleteTodo">Delete</button>
    <todo-edit @submit="submitTodo" :todo="todo"></todo-edit> 
  </div>
</template>

<script>
import TodoEdit from "@/components/TodoEdit";
export default {
  methods: {
    async submitTodo(todo) {
      await this.$store.dispatch('editTodo', {slug: this.slug, ...todo});
      this.$router.push('/');
    },
    async deleteTodo() {
      await this.$store.dispatch('deleteTodo', this.slug)
      this.$router.push('/');
    }
  },
  computed: {
    todo() {
      return this.$store.getters.getTodoBySlug(this.slug);
    },
    slug() {
      return this.$route.params.slug;
    }
  },
  components: {
    TodoEdit
  }
}
</script>

<style scoped>

</style>