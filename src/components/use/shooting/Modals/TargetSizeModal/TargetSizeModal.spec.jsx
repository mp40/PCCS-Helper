import React from 'react';
import { mount } from 'enzyme';
import { WeaponProvider, AlmDispatchProvider } from '../../context';

import { firearms } from '../../../../../data/firearms';
import { hydrateFirearmByObject } from '../../../../../data/firearms/hydrate';

import TargetSizeSelectModal from './index';

const testFAMAS = () => ({ ...firearms.FAMAS });

describe('Target Size Modal', () => {
  let wrapper;
  const dispatch = jest.fn();
  const setModal = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <AlmDispatchProvider dispatch={dispatch}>
        <WeaponProvider weapon={{ ...hydrateFirearmByObject(testFAMAS()) }}>
          <TargetSizeSelectModal
            setModal={setModal}
          />
        </WeaponProvider>
      </AlmDispatchProvider>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to select small target size', () => {
    wrapper.find('button[children="Fire Over/Around"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 'Fire Over/Around', type: 'TARGET_UPDATED' });
  });

  it('should be possible to select large target size', () => {
    wrapper.find('button[children="Standing Exposed"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 'Standing Exposed', type: 'TARGET_UPDATED' });
  });

  it('should close modal on target size select', () => {
    wrapper.find('button[children="Running"]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
