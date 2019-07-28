import { increaseMagazineReducer } from './index';
import { modifyObjectQtyInArray } from '../../helpers/actionHelpers';
import { testM1911A1 } from '../../helpers/testHelpers';
import {
  AddedM1911A1,
  AddedM1911A1AndM16,
} from '../testResouces';

const m1911A1Magazine = () => testM1911A1().mag[0];

describe('increaseMagazineReducer function', () => {
  const updateMockStateWithM1911A1Mag = (mockState) => {
    const updateMockState = mockState;
    updateMockState.combatStats = {
      ASF: 10,
      CE: 0,
      ISF: 10,
      SAL: 0,
      baseSpeed: 3,
      combatActions: [4, 4],
      damageBonus: 1,
      knockoutValue: 5,
      maxSpeed: 6,
    };
    updateMockState.gear.firearms[0].mag[0].qty += 1;
    updateMockState.totalWeight += m1911A1Magazine().weight;
    return updateMockState;
  };
  it('should increase quantity of the magazine by one', () => {
    const withAdditionalMagzine = updateMockStateWithM1911A1Mag(new AddedM1911A1());
    const action = { payload: { firearm: testM1911A1(), magazine: m1911A1Magazine() } };
    const newState = increaseMagazineReducer(new AddedM1911A1(), action);
    expect(newState).toMatchObject(withAdditionalMagzine);
  });
  it('should increase quantity of the target magazine in array with more than one firearm', () => {
    const action = { payload: { firearm: testM1911A1(), magazine: m1911A1Magazine() } };
    const newState = increaseMagazineReducer(new AddedM1911A1AndM16(), action);
    expect(newState.totalWeight).toBe(17.4);
    expect(newState.combatStats.baseSpeed).toBe(2);
    expect(newState.combatStats.maxSpeed).toBe(4);
    expect(newState.combatStats.damageBonus).toBe(1);
    expect(newState.combatStats.combatActions[0]).toBe(3);
    expect(newState.combatStats.combatActions[1]).toBe(3);
    expect(newState.gear.firearms[0].mag[0].qty).toBe(1);
  });
});

describe('modifing contents of an array', () => {
  const oneSpareMag = { cap: 7,
    qty: 1,
    type: 'Mag',
    weight: 0.7 };
  it('should update magazine quantity in magazine array', () => {
    expect(modifyObjectQtyInArray([m1911A1Magazine()], m1911A1Magazine(), 1)).toEqual([oneSpareMag]);
  });
  it('should update the firearm in the array', () => {
    const magArray = modifyObjectQtyInArray([m1911A1Magazine()], m1911A1Magazine(), 1);
    const updatedGun = testM1911A1();
    updatedGun.mag = magArray;
    expect(modifyObjectQtyInArray([testM1911A1()], updatedGun)[0].mag[0]).toEqual(oneSpareMag);
  });
});
