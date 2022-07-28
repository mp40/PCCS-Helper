import React from 'react';
import { mount } from 'enzyme';
import { AlmDispatchProvider, AlmStateProvider, WeaponProvider } from '../../context';

import { firearms } from '../../../../../data/firearms';
import { hydrateFirearmByObject } from '../../../../../data/firearms/hydrate';

import AimsSelectModal from './index';

const testFAMAS = () => ({ ...firearms.FAMAS });

describe('Aim Select Modal', () => {
  let wrapper;
  const setModal = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <AlmDispatchProvider dispatch={dispatch}>
        <AlmStateProvider state={{ aims: 1 }}>
          <WeaponProvider weapon={{ ...hydrateFirearmByObject(testFAMAS()) }}>
            <AimsSelectModal setModal={setModal} />
          </WeaponProvider>
        </AlmStateProvider>
      </AlmDispatchProvider>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set the aim value  when button clicked', () => {
    wrapper.find('button[children=5]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 5, type: 'AIMS_UPDATED' });
  });

  it('should close the modal when button clicked', () => {
    wrapper.find('button[children=5]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
