import { decreaseMagazineReducer } from './index';
import { testM1911A1, testM203 } from '../../helpers/testHelpers';
import { MockState } from '../mockState';
import {
  AddedM1911A1,
  AddedM1911A1AndM16,
} from '../testResouces';

const m1911A1Magazine = () => testM1911A1().mag[0];

const characterWithM203 = () => {
  const m203 = testM203(1);
  const character = new MockState();
  character.gear.firearms = [m203];
  return character;
};

const characterWithM203AndSpareMag = () => {
  const m203 = testM203();
  m203.mag[0].qty = 1;
  const character = new MockState();
  character.gear.firearms = [m203];
  return character;
};

describe('decreaseMagazineReducer function', () => {
  const updateMockStateWithM1911A1Mag = (mockState) => {
    const updateMockState = mockState;
    updateMockState.gear.firearms[0].mag[0].qty += 1;
    updateMockState.totalWeight += m1911A1Magazine().weight;
    return updateMockState;
  };
  const addQtyToMag = (mag) => {
    const newMag = mag;
    newMag.qty += 1;
    return newMag;
  };
  const addSpareMagToGun = (gun) => {
    const newGun = gun;
    newGun.mag[0].qty += 1;
    return newGun;
  };

  it('should decrease quantity of the magazine by one', () => {
    const withAdditionalMagzine = updateMockStateWithM1911A1Mag(new AddedM1911A1());
    const action = { payload: { weapon: addSpareMagToGun(testM1911A1()), magazine: addQtyToMag(m1911A1Magazine()) } };
    const newState = decreaseMagazineReducer(withAdditionalMagzine, action);
    expect(newState).toMatchObject(new AddedM1911A1());
  });
  it('should decrease quantity of the magazine from two to one', () => {
    const withTwoMags = updateMockStateWithM1911A1Mag(updateMockStateWithM1911A1Mag(new AddedM1911A1()));
    const magObj = addQtyToMag(addQtyToMag(m1911A1Magazine()));
    const gunObj = addSpareMagToGun(addSpareMagToGun(testM1911A1()));
    const action = { payload: { weapon: gunObj, magazine: magObj } };
    const newState = decreaseMagazineReducer(withTwoMags, action);
    expect(newState).toMatchObject(updateMockStateWithM1911A1Mag(new AddedM1911A1()));
  });
  it('should decrease quantity of the target magazine in array with more than one firearm', () => {
    const action = { payload: { weapon: addSpareMagToGun(testM1911A1()), magazine: addQtyToMag(m1911A1Magazine()) } };
    const withAdditionalMagzine = updateMockStateWithM1911A1Mag(new AddedM1911A1AndM16());
    const newState = decreaseMagazineReducer(withAdditionalMagzine, action);
    expect(newState).toMatchObject(new AddedM1911A1AndM16());
  });
  it('should decrease the correct magazine', () => {
    const weapon = testM203();
    const magazine = weapon.mag[0];
    magazine.qty = 1;
    const action = { payload: { weapon, magazine } };
    const newState = decreaseMagazineReducer(characterWithM203AndSpareMag(), action);
    expect(newState.gear.firearms[0].mag[0].qty).toBe(0);
    expect(newState.gear.firearms[0].mag[1].qty).toBe(0);
  });
  it('should decrease ammo for attached grenade launcher correctly', () => {
    const weapon = testM203(1);
    const magazine = weapon.mag[2];
    const action = { payload: { weapon, magazine } };
    const newState = decreaseMagazineReducer(characterWithM203(1), action);
    expect(newState.gear.firearms[0].mag[2].qty).toBe(0);
    expect(newState.gear.firearms[0].mag[3].qty).toBe(0);
  });
});
