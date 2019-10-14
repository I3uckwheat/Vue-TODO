<template>
  <div id="app">
    <h1>Vue Todo!</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  created() {
    this.$store.dispatch('initialize');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>
