export class MockState {
  constructor() {
    this.currentView = 'home';
    this.currentCharacter = {
      name: '',
      str: 10,
      int: 10,
      hlt: 10,
      wil: 10,
      agi: 10,
      gunLevel: 0,
      handLevel: 0,
      totalWeight: 5,
      baseSpeed: 3,
      maxSpeed: 6,
      SAL: 0,
      CE: 0,
      ISF: 10,
      ASF: 10,
      knockoutValue: 5,
      damageBonus: 1,
      gunCombatActions: 4,
      handCombatActions: 4,
      uniform: 'Normal',
      equipment: [],
      firearms: [],
      grenades: [],
      launchers: [],
      helmet: undefined,
      vest: undefined,
    };
    this.savedCharacters = [];
  }
}
