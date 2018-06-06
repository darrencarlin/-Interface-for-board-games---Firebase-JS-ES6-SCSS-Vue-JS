<template>
 <div>
     <ul>
         <li><router-link to='/dashboard' exact>Home</router-link></li>
         <li><router-link to='/dashboard/library' exact>Library</router-link></li>
         <li><router-link to='/dashboard/add' exact>Add Game</router-link></li>
         <li><router-link to='/dashboard/user' exact>Add User</router-link></li>
         <li><a href="#" v-on:click='logout'>Log Out</a></li>
     </ul>
 </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Home',
  data() {
    return {};
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    padding: 10px;
    border: 1px solid #eee;
    a {
      text-decoration: none;
      color: #2c3e50;
    }
  }
}
</style>
