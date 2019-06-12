import { MockState } from '../mockState';

export class AgilityThree extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, agi: 3,
    };
    this.combatStats = {
      ...this.combatStats,
      maxSpeed: 3,
      ASF: 3,
      damageBonus: 0.5,
      combatActions: [2, 1],
    };
  }
}

export class AgilityEighteen extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, agi: 18,
    };
    this.combatStats = {
      ...this.combatStats,
      maxSpeed: 8,
      ASF: 18,
      damageBonus: 3,
      combatActions: [5, 9],
    };
  }
}
