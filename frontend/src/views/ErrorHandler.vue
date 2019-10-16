<template>
  <div v-if="errCode === '401'">
    <p>You are unauthorized to view the requested page, please click <router-link to="/"> here </router-link> to login or register</p>
  </div>
  <div v-else-if="errCode[0] === '5'">
    <p>There has been an error <router-link to="/"> here </router-link> to return home</p>
  </div>
  <div v-else>
    <p>Page not found, click <router-link to="/"> here </router-link> to return home</p>
  </div>
</template>

<script>
export default {
  computed: {
    errCode() {
      return this.$route.params.errCode || 404;
    }
  }
  
}
</script>

<style scoped>

</style>
