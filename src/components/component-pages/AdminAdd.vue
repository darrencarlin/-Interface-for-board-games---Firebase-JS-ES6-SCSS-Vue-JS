<template>
 <div>
  <app-header/>
  <form action="#" id="formAddGames" class="form">
      <fieldset class="section-a">
          <h3>Game Info </h3>
          <hr>
          <label for="formName">Name:</label>
          <input id="formName" type="text" v-model.trim="game.name" required>

          <label for="formDescription">Description:</label>
          <textarea id="formDescription" cols="30" rows="15"
                    v-model="game.description" required></textarea>

          <label for="formImage">Image:
              <small>(name without spaces)</small>
          </label>
          <input id="formImage" type="text" value="images/games/"
                 v-model="game.url" required>
      </fieldset>
      <fieldset class="section-b">
          <h3>Game Info</h3>
          <hr>
          <label for="formType">Type:
              <small>(seperated by commas i.e Trivia, Card, Board)</small>
          </label>
          <input id="formType" type="text" v-model="game.type" required>

          <label for="formGenre">Genre:
              <small>(seperated by commas i.e Horror, Roleplay, Humour)</small>
          </label>
          <input id="formGenre" type="text" v-model="game.genre" required>

          <label for="formIdeal">Ideal For:
              <small>(seperated by commas i.e Groups, Family, Adults)</small>
          </label>
          <input id="formIdeal" type="text" v-model="game.ideal" required>

          <label for="formAge">Age:</label>
          <input id="formAge" type="number" v-model.number="game.age" required>

          <label for="formDifficulty">Difficulty:</label>
          <select id="formDifficulty" v-model="game.difficulty" required>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
          </select>
      </fieldset>
      <fieldset class="section-c">
          <h3>Players &amp; Time</h3>
          <hr>
          <label for="formPlayersIdeal">Players Ideal:</label>
          <input id="formPlayersIdeal" type="number"
                 v-model.number="game.playersIdeal" required>

          <label for="formPlayersMinimum">Players Minimum:</label>
          <input id="formPlayersMinimum" type="number"
                 v-model.number="game.playersMinimum" required>

          <label for="formPlayersMax">Players Max:</label>
          <input id="formPlayersMax" type="number"
                 v-model.number="game.playersMax" required>

          <label for="formSetupTime">Setup Time:</label>
          <input id="formSetupTime" type="number"
                 v-model.number="game.setupTime" required>

          <label for="formPlayTime">Play Time:</label>
          <input id="formPlayTime" type="number"
                 v-model.number="game.playTime" required>
      </fieldset>
       <fieldset class="section-d">
          <h3>Other Info</h3>
          <hr>
          <label for="formPublishDate">Publish Date:</label>
          <input id="formPublishDate" type="date" v-model="game.date" required>

          <label for="formPublisher">Publisher:
              <small>(seperated by commas)</small>
          </label>
          <input id="formPublisher" type="text" v-model="game.publisher" required>

          <label for="formExpansion">Expansion:</label>
          <input id="formExpansion" type="text"
                 v-model.trim="game.expansion" required>

          <label for="formLocation">Location:</label>
          <input id="formLocation" type="text"
                 v-model.trim="game.location" required>
          <a class="submit-btn" id="formSubmit"
             v-on:click="addGame"> Add Game </a>
      </fieldset>
  </form>
  <app-controls/>
  <app-footer/>
 </div>
</template>

<script>
import controls from '@/components/Nav';
import header from '@/components/Header';
import footer from '@/components/Footer';
import firebase from 'firebase';


export default {
  components: {
    'app-header': header,
    'app-controls': controls,
    'app-footer': footer,
  },
  data() {
    return {
      game: {
        id: '',
        name: '',
        description: '',
        url: '',
        type: '',
        genre: '',
        ideal: '',
        age: '',
        difficulty: '',
        playersIdeal: '',
        playersMinimum: '',
        playersMax: '',
        setupTime: '',
        playTime: '',
        date: '',
        publisher: '',
        expansion: '',
        location: '',
      },

    };
  },
  methods: {
    addGame() {
      const firebaseKey = firebase.database().ref().child('board-game-tabletop').push().key;
      this.game.id = firebaseKey;
      this.game.url = `images/games/${this.game.url}.png`;
      this.game.type = this.game.type.split(',');
      this.game.genre = this.game.genre.split(',');
      this.game.ideal = this.game.ideal.split(',');
      this.game.publisher = this.game.publisher.split(',');
      const update = {};
      update[this.game.name] = this.game;
      firebase.database().ref().update(update);
    },
  },
};
</script>


<style lang="scss" scoped>
form {
  h3 {
    margin: 0.5em 0;
  }
  hr {
    display: none;
  }
  fieldset {
    label {
      display: block;
      margin: 0.3em 0;
    }
    padding: 1em;
    border: 0;
    input,
    textarea {
      width: 90%;
      margin: 0.5em 0;
      padding: 1em;
      border-radius: 3px;
      border: 1px solid transparent;
      border-top: none;
      border-bottom: 1px solid #ddd;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff,
        0 1px 0 #fff;
    }
    select {
      width: 90%;
      height: 32px;
      padding: 4px;
      line-height: 32px;
      text-indent: 4px;
      background: #fff;
    }
    .submit-btn {
      display: inline-block;
      padding: 1em;
      border: 1px solid #d3d3d3;
      width: 50%;
      margin: 1em auto;
      text-align: center;
    }
  }
  fieldset:last-of-type {
    margin: 0 0 50px auto;
  }
}
</style>
