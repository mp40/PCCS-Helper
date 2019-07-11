import { replaceMagazineReducer } from './index';
import { AddedM1911A1AndM16 } from '../testResouces';

const characterWithM1911AndM16With30RndMagsRemoved = () => {
  const character = new AddedM1911A1AndM16();
  character.gear.firearms[1].mag[1].removed = true;
  return character;
};

const characterHasReplaced30RoundMags = () => {
  const character = characterWithM1911AndM16With30RndMagsRemoved();
  character.gear.firearms[1].mag[1].removed = false;
  return character;
};

describe('removeMagazineReducer', () => {
  it('should set selected magazine for selected firearm to 0 and mark as removed', () => {
    const action = { payload: {
      firearm: 'M16',
      magazine: { type: 'Mag', weight: 1, cap: 30, qty: 0, removed: true },
    } };
    const newState = replaceMagazineReducer(characterWithM1911AndM16With30RndMagsRemoved(), action);
    expect(newState).toMatchObject(characterHasReplaced30RoundMags());
    expect(newState.gear.firearms[1].mag[1].removed).toBe(false);
  });
});
