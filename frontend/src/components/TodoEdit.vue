<template>
  <div>
    <button @click="$router.go(-1)">Cancel</button>
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