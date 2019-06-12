import { MockState } from '../mockState';

export class HealthThree extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, hlt: 3,
    };
  }
}

export class HealthEighteen extends MockState {
  constructor() {
    super();
    this.characterStats = {
      ...this.characterStats, hlt: 18,
    };
  }
}
