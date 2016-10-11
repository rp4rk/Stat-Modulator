<template>
  <div>
    <div class="header">
      <h1 class="header-title">Stat Modulator</h1>
    </div>
    <div id="app">
      <NewCharacter v-if="character.appLoaded"></NewCharacter>
      <sidebar v-if="!character.appLoaded" v-bind:character="character"></sidebar>
      <badge v-if="character.appLoaded" v-bind:character="character"></badge>
      <div v-if="character.appLoaded" class="grid">
        <slider v-for="stat in character.stats" v-bind:stat="stat" v-bind:mainStat="character.mainStat"></slider>
      </div>
    </div>
  </div>
</template>

<script>
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
    character() {
      return this.$store.state.character;
    },

  },
};
</script>

<style>
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
  background-image: url('/header-illidan-still.jpg');
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

h1,h2,h3,h4,h5 {
  margin-top: 0;
  text-align: center;
}

p, span {
  color: #343434;
}

p {
  line-height: 1.5;
}

button{
  transition: opacity 0.3s ease-in-out;
}

button:hover {
  opacity: 0.6;
  cursor: pointer;
}

#app {
  padding: 24px;
}

input, select {
  font-family: 'PT Sans', Helvetica, sans-serif;
  font-size: 16pt;
}

/* Grid System */
/* https://github.com/Heydon/fukol-grids */
.grid {
  display: flex; /* 1 */
  flex-wrap: wrap; /* 2 */
  margin: -0.5em; /* 5 (edit me!) */
  flex-direction: column;
}

@media screen and (min-width: 1280px) {
  .grid {
    flex-direction: row;;
  }
}

.grid > * {
  flex: 1 0 5em; /* 3 (edit me!) */
  margin: 0.5em; /* 4 (edit me!) */
}

</style>
