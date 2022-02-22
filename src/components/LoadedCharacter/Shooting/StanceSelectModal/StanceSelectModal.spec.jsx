import React from 'react';
import { mount } from 'enzyme';
import { AlmDispatchProvider } from '../context';

import StanceSelectModal from './index';

describe('Stance Select Modal', () => {
  let wrapper;
  const setModal = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <AlmDispatchProvider dispatch={dispatch}>
        <StanceSelectModal setModal={setModal} />
      </AlmDispatchProvider>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to select Standing stance', () => {
    wrapper.find('button[children="Standing"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 'Standing', type: 'STANCE_UPDATED' });
  });

  it('should be possible to select Kneeling stance', () => {
    wrapper.find('button[children="Kneeling"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 'Kneeling', type: 'STANCE_UPDATED' });
  });

  it('should be possible to select Prone stance', () => {
    wrapper.find('button[children="Prone"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ payload: 'Prone', type: 'STANCE_UPDATED' });
  });

  it('should close modal when stance selected', () => {
    wrapper.find('button[children="Standing"]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
