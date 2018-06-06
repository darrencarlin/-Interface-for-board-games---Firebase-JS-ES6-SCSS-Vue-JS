<template>
 <div>
     <app-header></app-header>
        <h3>Add User</h3>
        <form>
            <input type="email" v-model="email" placeholder="email"><br>
            <input type="password"
                   id="pass1"
                   v-model="password"
                   placeholder="password"><br>
            <input type="password"
                   id="pass2"
                   v-model="password2"
                   placeholder="confirm password"><br>
            <a href="#" v-on:click="addUser">Add User</a>
            <span>{{message}}</span>
        </form>
     <app-controls></app-controls>
     <app-footer></app-footer>
 </div>
</template>

<script>
import firebase from 'firebase';
import controls from '@/components/Nav';
import header from '@/components/Header';
import footer from '@/components/Footer';

export default {
  components: {
    'app-header': header,
    'app-controls': controls,
    'app-footer': footer,
  },
  data() {
    return {
      email: '',
      password: '',
      password2: '',
      message: '',
    };
  },
  methods: {
    addUser() {
      if (this.password === this.password2) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            (user) => {
              this.message = 'User Added!';
            },
            (err) => {
              // do stuff
            },
          );
      } else {
        // do stuff
      }
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
