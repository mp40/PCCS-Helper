export class MockState {
  constructor() {
    this.totalWeight = 5;
    this.characterStats = {
      str: 10,
      int: 10,
      hlt: 10,
      wil: 10,
      agi: 10,
      gunLevel: 0,
      handLevel: 0,
    };
    this.combatStats = {
      baseSpeed: 3,
      maxSpeed: 6,
      SAL: 0,
      CE: 0,
      ISF: 10,
      ASF: 10,
      knockoutValue: 5,
      damageBonus: 1,
      combatActions: [4, 4],
    };
    this.gear = {
      uniform: 'Normal',
      equipment: [],
      firearms: [],
    };
  }
}
