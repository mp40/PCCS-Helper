import { MockState } from '../mockState';

export class StrengthThree extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, str: 3,
    };
    this.combatStats = {
      ...this.combatStats,
      baseSpeed: 2.5,
      maxSpeed: 5,
      combatActions: [3, 3],
    };
  }
}

export class StrengthEighteen extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, str: 18,
    };
    this.combatStats = {
      ...this.combatStats,
      baseSpeed: 4,
      maxSpeed: 8,
      damageBonus: 2,
      combatActions: [5, 5],
    };
  }
}
