export default class Stat {
  constructor(value, coefficient, name) {
    this.name = name;
    this.value = value;
    this.coefficient = coefficient;
    this.modifier = 0;
    this.bonuses = [
      // { name: String, amount: Float, iconURL: String }
    ];
  }
}
