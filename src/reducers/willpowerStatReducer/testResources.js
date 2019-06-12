import { MockState } from '../mockState';

export class WillpowerThree extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, wil: 3,
    };
    this.combatStats = {
      ...this.combatStats, knockoutValue: 1,
    };
  }
}

export class WillpowerEighteen extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, wil: 18,
    };
    this.combatStats = {
      ...this.combatStats, knockoutValue: 9,
    };
  }
}
