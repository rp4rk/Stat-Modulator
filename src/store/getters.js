import StatDecorators from '../decorators/StatDecorators';

export default {
  // Character Object
  getCharacter: state => state.character,

  // Just stats, no decorators
  getStats: state => state.character.stats,

  // The main stat for the character
  getMainStat: state => state.character.mainStat,

  // Stats with their relevant decorators
  getStatsWithProperties: state =>
    state.character.stats.map(stat => Object.assign(stat, StatDecorators)),

  // Total increase for all stats
  getTotalIncrease: state =>
    Math.round(((state.character.stats.map(stat => Object.assign(stat, StatDecorators))
    .reduce((prev, next) => {
      const nextVal = 1 + (next.getRelativeToBaseIncrease() / 100);
      return prev * nextVal;
    }, 100) - 100)) * 100) / 100,

  // Get QA rank
  getQARank: state =>
    state.character.artifact.artifactTraits.filter(trait => trait.id === 1108)[0].rank,
};
