<template>
  <div id="app">
    <h1>Vue Todo!</h1>
    <loader v-if="!$store.state.initialized" type='ring'/>
    <router-view />
  </div>
</template>

<script>
import Loader from "./components/Loader"
export default {
  name: 'app',
  components: {
    Loader
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
