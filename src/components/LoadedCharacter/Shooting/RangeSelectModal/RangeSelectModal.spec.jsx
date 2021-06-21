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
        setRange={setRange}
        setModal={setModal}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to select lowest range', () => {
    wrapper.find('button[children="1"]').simulate('click');

    expect(setRange).toHaveBeenCalledWith('1');
  });

  it('should be possible to select highest range', () => {
    wrapper.find('button[children="300"]').simulate('click');

    expect(setRange).toHaveBeenCalledWith('300');
  });

  it('should close the modal when range is selected', () => {
    wrapper.find('button[children="1"]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
