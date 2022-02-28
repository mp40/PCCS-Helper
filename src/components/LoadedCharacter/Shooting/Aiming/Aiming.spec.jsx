import React from 'react';
import { mount } from 'enzyme';

import { AlmStateProvider, WeaponProvider, AlmDispatchProvider } from '../context';

import Aiming from './index';

import { firearms } from '../../../../data/firearms';
import { hydrateFirearmByObject } from '../../../../data/firearms/hydrate';

const testFAMAS = () => ({ ...firearms.FAMAS });

describe('Aiming buttons', () => {
  const setModal = jest.fn();
  const dispatch = jest.fn();

  const getWrapper = (aims = 1) => mount(
    <AlmDispatchProvider dispatch={dispatch}>
      <AlmStateProvider state={{ aims }}>
        <WeaponProvider weapon={{ ...hydrateFirearmByObject(testFAMAS()) }}>
          <Aiming setModal={setModal} />
        </WeaponProvider>
      </AlmStateProvider>
    </AlmDispatchProvider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display the aim count on the main aim button', () => {
    const wrapper = getWrapper();

    const aimsButton = wrapper.find('span[children="Aims"]').closest('button');

    expect(aimsButton.text()).toContain('1');
  });

  it('should increment aims from 1 to 2 when the plus aim button is clicked', () => {
    const wrapper = getWrapper();

    wrapper.find('button[children="+"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 2, type: 'AIMS_UPDATED' });
  });

  it('should increment aims from 2 to 3 when the plus aim button is clicked', () => {
    const wrapper = getWrapper(2);

    wrapper.find('button[children="+"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 3, type: 'AIMS_UPDATED' });
  });

  it('should not increment aims greater than maxAims', () => {
    const maxFamasAims = 9;
    const wrapper = getWrapper(maxFamasAims);

    wrapper.find('button[children="+"]').simulate('click');

    expect(dispatch).not.toHaveBeenCalled();
  });

  it('should apply styles to show cannot increment', () => {
    const maxFamasAims = 9;
    const wrapper = getWrapper(maxFamasAims);

    expect(wrapper.find('button[children="+"]').props().className).toBe('unavailable');
  });

  it('should decrement aims from 6 to 5 when the minus aims button is clicked', () => {
    const wrapper = getWrapper(6);

    wrapper.find('button[children="-"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 5, type: 'AIMS_UPDATED' });
  });

  it('should decrement aims from 5 to 4 when the minus aims button is clicked', () => {
    const wrapper = getWrapper(5);
    wrapper.find('button[children="-"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 4, type: 'AIMS_UPDATED' });
  });

  it('should not decrement aims less than 1', () => {
    const wrapper = getWrapper(1);

    wrapper.find('button[children="-"]').simulate('click');

    expect(dispatch).not.toHaveBeenCalled();
  });

  it('should apply styles to show cannot decrement', () => {
    const wrapper = getWrapper();

    expect(wrapper.find('button[children="-"]').props().className).toBe('unavailable');
  });

  it('should open the Aiming Modal when the main aims button is clicked', () => {
    const wrapper = getWrapper();

    wrapper.find('span[children="Aims"]').closest('button').simulate('click');

    expect(setModal).toHaveBeenCalledWith('aims');
  });
});
