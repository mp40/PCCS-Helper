import React from 'react';
import { mount } from 'enzyme';

import Movement from '.';

describe('Movement', () => {
  const range = 10;
  const setMovementAlm = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Movement range={range} setMovementAlm={setMovementAlm} />);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should mount with default of no movement', () => {
    expect(wrapper.text()).toBe('MovementShooter:0 | Target:0');
    expect(setMovementAlm).toHaveBeenCalledWith({ mod: 0, noMax: true });
  });

  it('should update movement alm when movement updated', async () => {
    wrapper.find('button').simulate('click');
    jest.clearAllMocks();

    wrapper.find('KeyPad').at(0).find('button[children=5]').simulate('click');

    expect(setMovementAlm).toHaveBeenCalledWith({ mod: -10, noMax: false });
  });
});
