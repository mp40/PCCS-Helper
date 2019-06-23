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
    const withAdditionalMagzine = updateMockStateWithM1911A1Mag(new AddedM1911A1AndM16());
    const newState = increaseMagazineReducer(new AddedM1911A1AndM16(), action);
    expect(newState).toMatchObject(withAdditionalMagzine);
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
