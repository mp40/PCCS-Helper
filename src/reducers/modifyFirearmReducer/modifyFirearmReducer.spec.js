import { modifyFirearmReducer } from './index';
import { testM1911A1, testM16 } from '../../helpers/testHelpers';
import { AddedM1911A1, AddedM1911A1AndM16 } from '../testResouces';

const moddedM1911A1 = (weightChange) => {
  const newM1911A1 = testM1911A1();
  newM1911A1.weight = testM1911A1().weight + weightChange;
  newM1911A1.modNotes = [{ note: 'test', weightMod: weightChange }];
  return newM1911A1;
};

const moddedM1911A1ExtraWeight = (() => moddedM1911A1(1));

const moddedM1911A1LessWeight = (() => moddedM1911A1(-0.5));

class CharacterWithModifiedM1911A1 extends AddedM1911A1 {
  constructor(newM1911A1) {
    super(newM1911A1);
    this.totalWeight += newM1911A1.modNotes[0].weightMod;
    this.gear.firearms = [newM1911A1];
  }
}

const characterWithM16AndModdedM1911A1 = () => {
  const character = new CharacterWithModifiedM1911A1(moddedM1911A1(1));
  character.totalWeight += testM16().weight;
  character.combatStats = {
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
  character.gear.firearms = [moddedM1911A1(1), testM16()];
  return character;
};

describe('addFirearmReducer function', () => {
  it('should modify the weapon correctly with additional weight', () => {
    const modNote = { note: 'test', weightMod: 1 };
    const action = { payload: { firearm: 'M1911A1', modNote } };
    const newState = modifyFirearmReducer(new AddedM1911A1(), action);
    expect(newState).toMatchObject(new CharacterWithModifiedM1911A1(moddedM1911A1ExtraWeight()));
  });
  it('should modify the weapon correctly with less weight', () => {
    const modNote = { note: 'test', weightMod: -0.5 };
    const action = { payload: { firearm: 'M1911A1', modNote } };
    const newState = modifyFirearmReducer(new AddedM1911A1(), action);
    expect(newState.gear).toMatchObject(new CharacterWithModifiedM1911A1(moddedM1911A1LessWeight()).gear);
  });
  it('should modify the correct weapon', () => {
    const modNote = { note: 'test', weightMod: 1 };
    const action = { payload: { firearm: 'M1911A1', modNote } };
    const newState = modifyFirearmReducer(new AddedM1911A1AndM16(), action);
    expect(newState).toMatchObject(characterWithM16AndModdedM1911A1());
  });
});
