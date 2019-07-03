import { removeAllFirearmModificationsReducer } from './index';
import { AddedM1911A1AndM16 } from '../testResouces';

class CharacterWithM1911A1AndModdedM16 extends AddedM1911A1AndM16 {
  constructor() {
    super();
    this.totalWeight += 1;
    this.gear.firearms[1].modNotes = [{ note: 'test', weightMod: 1 }];
    this.gear.firearms[1].mag = [...this.gear.firearms[1].mag, { type: 'test', weight: 0.5, cap: 10, qty: 0, custom: true }];
  }
}

describe('removeAllFirearmModificationsReducer', () => {
  it('should return clean copy of the correct firearm', () => {
    const action = { payload: 'M16' };
    const newState = removeAllFirearmModificationsReducer(new CharacterWithM1911A1AndModdedM16(), action);
    expect(newState).toMatchObject(new AddedM1911A1AndM16());
    expect(newState.gear.firearms[1].modNotes).toBe(undefined);
    expect(newState.gear.firearms[1].mag.length).toBe(2);
    expect(newState.totalWeight).toBe(16.7);
  });
});
