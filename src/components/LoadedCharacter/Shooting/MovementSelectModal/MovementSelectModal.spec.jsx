import React from 'react';
import { mount } from 'enzyme';

import MovementSelectModal from './index';
import { AlmDispatchProvider, AlmStateProvider } from '../context';

describe('Movement Select Modal', () => {
  let wrapper;
  const setModal = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <AlmDispatchProvider dispatch={dispatch}>
        <AlmStateProvider state={{ movement: { shooter: 0, target: 0 } }}>
          <MovementSelectModal
            setModal={setModal}
          />
        </AlmStateProvider>
      </AlmDispatchProvider>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render modal showing current movement for shooter', () => {
    const shooterKeyPad = wrapper.find('KeyPad').at(0);

    expect(shooterKeyPad.find('button[children=0]').props().className).toBe('selected');
  });

  it('should render modal showing current movement for target', () => {
    const targetKeyPad = wrapper.find('KeyPad').at(1);

    expect(targetKeyPad.find('button[children=0]').props().className).toBe('selected');
  });

  it('should be possible to select shooter speed', () => {
    wrapper.find('KeyPad').at(0).find('button[children=1]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ type: 'MOVEMENT_UPDATED', payload: { shooter: 1, target: 0 } });
  });

  it('should be possible to select target speed', () => {
    wrapper.find('KeyPad').at(1).find('button[children=2]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ type: 'MOVEMENT_UPDATED', payload: { shooter: 0, target: 2 } });
  });

  it('should be possible to close modal', () => {
    wrapper.find('button[children="Done"]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
