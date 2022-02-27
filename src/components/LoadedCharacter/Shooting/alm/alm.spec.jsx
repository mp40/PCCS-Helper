import React from 'react';
import { mount } from 'enzyme';
import { AlmStateProvider, WeaponProvider } from '../context';

import Alm from './index';

import { initialState } from '../data';

import { firearms } from '../../../../data/firearms';
import { hydrateFirearmByObject } from '../../../../data/firearms/hydrate';

const testFAMAS = () => ({ ...firearms.FAMAS });
const testScopedFAMAS = () => {
  const firearm = { ...firearms.FAMAS };
  firearm.attachedOptic = 'Medium Power Scope';
  return firearm;
};

const range7 = 19;
const range12 = 15;
const range50 = 5;

const famasOneAim = -23;
const famasThreeAims = -9;
const famasEightAims = -2;

const hipFire = -6;
const opticUnderEight = -6;
const sling = 1;

const mediumScope = [1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3];

const initialAlm = range50 + famasOneAim;

const getState = () => ({
  ...initialState,
  movement: { ...initialState.movement },
  situation: { ...initialState.situation },
  visibility: { ...initialState.visibility },
});

const setAlm = jest.fn();

const getWrapper = (firearm, state) => mount(
  <AlmStateProvider state={{ ...state }}>
    <WeaponProvider weapon={{ ...hydrateFirearmByObject(firearm) }}>
      <Alm setAlm={setAlm} />
    </WeaponProvider>
  </AlmStateProvider>,
);

describe('using optics', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should mount and send alm based on range and one aim for unscoped rifle at default range 50', () => {
    const firearm = { ...testFAMAS() };
    getWrapper(firearm, getState());

    expect(setAlm).toHaveBeenCalledWith(initialAlm);
  });

  it('should add optics bonus for 1 aim at 12 hexes', () => {
    const firearm = { ...testScopedFAMAS() };
    const state = { ...getState(), range: 12 };
    getWrapper(firearm, state);

    expect(setAlm).toHaveBeenCalledWith(range12 + famasOneAim + mediumScope[0]);
  });

  it('should not add optics bonus if hip firing for 1 aim at 12 hexes', () => {
    const firearm = { ...testScopedFAMAS() };
    const state = { ...getState(), range: 12 };
    state.situation.hipFire = true;
    getWrapper(firearm, state);

    expect(setAlm).toHaveBeenCalledWith(range12 + famasOneAim + hipFire);
  });

  it('should add optics bonus for 3 aims at 12 hexes', () => {
    const firearm = { ...testScopedFAMAS() };
    const state = { ...getState(), range: 12, aims: 3 };
    getWrapper(firearm, state);

    expect(setAlm).toHaveBeenCalledWith(range12 + famasThreeAims + mediumScope[2]);
  });

  it('should not add optics bonus if hip firing for 3 aims at 12 hexes', () => {
    const firearm = { ...testScopedFAMAS() };
    const state = { ...getState(), range: 12, aims: 3 };
    getWrapper(firearm, state);

    expect(setAlm).toHaveBeenCalledWith(range12 + famasThreeAims + mediumScope[2]);
  });

  it('should add penality if optics under minimum range bonus', () => {
    const firearm = { ...testScopedFAMAS() };
    const state = { ...getState(), range: 7 };
    getWrapper(firearm, state);

    expect(setAlm).toHaveBeenCalledWith(range7 + famasOneAim + opticUnderEight);
  });
});

describe('using sling', () => {
  it('should not add bonus when aims 7 or less', () => {
    const firearm = { ...testFAMAS() };
    const state = { ...getState(), situation: { ...getState().situation, slingSupport: true } };
    getWrapper(firearm, state);

    expect(setAlm).toHaveBeenCalledWith(initialAlm);
  });

  it('should add bonus when aims over 7', () => {
    const firearm = { ...testFAMAS() };
    const state = { ...getState(), aims: 8, situation: { ...getState().situation, slingSupport: true } };
    getWrapper(firearm, state);

    expect(setAlm).toHaveBeenCalledWith(famasEightAims + sling + range50);
  });
});
