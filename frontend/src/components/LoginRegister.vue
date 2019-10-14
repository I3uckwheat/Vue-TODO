<template>
  <div v-if="showLogin" @click="loginError = false" class="login-reg-container">
    <form @submit.prevent="login">
      <h3>Login</h3>
      <p v-if="loginError">username or password is incorrect</p>
      <label for="username">Username</label>
      <input name="username" type="username" v-model="username" />

      <label for="password">Password</label>
      <input name="password" type="password" v-model="password" />

      <div class="controls">
        <input type="submit" value="Login"/>
        <button @click.prevent="showLogin = false">Need an account? Click here to register</button>
      </div>
    </form>
  </div>

  <div v-else class="login-reg-container" @click="registerError = null">
    <form @submit.prevent="register">
      <h3>Register</h3>
      <p v-if="registerError">{{registerError}}</p>
      <label for="username">Username</label>
      <input name="username" type="username" v-model="username" />

      <label for="password">Password</label>
      <input name="password" type="password" v-model="password" />

      <label for="confirmPassword">Confirm password</label>
      <input name="confirmPassword" type="password" v-model="confirmPassword" />

      <div class="controls">
        <input type="submit" value="Register"/>
        <button @click.prevent="showLogin = true">Have an account? Click here to login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      showLogin: true,
      loginError: false,
      registerError: null
    }
  },
  methods: {
    async login() {
      try {
        await this.axios.post("http://localhost:3000/user/login", {
          username: this.username,
          password: this.password
        });

        await this.$store.dispatch('login', {
          username: this.username
        });
      } catch(err) {
        if(err.response.status === 401) this.loginError = true;
      }
    },
    async register() {
      if (this.password !== this.confirmPassword) {
        this.registerError = "Your password confirmation does not match";
        return;
      }

      try {
        await this.axios.post("http://localhost:3000/user/register", {
          username: this.username,
          password: this.password
        });

        this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        });

      } catch(err) {
        this.registerError = err.response.data.message;
      }
    }
  }
}
</script>

<style scoped>
.login-reg-container {
  border: 1px solid black;
  flex-basis: auto;
}

.login-reg-container form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 350px;
  margin: 20px;
}

.login-reg-container label {
  margin-top: 10px;
}

.controls {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}

.controls > * {
  margin-bottom: 10px;
}

</style>