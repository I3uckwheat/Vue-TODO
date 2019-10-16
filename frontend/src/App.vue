<template>
  <div id="app">
    <header :class="{'logged-out': !$store.state.isAuthenticated}">
      <h1>Vue Todo!</h1>
      <div class="user" v-if="$store.state.username">
        <p>Hello <span class="username">{{$store.state.username}},</span></p>
        <p>Not you? Click <button class="logout-btn" @click="$store.dispatch('logout')">here to log out</button>.</p>
      </div>
    </header>
    <body>
      <loader v-if="!$store.state.initialized" type='ring'/>
      <router-view />
    </body>
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
  width: 100%;
  flex-direction: column;
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header.logged-out {
  justify-content: center;
}

header .user {
  line-height: 2px;
}

header .username {
  text-transform: uppercase;
}

header .logout-btn {
  box-shadow: none;
  background: none;
  padding: 0;
  border: none;
  color: #003e6b;
  font-weight: bold;
}

header .logout-btn:hover {
  text-decoration: underline;
  cursor: pointer;
}

body {
  display: flex;
  align-items: center;
  flex-direction: column;
}

</style>
