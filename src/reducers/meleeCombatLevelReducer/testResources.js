import { MockState } from '../mockState';

export class MeleeTwo extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, handLevel: 2,
    };
    this.combatStats = {
      ...this.combatStats,
      CE: 7,
      ASF: 17,
      knockoutValue: 10,
      damageBonus: 1.5,
      combatActions: [4, 6],
    };
  }
}

export class MeleeEleven extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, handLevel: 11,
    };
    this.combatStats = {
      ...this.combatStats,
      CE: 17,
      ASF: 27,
      knockoutValue: 55,
      damageBonus: 2.5,
      combatActions: [4, 8],
    };
  }
}
