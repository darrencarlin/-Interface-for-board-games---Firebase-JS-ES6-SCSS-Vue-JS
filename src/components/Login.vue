<template>
  <div>
    <h3>Sign In</h3>
    <form>
    <input type="text" v-model='email' placeholder="Username"><br>
    <input type="password" v-model='password' placeholder="Password"><br>
    <a href="#" v-on:click="login" exact>Login</a>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            // do stuff
            this.$router.replace('dashboard');
          },
          (err) => {
            // do stuff
          },
        );
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  input,
  a {
    width: 90%;
    margin: 0 0 10px 0;
    padding: 10px;
    border: 1px solid #2c3e50;
  }
  a {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 25%;
    margin: 0 auto;
    text-decoration: none;
    color: #2c3e50;
    transition: all 0.3s ease;
    &:hover {
      background-color: #2c3e50;
      color: #fff;
    }
  }
}
</style>
