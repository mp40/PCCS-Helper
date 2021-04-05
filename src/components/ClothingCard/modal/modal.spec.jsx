import React from 'react';
import { shallow } from 'enzyme';

import SelectUniformModal from './index';

describe('SelectUniformModal', () => {
  let wrapper;

  const handleChangeUniform = jest.fn();
  const setShowSelectModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <SelectUniformModal
        handleChangeUniform={handleChangeUniform}
        setShowSelectModal={setShowSelectModal}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should select uniform when clicked', () => {
    wrapper.find('span[children="Winter"]').parent().simulate('click');

    expect(handleChangeUniform).toHaveBeenCalledWith('Winter');
  });

  it('should close modal when close button clicked', () => {
    wrapper.find('.close').simulate('click');

    expect(setShowSelectModal).toHaveBeenCalledWith(false);
  });
});
