import { MockState } from './mockState';

export class Equipment {
  constructor() {
    this.name = 'testEquipment';
    this.weight = 1.53;
    this.tags = ['test'];
    this.qty = 1;
  }
}

export class OtherEquipment extends Equipment {
  constructor() {
    super();
    this.name = 'otherEquipment';
    this.weight = 2.47;
  }
}

export class AddedEquipment extends MockState {
  constructor() {
    super();
    this.totalWeight = 6.53;
    this.gear.equipment = [new Equipment()];
  }
}

export class AddedEquipmentAgain extends AddedEquipment {
  constructor() {
    super();
    this.totalWeight = 9;
    this.gear.equipment = [new Equipment(), new OtherEquipment()];
  }
}
