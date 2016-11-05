<template>
  <div v-if="stat.showStat(mainStat)" class="stat-pane">
    <div class="stat-header-wrapper">
      <h2 class="stat-header">{{ stat.name }}</h2>
      <span class="stat-ratio" v-if="stat.coefficient">{{ stat.coefficient }} Rating per {{ stat.amountString() }}</span>
    </div>
    <div class="stat-inputs">
      <input disabled class="base-amount" type="number" v-model="stat.value"></input>
      <input class="increase-amount" type="number" v-model="stat.modifier"></input>
    </div>
    <div v-if="stat.getStatAmount" class="stat-overviews">
      <span class="base-perc">{{ stat.getStatAmount() }}{{ stat.amountString() }}</span>
      <span class="mod-perc">{{ stat.getModifiedAmount() }}{{ stat.amountString() }}</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    props: ['stat'],
    computed: {
      ...mapGetters({
        mainStat: 'getMainStat',
      }),
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
  flex: 1 0 0;
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
  flex: 1 0 0;
  border-bottom-left-radius: 3px;
}

.mod-perc {
  flex: 1 0 0;
  border-bottom-right-radius: 3px;
  border-left: 1px solid rgba(0,0,0, 0.1);
}
</style>
