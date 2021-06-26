import React from 'react';
import { shallow } from 'enzyme';

import AimsSelectModal from './index';

describe('Aim Select Modal', () => {
  let wrapper;
  const setAims = jest.fn();
  const setModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<AimsSelectModal aims={1} maxAims={6} setAims={setAims} setModal={setModal} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set the aim value  when button clicked', () => {
    wrapper.find('KeyPadModal').invoke('handleClick')(1);

    expect(setAims).toHaveBeenCalledWith(1);
  });

  it('should close the modal when button clicked', () => {
    wrapper.find('KeyPadModal').invoke('handleClick')(1);

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
