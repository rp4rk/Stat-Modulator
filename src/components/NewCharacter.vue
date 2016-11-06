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

<style>


svg {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  display: inline;
}
</style>
