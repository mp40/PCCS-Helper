import { MockState } from '../mockState';

export class GunOne extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, gunLevel: 1,
    };
    this.combatStats = {
      ...this.combatStats,
      SAL: 5,
      ISF: 15,
      combatActions: [5, 4],
    };
  }
}

export class GunTen extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, gunLevel: 10,
    };
    this.combatStats = {
      ...this.combatStats,
      SAL: 16,
      ISF: 26,
      knockoutValue: 50,
      combatActions: [8, 4],
    };
  }
}
