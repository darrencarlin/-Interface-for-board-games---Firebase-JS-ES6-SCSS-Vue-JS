<template>
 <div>
   <app-header/>
   <h1>adminLibrary</h1>
  <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
   <app-controls/>
   <app-footer/>
 </div>
</template>

<script>
import controls from '@/components/Nav';
import header from '@/components/Header';
import footer from '@/components/Footer';
import firebase from 'firebase';

let gamesRef = firebase.database().ref();

export default {
  components: {
    'app-header': header,
    'app-controls': controls,
    'app-footer': footer,
  },
  data() {
    return {
      firebase: {
        games: gamesRef,
      },
    };
  },
};

console.log(firebase.games)
</script>


<style lang="scss" scoped>
</style>
