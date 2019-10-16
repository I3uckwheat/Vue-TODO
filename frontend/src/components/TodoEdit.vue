<template>
  <div class='wrapper'>
    <form @submit.prevent="submit">
      <label for="title">TITLE</label>
      <input id="title" placeholder="Title" v-model="title" required />

      <label>BODY</label>
      <input id="body" placeholder="body" v-model="body" required />

      <div class="date-input">
        <p>DUE DATE</p>
        <label for="date" hidden>Due Date</label>
        <input id="time" type="date" v-model="date" required />

        <label for="time" hidden>Due Time</label>
        <input id="date" type="time" v-model="time" required />
      </div>
      
      <div class="controls">
        <button type="submit">submit</button>
        <button @click.prevent="$router.push('/')">Cancel</button>
      </div>
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
    if(!this.todo) return;
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
form {
  display: flex;
  flex-direction: column;
  color: #666;
}

form > input {
  max-width: 420px;
}

form label,
form .date-input {
  margin-top: 20px;
}

.date-input p {
  display: block;
  margin: 0;
}

.date-input input {
  width: 200px;
}

.controls {
  margin-top: 27px;
}
</style>