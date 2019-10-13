<template>
  <div>
    <h1>Vue ToDo</h1>
    <login-register></login-register>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginRegister from "@/components/LoginRegister";

export default {
  name: 'home',
  components: {
    LoginRegister
  }
}
</script>
