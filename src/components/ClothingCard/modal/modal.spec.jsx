import React from 'react';
import { shallow } from 'enzyme';

import SelectUniformModal from './component';

describe('SelectUniformModal', () => {
  let wrapper;

  const changeUniform = jest.fn();
  const closeModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SelectUniformModal changeUniform={changeUniform} closeModal={closeModal} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should select uniform when clicked', () => {
    wrapper.find('span[children="Winter"]').parent().simulate('click');

    expect(changeUniform).toHaveBeenCalledWith('Winter');
  });

  it('should close modal when close button clicked', () => {
    wrapper.find('.close').simulate('click');

    expect(closeModal).toHaveBeenCalled();
  });
});
