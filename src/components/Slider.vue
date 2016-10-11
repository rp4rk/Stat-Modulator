<template>
  <div v-if="isMainStat || stat.isSecondary" class="stat-pane">
    <div class="stat-header-wrapper">
      <h2 class="stat-header">{{ stat.label }}</h2>
      <span class="stat-ratio" v-if="stat.ratio">{{`${stat.ratio} / point`}}</span>
    </div>
    <div class="stat-inputs">
      <input class="base-amount" type="number" v-model="stat.value"></input>
      <input class="increase-amount" type="number" v-model="stat.modifier"></input>
    </div>
    <div v-if="getStatPercentage" class="stat-overviews">
      <span class="base-perc">{{ getStatPercentage.base }}%</span>
      <span class="mod-perc">{{ getStatPercentage.modifier }}%</span>
    </div>
    <div v-if="!getStatPercentage" class="stat-overviews error">
      <span>{{ stat.label }} does not have a coefficient.</span>
    </div>
    <p>This results in a relative increase of {{ getRelativeStatIncrease }}% to your {{ stat.label.toLowerCase() }} statistic alone.<p>
    <p>Overall, this change would give you roughly {{ getOverallIncrease }}% more output!</p>
    <span v-if="stat.label == 'Mastery'">* Assuming a 1% increase per point, this is not true for all classes!</span>
  </div>
</template>

<script>
  export default {
    props: ['stat', 'mainStat'],
    computed: {
      isMainStat() {
        return this.stat.label.toLowerCase() === this.mainStat;
      },
      getStatPercentage() {
        const stat = this.stat;
        return stat.ratio ? {
          base: Math.round((stat.value / stat.ratio) * 100) / 100,
          modifier: Math.round((stat.modifier / stat.ratio) * 100) / 100,
        } : null;
      },
      getRelativeStatIncrease() {
        const stat = this.stat;
        const base = stat.value;
        const mod = base + stat.modifier;
        return Math.round((((mod / base) - 1) * 10000)) / 100;
      },
      getOverallIncrease() {
        if (this.isMainStat) { return this.getRelativeStatIncrease; }

        const totalStat = (this.getStatPercentage.base / 100) + 1;
        const additionalStat = ((this.getStatPercentage.base
                                 + this.getStatPercentage.modifier) / 100) + 1;

        return Math.round(((additionalStat / totalStat) - 1) * 10000) / 100;
      },
    },
  };
</script>

<style>
.stat-pane {
  background-color: rgba(0,0,0, 0.1);
  border: 1px solid rgba(0,0,0, 0.25);
  border-radius: 2px;
  padding: 12px;
}

.stat-header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(0,0,0, 0,5);
}

.stat-header {
  margin: 0;
  display: inline-block;
}

.stat-inputs, .stat-overviews {
  display: flex;
  flex-wrap: wrap;
}

.stat-inputs input {
  border-bottom: none;
}

.base-amount {
  border-top-left-radius: 3px;
  flex: 3 0 0;
  border-right: none;
}

.increase-amount {
  border-top-right-radius: 3px;
  flex: 1 0 0;
  width: 25%; /* Doesn't work without a width specified... somethings not quite right... */
}

.stat-overviews span {
  padding: 8px 4px;
  display: inline-block;
  background-color: #2BA84A;
  color: white;
  font-weight: 700;
  font-size: 16pt;

  border-bottom: 2px solid rgba(0,0,0, 0.1);
  box-shadow: 0 2px 1px rgba(0,0,0, 0.1);
}

.error span{
  background-color: #C93D3F;
  width: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.base-perc {
  flex: 3 0 0;
  border-bottom-left-radius: 3px;
}

.mod-perc {
  flex: 1 0 0;
  border-bottom-right-radius: 3px;
  border-left: 1px solid rgba(0,0,0, 0.1);
}
</style>
