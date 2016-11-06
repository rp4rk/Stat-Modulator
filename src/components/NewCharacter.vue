<template>
  <a v-on:click="setAppLoaded" class="button is-primary is-medium is-outlined">
      <span class="icon">
        <i class="fa fa-chevron-circle-left"></i>
      </span>
      <span>Load Another Character</span>
  </a>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions([
    'setAppLoaded',
  ]),
};
</script>