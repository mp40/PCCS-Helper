import React from 'react';
import { mount } from 'enzyme';
import { AlmStateProvider, WeaponProvider, AlmDispatchProvider } from '../context';

import PewPew from './index';

import { firearms } from '../../../../data/firearms';
import { hydrateFirearmByObject } from '../../../../data/firearms/hydrate';

const testFAMAS = () => ({ ...firearms.FAMAS });
const testM16 = () => ({ ...firearms.M16 });

describe('Firing interface', () => {
  const setRof = jest.fn();

  const getWrapper = (rof, weapon = hydrateFirearmByObject(testFAMAS())) => mount(
    <AlmStateProvider state={{ target: 'Standing Exposed' }}>
      <WeaponProvider weapon={{ ...weapon }}>
        <PewPew rof={rof} setRof={setRof} alm={10} />
      </WeaponProvider>
    </AlmStateProvider>,
  );

  it('should not render weapons on grenade list', () => {
    const wrapper = getWrapper('Single', { list: 'grenades' });

    expect(wrapper.find('PewPew').html()).toBe(null);
  });

  it('should not render Sustained Fire button if Weapon is set to Single', () => {
    const wrapper = getWrapper('Single');
    expect(wrapper.find('button[children="Sustained Fire"]').exists()).toBe(false);
  });

  it('should render Sustained Fire button if Weapon is set to Auto', () => {
    const wrapper = getWrapper('Auto');

    expect(wrapper.find('button[children="Sustained Fire"]').exists()).toBe(true);
  });

  it('should not render Sustained Fire button if Weapon is set to 3RB', () => {
    const wrapper = getWrapper('3RB');

    expect(wrapper.find('button[children="Sustained Fire"]').exists()).toBe(false);
  });
});

describe('Clicking Fire Buttons', () => {
  const setRof = jest.fn();
  const dispatch = jest.fn();

  const getWrapper = (rof) => mount(
    <AlmDispatchProvider dispatch={dispatch}>
      <AlmStateProvider state={{ target: 'Standing Exposed' }}>
        <WeaponProvider weapon={{ ...hydrateFirearmByObject(testFAMAS()) }}>
          <PewPew rof={rof} setRof={setRof} alm={0} />
        </WeaponProvider>
      </AlmStateProvider>
    </AlmDispatchProvider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should reset aims when the fire button is clicked', () => {
    const wrapper = getWrapper('Single');
    wrapper.find('button[children="FIRE"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 1, type: 'AIMS_UPDATED' });
  });

  it('should not reset aims when sustained fire button is clicked', () => {
    const wrapper = getWrapper('Auto');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    expect(dispatch).not.toHaveBeenCalled();
  });

  it('should minus the SAB from the EAL when the sustained fire button is clicked', () => {
    const wrapper = getWrapper('Auto');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    expect(wrapper.text()).toContain('Hit Chance: 38%');
  });

  it('should minus the SAB from the EAL every time the sustained fire button is clicked', () => {
    const wrapper = getWrapper('Auto');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    wrapper.find('button[children="Sustained Fire"]').simulate('click');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    expect(wrapper.text()).toContain('Hit Chance: 13%');
  });

  it('should replace Fire button with Cease Fire button from the EAL when the sustained fire button is clicked', () => {
    const wrapper = getWrapper('Auto');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    expect(wrapper.find('button[children="FIRE"]').exists()).toBe(false);
    expect(wrapper.find('button[children="Cease Fire"]').exists()).toBe(true);
  });

  it('should reset aims to 1 and sab to 0 when Cease Fire button clicked', () => {
    const wrapper = getWrapper('Auto');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    wrapper.find('button[children="Cease Fire"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 1, type: 'AIMS_UPDATED' });
    expect(wrapper.text()).toContain('Hit Chance: 52%');
    expect(wrapper.find('button[children="Cease Fire"]').exists()).toBe(false);
  });
});

describe('Ammo Used Tally', () => {
  const setRof = jest.fn();
  const dispatch = jest.fn();

  const getWrapper = (rof, firearm = testFAMAS()) => mount(
    <AlmDispatchProvider dispatch={dispatch}>
      <AlmStateProvider state={{ target: 'Standing Exposed' }}>
        <WeaponProvider weapon={{ ...hydrateFirearmByObject(firearm) }}>
          <PewPew rof={rof} setRof={setRof} alm={0} />
        </WeaponProvider>
      </AlmStateProvider>
    </AlmDispatchProvider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add one for single fire', () => {
    const wrapper = getWrapper('Single');
    wrapper.find('button[children="FIRE"]').simulate('click');

    expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 1');
  });

  it('should track multiple shots in single fire', () => {
    const wrapper = getWrapper('Single');
    wrapper.find('button[children="FIRE"]').simulate('click');
    wrapper.find('button[children="FIRE"]').simulate('click');
    wrapper.find('button[children="FIRE"]').simulate('click');

    expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 3');
  });

  it('should add auto fire rate for auto fire', () => {
    const wrapper = getWrapper('Auto');
    wrapper.find('button[children="FIRE"]').simulate('click');

    expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 8');
  });

  it('should track multiple bursts for auto fire', () => {
    const wrapper = getWrapper('Auto');
    wrapper.find('button[children="FIRE"]').simulate('click');
    wrapper.find('button[children="FIRE"]').simulate('click');

    expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 16');
  });

  it('should track expended rounds in sustained fire for auto fire', () => {
    const wrapper = getWrapper('Auto');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 16');
  });

  it('should not expend rounds on Cease Fire', () => {
    const wrapper = getWrapper('Auto');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    wrapper.find('button[children="Cease Fire"]').simulate('click');

    expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 16');
  });

  it('should add 3 rounds for three round burst', () => {
    const wrapper = getWrapper('3RB');
    wrapper.find('button[children="FIRE"]').simulate('click');

    expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 3');
  });

  it('should track multiple three round bursts', () => {
    const wrapper = getWrapper('3RB');
    wrapper.find('button[children="FIRE"]').simulate('click');
    wrapper.find('button[children="FIRE"]').simulate('click');

    expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 6');
  });

  it('should reset used rounds when reload button clicked', () => {
    const wrapper = getWrapper('3RB');
    wrapper.find('button[children="FIRE"]').simulate('click');
    wrapper.find('button[children="FIRE"]').simulate('click');

    wrapper.find('button[children="Reload"]').simulate('click');

    expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 0');
  });

  it('should reset sab and aims reload button clicked', () => {
    const firearm = testFAMAS();
    firearm.mag[0].cap = 0;
    const wrapper = getWrapper('Auto');

    wrapper.find('button[children="Sustained Fire"]').simulate('click');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    wrapper.find('button[children="Reload"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 1, type: 'AIMS_UPDATED' });
    expect(wrapper.text()).toContain('Hit Chance: 52%');
  });

  it('should show warning when 1 shot left in Single fire', () => {
    const firearm = testFAMAS();
    firearm.mag[0].cap = 1;
    const wrapper = getWrapper('Single');

    const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

    expect(roundsFiredDiv.childAt(1).props().className).toBe('lowMag');
  });

  it('should show warning when 3 rounds left in 3RB', () => {
    const firearm = testFAMAS();
    firearm.mag[0].cap = 3;
    const wrapper = getWrapper('3RB');

    const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

    expect(roundsFiredDiv.childAt(1).props().className).toBe('lowMag');
  });

  it('should show warning when less than 3 rounds left in 3RB', () => {
    const firearm = testFAMAS();
    firearm.mag[0].cap = 2;
    const wrapper = getWrapper('3RB');

    const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

    expect(roundsFiredDiv.childAt(1).props().className).toBe('lowMag');
  });

  it('should show warning when 1 burst left in Auto', () => {
    const firearm = testFAMAS();
    firearm.mag[0].cap = 8;
    const wrapper = getWrapper('Auto');

    const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

    expect(roundsFiredDiv.childAt(1).props().className).toBe('lowMag');
  });

  it('should show warning when less than 1 burst left in Auto', () => {
    const firearm = testFAMAS();
    firearm.mag[0].cap = 7;
    const wrapper = getWrapper('Auto');

    const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

    expect(roundsFiredDiv.childAt(1).props().className).toBe('lowMag');
  });

  it('should show warning when out of ammo', () => {
    const firearm = testFAMAS();
    firearm.mag[0].cap = 0;
    const wrapper = getWrapper('Single', firearm);

    const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

    expect(roundsFiredDiv.childAt(1).props().className).toBe('emptyMag');
  });
});

describe('Changing Firearm', () => {
  const setRof = jest.fn();
  const dispatch = jest.fn();

  const getWrapper = () => mount(
    <WeaponProvider weapon={{ ...hydrateFirearmByObject(testFAMAS()) }}>
      <AlmDispatchProvider dispatch={dispatch}>
        <AlmStateProvider state={{ target: 'Standing Exposed' }}>
          <PewPew rof="Auto" setRof={setRof} alm={0} />
        </AlmStateProvider>
      </AlmDispatchProvider>
    </WeaponProvider>,
  );
  it('should clear sab on weapon change', () => {
    const wrapper = getWrapper();

    wrapper.find('button[children="Sustained Fire"]').simulate('click');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    wrapper.setProps({ weapon: { ...hydrateFirearmByObject(testM16()) } });

    expect(wrapper.text()).toContain('Hit Chance: 52%');
  });

  it('should clear rounds fired on weapon change', () => {
    const wrapper = getWrapper();

    wrapper.find('button[children="Sustained Fire"]').simulate('click');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    wrapper.setProps({ weapon: { ...hydrateFirearmByObject(testM16()) } });

    expect(wrapper.text()).toContain('Rounds Fired: 0');
  });
});
