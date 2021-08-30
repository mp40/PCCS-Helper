import React from 'react';
import { shallow } from 'enzyme';

import MiscellaneousSelectModal from './index';

describe('Miscellaneous Select Modal', () => {
  let wrapper;
  const setMiscellaneous = jest.fn();
  const setModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <MiscellaneousSelectModal
        setMiscellaneous={setMiscellaneous}
        setModal={setModal}
        miscellaneous={0}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update miscellaneous when value is selected', () => {
    wrapper.find('KeyPadModal').invoke('handleClick')('1');

    expect(setMiscellaneous).toHaveBeenCalledWith('1');
  });

  it('should close the modal when value is selected', () => {
    wrapper.find('KeyPadModal').invoke('handleClick')('1');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
