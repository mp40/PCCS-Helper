import { hydrateCurrentCharacterReducer } from './index';
import { MockState } from '../mockState';

import { testM1911A1 } from '../../helpers/testHelpers';

describe('Hydrate Current Character', () => {
  const equipment = [
    { name: 'Belt', weight: 0.7, qty: 1 },
    { name: 'Holster', weight: 0.4, qty: 1 },
    { name: 'Hatchet', weight: 2.5, qty: 1 },
    { name: 'D-Ration', weight: 0.25, qty: 2 },
  ];

  const firearms = [
    {
      name: 'M16',
      qty: 1,
      mag: [{ type: 'Mag', weight: 1, cap: 30, qty: 4 }, { type: 'Mag', weight: 0.7, cap: 20, qty: 1 }],
      modNotes: [{ weightMod: 0.5 }],
    },
    {
      name: 'M1911A1',
      qty: 2,
      mag: [{ weight: 0.7, qty: 0 }],
    },
    {
      name: 'AK 74 GP-25',
      qty: 1,
      mag: [{ weight: 1.1, qty: 0 }, { weight: 0.56, qty: 1 }],
    },
  ];

  const grenades = [
    { name: 'Flash Bang', qty: 1 },
    { name: 'M2', qty: 2 },
  ];

  const launchers = [
    {
      name: 'M79',
      qty: 1,
      mag: [{ weight: 0.51, qty: 1 }, { weight: 0.51, qty: 3 }],
    },
    {
      name: 'M72 A2 LAW',
      qty: 2,
      mag: [{ weight: '-' }],
    },
  ];

  const grimes = {
    character_id: 666,
    character_name: 'Grimes',
    str: 14,
    int: 13,
    hlt: 11,
    wil: 16,
    agi: 15,
    gun_level: 4,
    hand_level: 4,
    uniform: 'Winter',
    helmet: 'M1',
    vest: 'M69',
    equipment,
    firearms,
    grenades,
    launchers,
    notes: {},
  };

  const simpleCharacter = {
    character_id: 13,
    character_name: 'Mr Test',
    str: 14,
    int: 10,
    hlt: 10,
    wil: 10,
    agi: 12,
    gun_level: 4,
    hand_level: 2,
    uniform: 'Normal',
    helmet: null,
    vest: null,
    equipment,
    firearms: [{ name: 'M1911A1', qty: 1, mag: [{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }] }],
    grenades: [],
    launchers: [],
    notes: {},
  };

  const hydratedSimpleCharacter = {
    characterId: simpleCharacter.character_id,
    name: simpleCharacter.character_name,
    str: simpleCharacter.str,
    int: simpleCharacter.int,
    hlt: simpleCharacter.hlt,
    wil: simpleCharacter.wil,
    agi: simpleCharacter.agi,
    gunLevel: simpleCharacter.gun_level,
    handLevel: simpleCharacter.hand_level,
    totalWeight: 12.1,
    baseSpeed: 2.5,
    maxSpeed: 5,
    SAL: 10,
    CE: 7,
    ISF: 20,
    ASF: 19,
    knockoutValue: 20,
    damageBonus: 1.5,
    gunCombatActions: 6,
    handCombatActions: 5,
    uniform: 'Normal',
    equipment,
    firearms: [testM1911A1()],
    grenades: [],
    launchers: [],
    helmet: undefined,
    vest: undefined,
  };

  it('should hydrate the character to current character', () => {
    let state = new MockState();
    const action = { payload: simpleCharacter };

    state = hydrateCurrentCharacterReducer(state, action);

    expect(state.currentCharacter).toStrictEqual(hydratedSimpleCharacter);
  });

  it('should hydrate large amounts of gear', () => {
    let state = new MockState();
    const action = { payload: grimes };

    state = hydrateCurrentCharacterReducer(state, action);

    expect(state.currentCharacter.characterId).toBe(666);
    expect(state.currentCharacter.name).toBe('Grimes');
    expect(state.currentCharacter.totalWeight).toBe(75.1);

    expect(state.currentCharacter.SAL).toBe(10);
    expect(state.currentCharacter.CE).toBe(10);
    expect(state.currentCharacter.ISF).toBe(23);
    expect(state.currentCharacter.ASF).toBe(25);
    expect(state.currentCharacter.knockoutValue).toBe(32);
    expect(state.currentCharacter.damageBonus).toBe(1);
    expect(state.currentCharacter.gunCombatActions).toBe(4);
    expect(state.currentCharacter.handCombatActions).toBe(4);
  });
});
