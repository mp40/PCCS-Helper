import { removeMagazineReducer } from './index';
import { AddedM1911A1AndM16 } from '../testResouces';
import { testM16, testM1911A1 } from '../../helpers/testHelpers';

const characterWithM1911AndM16WithSpareMags = () => {
  const character = new AddedM1911A1AndM16();
  character.gear.firearms[1].mag[1].qty = 2;
  character.totalWeight += 2;
  return character;
};

const characterWithM1911AndM16WithCustomMags = () => {
  const character = characterWithM1911AndM16WithSpareMags();
  character.gear.firearms[1].mag[1].custom = true;
  return character;
};

describe('removeMagazineReducer', () => {
  it('should set selected magazine for selected firearm to 0 and mark as removed', () => {
    const action = { payload: { firearm: 'M16', magazine: { type: 'Mag', weight: 1, cap: 30, qty: 2 } } };
    const newState = removeMagazineReducer(characterWithM1911AndM16WithSpareMags(), action);
    expect(newState).toMatchObject(new AddedM1911A1AndM16());
    expect(newState.totalWeight).toBe(5 + testM1911A1().weight + testM16().weight);
    expect(newState.gear.firearms[1].mag[1].qty).toBe(0);
    expect(newState.gear.firearms[1].mag[1].removed).toBe(true);
    expect(newState.gear.firearms[1].mag.length).toBe(2);
  });
  it('should delete custom magazines from the firearm', () => {
    const action = { payload: { firearm: 'M16', magazine: { type: 'Mag', weight: 1, cap: 30, qty: 2, custom: true } } };
    const newState = removeMagazineReducer(characterWithM1911AndM16WithCustomMags(), action);
    const x = characterWithM1911AndM16WithCustomMags().gear.firearms[1].mag[1];
    console.log('char>>', x);
    // console.log('---->>>', newState.gear.firearms[1].mag);
    expect(newState.gear.firearms[1].mag.length).toBe(1);
    // console.log('---->>>', newState.gear.firearms[1].mag);
    // expect(newState.totalWeight).toBe(5 + testM1911A1().weight + testM16().weight);
  });
});
