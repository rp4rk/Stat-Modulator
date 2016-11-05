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
};
