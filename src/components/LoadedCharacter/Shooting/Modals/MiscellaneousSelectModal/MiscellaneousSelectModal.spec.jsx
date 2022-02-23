import React from 'react';
import { mount } from 'enzyme';
import { AlmDispatchProvider, AlmStateProvider } from '../../context';

import MiscellaneousSelectModal from './index';

describe('Miscellaneous Select Modal', () => {
  let wrapper;
  const setModal = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <AlmDispatchProvider dispatch={dispatch}>
        <AlmStateProvider state={{ miscellaneous: 0 }}>
          <MiscellaneousSelectModal
            setModal={setModal}
          />
        </AlmStateProvider>
      </AlmDispatchProvider>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update miscellaneous when value is selected', () => {
    wrapper.find('button[children=1]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 1, type: 'MISCELLANEOUS_UPDATED' });
  });

  it('should close the modal when value is selected', () => {
    wrapper.find('button[children=1]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
