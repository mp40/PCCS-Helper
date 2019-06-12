import { MockState } from '../mockState';

export class IntelligenceThree extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, int: 3,
    };
    this.combatStats = {
      ...this.combatStats,
      ISF: 3,
      combatActions: [3, 4],
    };
  }
}

export class IntelligenceEighteen extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, int: 18,
    };
    this.combatStats = {
      ...this.combatStats,
      ISF: 18,
      combatActions: [6, 4],
    };
  }
}
