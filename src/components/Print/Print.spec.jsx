import React from 'react';
import { shallow } from 'enzyme';

import Print from '.';
import GameSheet from '../GameSheet';

import * as actions from '../App/actions';

describe('Printing the reference sheet', () => {
  it('should close the modal', () => {
    const dispatch = jest.fn();
    jest.spyOn(React, 'useContext').mockImplementation(() => dispatch);
    jest.spyOn(actions, 'showModal').mockImplementation(() => {});
    const wrapper = shallow(<Print />);
    wrapper.find('button').simulate('click');

    expect(dispatch).toHaveBeenCalled();
    expect(actions.showModal).toHaveBeenCalledWith(GameSheet);
    jest.clearAllMocks();
  });
});
