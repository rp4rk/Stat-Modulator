<template>
  <div>
    <div class="header">
      <h1 class="header-title">Stat Modulator</h1>
    </div>
    <div id="app">
      <NewCharacter v-if="character.appLoaded"></NewCharacter>
      <sidebar v-if="!character.appLoaded" v-bind:character="character"></sidebar>
      <badge v-if="character.appLoaded" v-bind:character="character"></badge>
      <div v-if="character.appLoaded" class="columns">
        <slider class="column" v-for="stat in stats" v-bind:stat="stat"></slider>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Badge from './components/Badge';
import NewCharacter from './components/NewCharacter';

export default {
  components: {
    Slider,
    Sidebar,
    Badge,
    NewCharacter,
  },
  computed: {
    ...mapGetters({
      stats: 'getStatsWithProperties',
      character: 'getCharacter',
    }),
  },
};
</script>

<style lang="scss">
@import "~bulma";

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  padding: 0;
  margin: 0;
  color: #040F0F;
  background-color: #FCFFFC;
  font-family: 'PT Sans', Helvetica, sans-serif;
}

body {
  min-height: 100%;
}

a {
  color: #3C90B4;
  font-weight: 700;
  text-decoration: none;
}

.header {
  background-image: url('/Stat-Modulator/static/header-illidan-still.jpg');
  height: 30vh;
  background-size:cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.5);
  z-index: 1;
  width: 100%;
  height: 100%;
}

.header-title {
  display: inline-block;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  color: white;
  z-index: 100;
  text-transform: uppercase;
  font-weight: 300;
  padding: 12px 0;
  letter-spacing: 2px;
}

p {
  color: #343434;
}

p {
  line-height: 1.5;
}

#app {
  padding: 24px;
}

</style>
