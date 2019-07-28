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
    this.combatStats = {
      ASF: 10,
      CE: 0,
      ISF: 10,
      SAL: 0,
      baseSpeed: 2.5,
      combatActions: [3, 3],
      damageBonus: 1,
      knockoutValue: 5,
      maxSpeed: 5,
    };
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
    this.combatStats = {
      ASF: 10,
      CE: 0,
      ISF: 10,
      SAL: 0,
      baseSpeed: 2,
      combatActions: [3, 3],
      damageBonus: 1,
      knockoutValue: 5,
      maxSpeed: 4,
    };
    this.gear.firearms = [testM1911A1(), testM16()];
  }
}

export class AddedTwoM1911A1 extends MockState {
  constructor() {
    super();
    this.totalWeight = 11;
    this.combatStats = {
      ASF: 10,
      CE: 0,
      ISF: 10,
      SAL: 0,
      baseSpeed: 2.5,
      combatActions: [3, 3],
      damageBonus: 1,
      knockoutValue: 5,
      maxSpeed: 5,
    };
    this.gear.firearms = [testM1911A1(2)];
  }
}

export class AddedTwoM1911A1AndOneM16 extends MockState {
  constructor() {
    super();
    this.totalWeight = 19.7;
    this.combatStats = {
      ASF: 10,
      CE: 0,
      ISF: 10,
      SAL: 0,
      baseSpeed: 2,
      combatActions: [3, 3],
      damageBonus: 1,
      knockoutValue: 5,
      maxSpeed: 4,
    };
    this.gear.firearms = [testM1911A1(2), testM16()];
  }
}

export class AddedM16 extends MockState {
  constructor() {
    super();
    this.currentView = 'createChar';
    this.totalWeight = 13.7;
    this.combatStats = {
      ASF: 10,
      CE: 0,
      ISF: 10,
      SAL: 0,
      baseSpeed: 2.5,
      combatActions: [3, 3],
      damageBonus: 1,
      knockoutValue: 5,
      maxSpeed: 5,
    };
    this.gear.firearms = [testM16()];
  }
}
