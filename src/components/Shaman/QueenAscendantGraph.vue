<template>
  <div class="box">
    <h2 class="title has-text-centered">Queen Ascendant Value</h2>
    <h2 class="subtitle has-text-centered">Estimated haste bonus for crit rating at your QA rank - {{ this.getQARank }}</h2>
    <div class="columns">
      <div class="column is-half">
        <Graph class="right-graph" v-bind:graph="graph"></Graph>
      </div>
      <div class="column is-half content">
        <h3>Queen Ascendant Myths Debunked</h3>
        <p>
          <strong>Queen Ascendant does not devalue haste </strong>, it simply provides extra value to your Critical Strike rating investment.
          What this means for you, is that while haste does provide value; you can gain an extra, smaller amount of effective haste while investing into Critical Strike.
          This means that arguments in favor of Haste only apply in situations where you're investing in both, which is not a concern with the strength of Mastery.
          Queen Ascendant does not make haste absolutely weaker, but <em>relatively</em>, in relation to the strength of Critical Strike it diminishes.
        <p>
        <p>
          <strong>Queen Ascendant is made weaker by increased focus on single target healing.</strong> As many shamans have mentioned, single target healing with Tidal Wave results
          in passing the global cooldown. In these situations, the only extra value provided by QA is that of landing heals faster. This means the bonus from QA in single target healing
          environments, such as Mythic+ dungeons, is severely diminished.
          If you are "weaving" heals, such as you would with the legendary bracers + Jonat, QA does not diminish as much as it would with strictly single target heals.
        </p>
        <p>
          This also seems like a suitable place to debunk another piece of haste trivia. <strong>Haste does not double dip.</strong> With spells such as Riptide, HST, and so on where
          haste effects the HoT portion; it has become commonplace to describe this as "double dipping". The GCD reduction is a separate, individual mechanic that happens with haste accruance,
          to realize why this isn't double dipping you need look no farther than to realize that Haste does not reduce the actual cooldown of spells such as Riptide or Healing Stream Totem.
        </p>
      </div>
    </columns>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Graph from '../Graph';
  
  export default {
    components: {
      Graph,
    },
    computed: {
      ...mapGetters([
        'getQARank',
      ]),
      graph: function graph() {
        return {
          xLabel: 'Critical Strike Chance (%)',
          yLabel: 'Haste Rating',
          xDomain: [0, 100],
          yDomain: [0, 10000],
          data: [
            {
              title: 'CH Spam - High Tide',
              fn: `(1 - (1 - x / 100)^5) * ${this.getQARank * 5} * 325`,
            },
            {
              title: 'CH Spam - No High Tide',
              fn: `(1 - (1 - x / 100)^4) * ${this.getQARank * 5} * 325`,
            },
            {
              title: 'Single Target, Without Tidal Waves',
              fn: `x / 100 * ${this.getQARank * 5} * 325`,
            },
          ],
        };
      },
    },
  };
</script>

<style lang="scss">
.right-graph svg {
  float: right;
}
</style>

