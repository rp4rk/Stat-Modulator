<template>
  <div>
    <h2 class="no-margin-pls">Import Character</h2>
    <div class="sidebar">
      <div class="info">
        <p>
          This stat modulator will allow you to see the relative benefit of increasing stats on your character.
          Increasing a certain statistic will increase the value of others, therefore devaluing the stat.
          The calculations involved in determining these increases are annoying to do, and hard to automate.
        </p>
        <p>
          For example, going from 0% critical strike to 1% critical strike is an increase of
          roughly 1%. However going from 49% critical strike to 50% is an increase of only
          0.67%. The same dichotomy exists for every statistic in the game.
        </p>
        <p>- Sharambe of Pure, Turalyon EU. <a href="https://www.twitter.com/Reglitch_"> @Reglitch_ </a></p>
      </div>
      <div>
        <form class="character-form" v-on:submit.prevent="loadCharacter">
            <p>
              <label for="region">Region</label>
              <select v-on:change="loadRealms" v-model="character.region" type="text" name="region" id="region" >
                <option>EU</option>
                <option>US</option>
                <option>KR</option>
                <option>TW</option>
                <option>SEA</option>
              </select>
            </p>
            <p>
              <label for="character">Character</label>
              <input v-model="character.name" type="text" name="character" id="character" />
            </p>
            <p>
              <label for="realm">Realm</label>
              <select v-model="character.realm" type="text" name="realm" id="realm">
                <option v-for="realm in character.realms" v-bind:value="realm.name">
                  {{ realm.name }}
                </option>
              </select>
            </p>
            <button>
              Load Character
            </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['character'],
  methods: mapActions([
    'loadCharacter',
    'loadRealms',
  ]),
};
</script>

<style>
.sidebar {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.info {
  width: 420px;
}

.character-form {
  width: 420px;
  flex: 1 0 0;
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
}

.no-margin-pls {
  margin-bottom: 0;
}

@media screen and (min-width: 960px) {
  .sidebar {
    width: 960px; /* 🌲🔥🌲 Blaze it 420 🌲🔥🌲 */
  }
}

form {
  margin: 10px 0 30px 0;
}

input, select {
  margin-top: 4px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  padding: 8px 4px;
  border:solid 1px #aacfe4;
}

button {
  background-color: #3C90B4;
  font-size: 16px;
  color: white;
  border: none;
  padding: 10px;
  font-weight: 700;
}

</style>
