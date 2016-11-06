// Statistic Decorators
export default {
  // Conditional Logic to show the stat pane
  showStat(mainStat) {
    const secondarySet = new Set(['Versatility', 'Critical Strike', 'Mastery', 'Haste']);
    return secondarySet.has(this.name) || mainStat === this.name;
  },

  // The string that represents how this stat is quantified
  amountString() {
    const secondaryString = statName => (statName === 'Mastery' ? ' Point(s)' : '%');
    const primarySet = new Set(['Intellect', 'Strength', 'Agility']);
    return primarySet.has(this.name) ? '' : secondaryString(this.name);
  },

  // The amount of stat
  getStatAmount() {
    return this.coefficient > 0 ? Math.round((this.value / this.coefficient) * 100) / 100
    : this.value;
  },

  // The amount of the stat when modified
  getModifiedAmount() {
    return this.coefficient ?
      Math.round(((this.modifier) / this.coefficient) * 100) / 100
      : this.modifier;
  },

  // String for modifiers :)
  modifierString() {
    return this.modifier >= 0 ? 'increase' : 'decrease';
  },

  // Get static increase for this stat alone
  getStaticIncrease() {
    const outcome = this.value + this.modifier;
    return Math.round(((outcome / this.value) - 1) * 10000) / 100;
  },

  // Get the relative increase
  getRelativeIncrease() {
    return Math.round((this.getModifiedAmount() / this.getStatAmount()) * 10000) / 100;
  },

  // Get increase relative to base healing
  getRelativeToBaseIncrease() {
    const base = 1 + (this.getStatAmount() / 100);
    const newVal = base + (this.getModifiedAmount() / 100);
    return this.coefficient ? ((newVal / base) - 1) * 100 : this.getRelativeIncrease();
  },
};
