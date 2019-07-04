import { removeAllFirearmModificationsReducer, removeModificationWeight } from './index';
import { AddedM1911A1AndM16, AddedTwoM1911A1 } from '../testResouces';
import { testM1911A1, testM16 } from '../../helpers/testHelpers';

class CharacterWithM1911A1AndModdedM16 extends AddedM1911A1AndM16 {
  constructor() {
    super();
    this.totalWeight += 1;
    this.gear.firearms[1].weight += 1;
    this.gear.firearms[1].modNotes = [{ note: 'test', weightMod: 1 }];
    this.gear.firearms[1].mag = [...this.gear.firearms[1].mag, { type: 'test', weight: 0.5, cap: 10, qty: 0, custom: true }];
  }
}

class CharacterWithTwoModdedM1911A1 extends AddedTwoM1911A1 {
  constructor() {
    super();
    this.totalWeight += 0.5 + 1.4;
    this.gear.firearms[0].mag = [{ type: 'test', weight: 0.5, cap: 10, qty: 1, custom: true }, { type: 'Mag', weight: 0.7, cap: 7, qty: 2 }];
  }
}

describe('removeAllFirearmModificationsReducer', () => {
  it('should return clean copy of the correct firearm', () => {
    const action = { payload: 'M16' };
    const newState = removeAllFirearmModificationsReducer(new CharacterWithM1911A1AndModdedM16(), action);
    expect(newState).toMatchObject(new AddedM1911A1AndM16());
    expect(newState.gear.firearms[1].modNotes).toBe(undefined);
    expect(newState.gear.firearms[1].mag.length).toBe(2);
    expect(newState.totalWeight).toBe(5 + testM1911A1().weight + testM16().weight);
    expect(newState.gear.firearms[1].weight).toBe(testM16().weight);
  });
  it('should retain the same firearm and standard magazine qty values', () => {
    const action = { payload: 'M1911A1' };
    const characterWithTwoGunsAndSpareMags = new AddedTwoM1911A1();
    characterWithTwoGunsAndSpareMags.totalWeight += 1.4;
    characterWithTwoGunsAndSpareMags.gear.firearms[0].mag[0].qty = 2;
    const newState = removeAllFirearmModificationsReducer(new CharacterWithTwoModdedM1911A1(), action);
    expect(newState).toMatchObject(characterWithTwoGunsAndSpareMags);
  });
});

describe('removeModificationWeight helper function', () => {
  it('should return gun weight if moddifications are undefined or null', () => {
    expect(removeModificationWeight(5, undefined)).toBe(5);
    expect(removeModificationWeight(5, null)).toBe(5);
  });
  it('should remove the weightMod value from the gun weight', () => {
    const modNotes = [{ note: 'test', weightMod: 1 }];
    expect(removeModificationWeight(5, modNotes)).toBe(4);
  });
});
