<template>
  <div class="box is-fullwidth">
    <h2 class="title">Raw Increase Estimate</h2>
    <div class="box-content">
      <p>The changes to your stat profile would result in a theoretical {{ totalIncrease }}% increase in raw output.</p>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      totalIncrease: 'getTotalIncrease',
    }),
  },
};

</script>