<template>
  <div class="card is-fullwidth">
    <div class="card-content">
      <p>Your changes to your stat profile would result in a {{ totalIncrease }}% increase in output.</p>
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