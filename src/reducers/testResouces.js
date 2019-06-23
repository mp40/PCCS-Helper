import { MockState } from './mockState';
import { testM1911A1, testM16 } from '../helpers/testHelpers';

export class Equipment {
  constructor() {
    this.name = 'testEquipment';
    this.weight = 1.53;
    this.tags = ['test'];
    this.qty = 1;
  }
}

export class EquipmentQtyTwo extends Equipment {
  constructor() {
    super();
    this.weight = 1.53;
    this.qty = 2;
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

export class IncreasedEquipment extends MockState {
  constructor() {
    super();
    this.totalWeight = 8.06;
    this.gear.equipment = [new EquipmentQtyTwo()];
  }
}

export class IncreasedFirstEquipmentItem extends AddedEquipmentAgain {
  constructor() {
    super();
    this.totalWeight = 10.53;
    this.gear.equipment = [new EquipmentQtyTwo(), new OtherEquipment()];
  }
}

export class AddedM1911A1 extends MockState {
  constructor() {
    super();
    this.totalWeight = 8;
    this.gear.firearms = [testM1911A1()];
  }
}

export class AddedM1911A1AndM16 extends MockState {
  constructor() {
    super();
    this.totalWeight = 16.7;
    this.gear.firearms = [testM1911A1(), testM16()];
  }
}
