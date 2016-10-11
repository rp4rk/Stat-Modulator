<template>
  <div class="badge">
    <img class="character-image" alt="character image" :src="character.image.toLowerCase()"/>
    <caption class="character-name">
      {{ character.name }}
    </caption>
  </div>
</template>

<script>
export default {
  props: ['character'],
};
</script>

<style>
.character-image {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin: 0 auto 24px;
  display: block;
}

.character-name {
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 24px;
  text-align: center;
  border-bottom: 1px solid rgba(0,0,0, 0.5);
  border-top: 1px solid rgba(0,0,0, 0.5);
  margin-bottom: 24px;
}
</style>
