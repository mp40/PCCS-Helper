import React from 'react';
import { shallow } from 'enzyme';

import Save from './index';
import SaveModal from './modal';

describe('Save button', () => {
  const dispatch = jest.fn();
  jest.spyOn(React, 'useContext').mockImplementation(() => dispatch);

  const wrapper = shallow(
    <Save />);

  it('should open the modal', () => {
    wrapper.dive().find('button').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({ type: 'MODAL_SHOWN', payload: SaveModal });
  });
});
