import { addCustomMagazineReducer } from './index';
import { testM1911A1, testM16 } from '../../helpers/testHelpers';
import { AddedM1911A1, AddedM1911A1AndM16 } from '../testResouces';

const customM1911A1Magazine = () => ({ type: 'test', weight: 0.5, cap: 10, qty: 0, custom: true });

const M1911A1WithCustomMagazine = () => {
  const newGun = testM1911A1();
  newGun.mag = [...newGun.mag, customM1911A1Magazine()];
  return newGun;
};

class CharacterWithM1911A1WithCustomMag extends AddedM1911A1 {
  constructor() {
    super();
    this.gear.firearms = [M1911A1WithCustomMagazine()];
  }
}

class CharacterWithM16AndM1911A1WithCustomMag extends CharacterWithM1911A1WithCustomMag {
  constructor() {
    super();
    this.totalWeight += testM16().weight;
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
    this.gear.firearms = [...this.gear.firearms, testM16()];
  }
}

describe('addCustomMagazineReducer function', () => {
  it('should add custom Magazine to firearm', () => {
    const action = { payload: { firearm: 'M1911A1', magazine: customM1911A1Magazine() } };
    const newState = addCustomMagazineReducer(new AddedM1911A1(), action);
    expect(newState).toMatchObject(new CharacterWithM1911A1WithCustomMag());
    expect(newState.gear.firearms[0].mag[1].type).toBe('test');
    expect(newState.gear.firearms[0].mag[1].custom).toBe(true);
  });
  it('should add the magazine to the correct firearm', () => {
    const action = { payload: { firearm: 'M1911A1', magazine: customM1911A1Magazine() } };
    const newState = addCustomMagazineReducer(new AddedM1911A1AndM16(), action);
    expect(newState).toMatchObject(new CharacterWithM16AndM1911A1WithCustomMag());
    expect(newState.gear.firearms[0].mag[1].type).toBe('test');
    expect(newState.gear.firearms[0].mag[1].custom).toBe(true);
  });
});
