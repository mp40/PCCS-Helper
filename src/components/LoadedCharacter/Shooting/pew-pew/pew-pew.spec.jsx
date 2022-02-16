import React from 'react';
import { mount } from 'enzyme';
import { AlmStateProvider, FirearmProvider, AlmDispatchProvider } from '../context';

import PewPew from './index';

import { firearms } from '../../../../data/firearms';
import { hydrateFirearmByObject } from '../../../../data/firearms/hydrate';

const testFAMAS = () => ({ ...firearms.FAMAS });

describe('Firing interface', () => {
  const setRof = jest.fn();

  const getWrapper = (rof) => mount(
    <AlmStateProvider state={{ target: 'Standing Exposed' }}>
      <FirearmProvider firearm={{ ...hydrateFirearmByObject(testFAMAS()) }}>
        <PewPew rof={rof} setRof={setRof} alm={10} />
      </FirearmProvider>
    </AlmStateProvider>,
  );

  it('should not render Sustained Fire button if Weapon is set to Single', () => {
    const wrapper = getWrapper('Single', 10);
    expect(wrapper.find('button[children="Sustained Fire"]').exists()).toBe(false);
  });

  it('should render Sustained Fire button if Weapon is set to Auto', () => {
    const wrapper = getWrapper('Auto', 10);

    expect(wrapper.find('button[children="Sustained Fire"]').exists()).toBe(true);
  });

  it('should not render Sustained Fire button if Weapon is set to 3RB', () => {
    const wrapper = getWrapper('3RB', 10);

    expect(wrapper.find('button[children="Sustained Fire"]').exists()).toBe(false);
  });
});

describe('Clicking Fire Buttons', () => {
  const setRof = jest.fn();
  const dispatch = jest.fn();

  const getWrapper = (rof) => mount(
    <AlmDispatchProvider dispatch={dispatch}>
      <AlmStateProvider state={{ target: 'Standing Exposed' }}>
        <FirearmProvider firearm={{ ...hydrateFirearmByObject(testFAMAS()) }}>
          <PewPew rof={rof} setRof={setRof} alm={0} />
        </FirearmProvider>
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
