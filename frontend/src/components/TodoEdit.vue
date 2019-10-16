<template>
  <div>
    <button @click="$router.push('/')">Cancel</button>
    <form @submit.prevent="submit">
      <input placeholder="Title" v-model="title" required />
      <input placeholder="body" v-model="body" required />
      <input type="date" v-model="date" required />
      <input type="time" v-model="time" required />
      <br>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
      time: null,
      title: null,
      body: null
    }
  },
  props: ["todo"],
  created() {
    const getTwoDigits = (value) => value < 10 ? `0${value}` : value;

    const dueDate = new Date(this.todo.due);
    this.title = this.todo.title
    this.body = this.todo.body


    this.date = `${dueDate.getFullYear()}-${getTwoDigits(dueDate.getMonth())}-${getTwoDigits(dueDate.getDay())}`;
    this.time = `${getTwoDigits(dueDate.getHours())}:${getTwoDigits(dueDate.getMinutes())}`;
  },
  methods: {
    submit() {
      this.$emit('submit', {
        due: new Date(`${this.date}T${this.time}`),
        title: this.title,
        body: this.body
      });
    }
  }
}
</script>

<style scoped>

</style>