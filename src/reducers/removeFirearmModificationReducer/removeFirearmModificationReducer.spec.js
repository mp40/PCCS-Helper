import { removeFirearmModificationReducer } from './index';
import { testM1911A1, testM16 } from '../../helpers/testHelpers';
import { AddedM1911A1, AddedM1911A1AndM16 } from '../testResouces';

const moddedM1911A1 = (weightChange) => {
  const newM1911A1 = testM1911A1();
  newM1911A1.weight = testM1911A1().weight + weightChange;
  newM1911A1.modNote = { note: 'test', weightMod: weightChange };
  return newM1911A1;
};

const moddedM1911A1ExtraWeight = (() => moddedM1911A1(1));

const moddedM1911A1LessWeight = (() => moddedM1911A1(-0.5));

class CharacterWithModifiedM1911A1 extends AddedM1911A1 {
  constructor(newM1911A1) {
    super(newM1911A1);
    this.totalWeight += newM1911A1.modNote.weightMod;
    this.gear.firearms = [newM1911A1];
  }
}

const characterWithM16AndModdedM1911A1 = () => {
  const character = new CharacterWithModifiedM1911A1(moddedM1911A1(1));
  character.totalWeight += testM16().weight;
  character.gear.firearms = [moddedM1911A1(1), testM16()];
  return character;
};

describe('removeFirearmModificationReducer function', () => {
  it('should remove modification from the weapon', () => {
    const modNote = { note: 'test', weightMod: 1 };
    const action = { payload: { firearm: 'M1911A1', modNote } };

    const newState = removeFirearmModificationReducer(
      new CharacterWithModifiedM1911A1(moddedM1911A1ExtraWeight()),
      action);
    expect(newState).toMatchObject(new AddedM1911A1());
    expect(newState.gear.firearms[0]).not.toHaveProperty('modNote');
  });
  it('should remove modifcations that reduce weight correctly', () => {
    const modNote = { note: 'test', weightMod: -0.5 };
    const action = { payload: { firearm: 'M1911A1', modNote } };

    const newState = removeFirearmModificationReducer(
      new CharacterWithModifiedM1911A1(moddedM1911A1LessWeight()),
      action);
    expect(newState).toMatchObject(new AddedM1911A1());
    expect(newState.gear.firearms[0]).not.toHaveProperty('modNote');
  });
  it('should remove the modification from the correct weapon', () => {
    const modNote = { note: 'test', weightMod: 1 };
    const action = { payload: { firearm: 'M1911A1', modNote } };
    const newState = removeFirearmModificationReducer(
      characterWithM16AndModdedM1911A1(),
      action);
    expect(newState).toMatchObject(new AddedM1911A1AndM16());
    expect(newState.gear.firearms[0]).not.toHaveProperty('modNote');
  });
});
