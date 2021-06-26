import React from 'react';
import { shallow } from 'enzyme';

import RangeSelectModal from './index';

describe('Range Select Modal', () => {
  let wrapper;
  const setRange = jest.fn();
  const setModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <RangeSelectModal
        range={10}
        maxRange={80}
        setRange={setRange}
        setModal={setModal}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update range when value is selected', () => {
    wrapper.find('KeyPadModal').invoke('handleClick')('1');

    expect(setRange).toHaveBeenCalledWith('1');
  });

  it('should close the modal when range is selected', () => {
    wrapper.find('KeyPadModal').invoke('handleClick')('1');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
