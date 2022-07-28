import React from 'react';
import { mount } from 'enzyme';

import RangeSelectModal from './index';

import { AlmStateProvider, WeaponProvider, AlmDispatchProvider } from '../../context';

import { firearms } from '../../../../../data/firearms';
import { hydrateFirearmByObject } from '../../../../../data/firearms/hydrate';

const testFAMAS = () => ({ ...firearms.FAMAS });

describe('Range Select Modal', () => {
  const setModal = jest.fn();
  const dispatch = jest.fn();

  const getWrapper = () => mount(
    <AlmDispatchProvider dispatch={dispatch}>
      <AlmStateProvider state={{ range: 50 }}>
        <WeaponProvider weapon={{ ...hydrateFirearmByObject(testFAMAS()) }}>
          <RangeSelectModal
            setModal={setModal}
          />
        </WeaponProvider>
      </AlmStateProvider>
    </AlmDispatchProvider>);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update range when value is selected', () => {
    const wrapper = getWrapper();
    wrapper.find('KeyPadModal').invoke('handleClick')('1');

    expect(dispatch).toHaveBeenCalledWith({ payload: '1', type: 'RANGE_UPDATED' });
  });

  it('should close the modal when range is selected', () => {
    const wrapper = getWrapper();
    wrapper.find('KeyPadModal').invoke('handleClick')('1');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
