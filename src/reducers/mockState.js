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
