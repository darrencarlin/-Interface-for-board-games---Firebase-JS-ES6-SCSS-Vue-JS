// Anything imported here is usable throughout the entire app using 'this'
import Vue from 'vue';
import firebase from 'firebase';
import App from './App';
import router from './router';

let app;
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCxPu8HFBXRDWsLhjQWwjVKvznkS1mT5MY',
  authDomain: 'board-game-tabletop.firebaseapp.com',
  databaseURL: 'https://board-game-tabletop.firebaseio.com',
  projectId: 'board-game-tabletop',
  storageBucket: 'board-game-tabletop.appspot.com',
  messagingSenderId: '115444661210',
};

firebase.initializeApp(config);


Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router,
    });
  }
});

