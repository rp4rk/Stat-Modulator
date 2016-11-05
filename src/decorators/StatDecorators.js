// Statistic Decorators
export default {
  // Conditional Logic to show the stat pane
  showStat(mainStat) {
    const secondarySet = new Set(['Versatility', 'Critical Strike', 'Mastery', 'Haste']);
    return secondarySet.has(this.name) || mainStat === this.name;
  },

  // The string that represents how this stat is quantified
  amountString() {
    return this.name === 'Mastery' ? ' Points' : '%';
  },

  // The amount of stat
  getStatAmount() {
    return this.coefficient ? Math.round((this.value / this.coefficient) * 100) / 100 : this.value;
  },

  // The amount of the stat when modified
  getModifiedAmount() {
    return this.coefficient ?
      Math.round(((this.modifier) / this.coefficient) * 100) / 100
      : this.value;
  },

  // Get relative increase for this stat alone
  getRelativeIncrease() {
    const outcome = this.value + this.modifier;
    return Math.round(((outcome / this.value) - 1) * 10000) / 100;
  },

  // getOverallIncrease() {
  //   const mainStat = getters.getMainStat();
  //   const outcome = 1 + (this.getModifiedAmount() / 100);
  //   const current = 1 + (this.getStatAmount() / 100);
  //   if (this.name === mainStat) { return this.getRelativeIncrease(); }

  //   return Math.round(((outcome / current) - 1) * 100) / 100;
  // },
};
