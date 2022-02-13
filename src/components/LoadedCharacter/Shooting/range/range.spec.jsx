import React from 'react';
import { mount } from 'enzyme';

import Range from '.';

describe('Range', () => {
  const maxRange = 100;
  const setRangeAlm = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Range maxRange={maxRange} setRangeAlm={setRangeAlm} />);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should mount with default of range 50', () => {
    expect(wrapper.text()).toBe('Range50');
    expect(setRangeAlm).toHaveBeenCalledWith(5);
  });

  it('should update range alm when range updated', async () => {
    wrapper.find('button').simulate('click');
    jest.clearAllMocks();

    wrapper.find('button[children="8"]').simulate('click');

    expect(setRangeAlm).toHaveBeenCalledWith(18);
  });
});
