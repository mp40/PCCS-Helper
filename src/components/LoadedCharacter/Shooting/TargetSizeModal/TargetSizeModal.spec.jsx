import React from 'react';
import { shallow } from 'enzyme';

import TargetSizeSelectModal from './index';

describe('Target Size Modal', () => {
  let wrapper;
  const setSize = jest.fn();
  const setModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <TargetSizeSelectModal
        setSize={setSize}
        setModal={setModal}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to select small target size', () => {
    wrapper.find('button[children="Fire Over/Around"]').simulate('click');

    expect(setSize).toHaveBeenCalledWith('Fire Over/Around');
  });

  it('should be possible to select large target size', () => {
    wrapper.find('button[children="Standing Exposed"]').simulate('click');

    expect(setSize).toHaveBeenCalledWith('Standing Exposed');
  });

  it('should close modal on target size select', () => {
    wrapper.find('button[children="Running"]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
