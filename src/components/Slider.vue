<template>
  
  <div v-if="stat.showStat(mainStat)" class="card stat-card">
    <header class="card-header">
     <span class="card-header-title"> {{ stat.name }} </span>
    </header>

    <p v-if="stat.coefficient" class="panel-block">
      <span class="panel-icon">
        <i class="fa fa-info-circle"></i>
      </span>
      For 1{{ stat.amountString() }}, you require {{ stat.coefficient }} rating.
    </p>
    <p class="panel-block">
      <span class="panel-icon">
        <i class="fa fa-info-circle"></i>
      </span>
      You currently have <strong>{{ stat.value }}</strong> {{ stat.name.toLowerCase() }}.
    </p>
    <p v-if="stat.coefficient" class="panel-block">
      <span class="panel-icon">
        <i class="fa fa-line-chart"></i>
      </span>
      This represents a <strong>{{ stat.getStatAmount() }}{{ stat.amountString() }}</strong> increase in output.
    </p>
    <p class="panel-block">
      An {{ stat.modifierString() }} of <input class="increase-amount" type="number" v-model="stat.modifier"></input> would have the following effects,
    </p>
    <p v-if="stat.coefficient" class="panel-block">
      Your {{ stat.name.toLowerCase() }} will be increased by <strong>{{ stat.getModifiedAmount() }}{{ stat.amountString() }}</strong>.
    </p>
    <p class="panel-block">
      This is a <strong>{{ stat.getRelativeIncrease() }}%</strong> relative {{ stat.modifierString() }} to your {{ stat.name.toLowerCase() }}.
    </p>
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

<style lang="scss">
.stat-card {
  padding: 0;
}

.stat-card:not(:first-child) {
  margin-left: 20px;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0; 
}

.increase-amount {
  border: 0;
  padding: 5px;
  width: 50px;  
  background-color: rgba(0,0,0, 0.2);
  margin: 0 2px 0 2px;
  outline: none;
  border-radius: 3px;
}

</style>
