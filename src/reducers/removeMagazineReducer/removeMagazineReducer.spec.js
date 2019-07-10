import { removeMagazineReducer } from './index';
import { AddedM1911A1AndM16 } from '../testResouces';

const characterWithM1911AndM16WithSpareMags = () => {
  const character = new AddedM1911A1AndM16();
  character.gear.firearms[1].mag[1].qty = 2;
  character.gear.firearms[1].weight += 2;
  character.totalWeight += 2;
  return character;
};

describe('removeMagazineReducer', () => {
  it('should set selected magazine for selected firearm to 0 and mark as removed', () => {
    const action = { payload: { firearm: 'M16', magazine: { type: 'Mag', weight: 1, cap: 30, qty: 2 } } };
    const newState = removeMagazineReducer(characterWithM1911AndM16WithSpareMags(), action);
    expect(newState).toMatchObject(new AddedM1911A1AndM16());
    expect(newState.gear.firearms[1].mag[1].qty).toBe(0);
    expect(newState.gear.firearms[1].weight).toBe(8.7);
    expect(newState.gear.firearms[1].mag[1].removed).toBe(true);
  });
});
