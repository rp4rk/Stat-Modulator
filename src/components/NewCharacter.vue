<template>
  <button v-on:click="setAppLoaded" class="new-character">
      <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1037 1395l102-102q19-19 19-45t-19-45l-307-307 307-307q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 45l454 454q19 19 45 19t45-19zm627-499q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" fill="#fff"/></svg>
      <span>Load Another Character</span>
  </button>
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
.new-character {
  margin: 0 auto 24px;
  display: block;
  left: 50%;
  top: 24px;
  left: 24px;
}

.new-character span {
  vertical-align: middle;
  color: white;
}

.new-character svg {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  display: inline;
}
</style>
