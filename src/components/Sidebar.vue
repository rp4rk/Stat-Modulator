<template>
  <div class="content">
    <h2>Import Character</h2>
    <div class="sidebar">
      <div class="info">
        <p>
          This stat modulator will allow you to see the relative benefit of increasing stats on your character.
          Increasing a certain statistic will increase the value of others, therefore devaluing the stat in relation to your other choices.
          The calculations involved in determining these increases are annoying to do, and hard to with conventional tools.
        </p>
        <p>
          For example, going from 0% critical strike to 1% critical strike is an increase of
          roughly 1%. However going from 49% critical strike to 50% is an increase of only
          0.67%. The same relationship exists for every statistic in the game.
        </p>
        <p>- Sharambane of Pure, Turalyon EU. <a href="https://www.twitter.com/Reglitch_"> @Reglitch_ </a></p>
      </div>
      <div>
        <form class="character-form">
            <p class="control">
              <label class="label" for="region">Region</label>
              <select class="select" v-on:change="loadRealms" v-model="character.region" type="text" name="region" id="region" >
                <option>EU</option>
                <option>US</option>
              </select>
            </p>
            <p class="control">
              <label class="label" for="realm">Realm</label>
              <select class="select" v-model="character.realm" type="text" name="realm" id="realm">
                <option v-for="realm in character.realms" v-bind:value="realm.name">
                  {{ realm.name }}
                </option>
              </select>
            </p>
            <p class="control">
              <label class="label" for="character">Character</label>
              <input class="input" v-model="character.name" type="text" name="character" id="character" />
            </p>
            <a v-on:click="loadCharacter" class="button is-primary">
              Load Character
            </a>
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


</style>
