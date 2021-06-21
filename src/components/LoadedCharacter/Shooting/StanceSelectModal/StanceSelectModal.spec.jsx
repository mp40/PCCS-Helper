import React from 'react';
import { shallow } from 'enzyme';

import StanceSelectModal from './index';

describe('Stance Select Modal', () => {
  let wrapper;
  const setStance = jest.fn();
  const setModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<StanceSelectModal setStance={setStance} setModal={setModal} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to select Standing stance', () => {
    wrapper.find('button[children="Standing"]').simulate('click');

    expect(setStance).toHaveBeenCalledWith('Standing');
  });

  it('should be possible to select Kneeling stance', () => {
    wrapper.find('button[children="Kneeling"]').simulate('click');

    expect(setStance).toHaveBeenCalledWith('Kneeling');
  });

  it('should be possible to select Prone stance', () => {
    wrapper.find('button[children="Prone"]').simulate('click');

    expect(setStance).toHaveBeenCalledWith('Prone');
  });

  it('should close modal when stance selected', () => {
    wrapper.find('button[children="Standing"]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
