import React from 'react';
import { shallow } from 'enzyme';

import MovementSelectModal from './index';

describe('Movement Select Modal', () => {
  let wrapper;
  const setMovement = jest.fn();
  const setModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <MovementSelectModal
        setMovement={setMovement}
        setModal={setModal}
        movement={{ shooter: 0, target: 0 }}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render modal showing current movment for shooter', () => {
    const shooterKeyPad = wrapper.find('KeyPad').at(0).dive();

    expect(shooterKeyPad.find('button[children=0]').props().className).toBe('selected');
  });

  it('should render modal showing current movment for target', () => {
    const targetKeyPad = wrapper.find('KeyPad').at(1).dive();

    expect(targetKeyPad.find('button[children=0]').props().className).toBe('selected');
  });

  it('should be possible to select shooter speed', () => {
    wrapper.find('KeyPad').at(0).dive().find('button[children=1]')
      .simulate('click');

    expect(setMovement).toHaveBeenCalledWith({ shooter: 1, target: 0 });
  });

  it('should be possible to select target speed', () => {
    wrapper.find('KeyPad').at(1).dive().find('button[children=2]')
      .simulate('click');

    expect(setMovement).toHaveBeenCalledWith({ shooter: 0, target: 2 });
  });

  it('should be possible to close modal', () => {
    wrapper.find('button[children="Done"]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
