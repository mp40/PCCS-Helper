import { MockState } from '../mockState';

export class TropicalUniform extends MockState {
  constructor() {
    super();
    this.totalWeight = 4.5;
    this.gear = {
      ...this.gear,
      uniform: 'Tropical',
    };
  }
}

export class NormalUniformAndGear extends MockState {
  constructor() {
    super();
    this.gear = {
      ...this.gear,
      equipment: [{ name: 'misc', qty: 1, weight: 4 }],
    };
  }
}

export class WinterUniform extends NormalUniformAndGear {
  constructor() {
    super();
    this.totalWeight = 11;
    this.combatStats = {
      ...this.combatStats,
      baseSpeed: 2.5,
      maxSpeed: 5,
      combatActions: [3, 3],
    };
    this.gear = {
      ...this.gear,
      uniform: 'Winter',
    };
  }
}
