import React from 'react';
import { shallow } from 'enzyme';

import Save from './index';

describe('Save', () => {
  describe('signed in', () => {
    const wrapper = shallow(
      <Save />);

    it('should open the modal', () => {
      wrapper.find('button').simulate('click');

      expect(wrapper.find('Connect(SaveModal)').exists()).toBe(true);
    });

    it('should close the modal', () => {
      wrapper.find('Connect(SaveModal)').props().setShowSaveCharacter(false);

      expect(wrapper.find('Connect(SaveModal)').exists()).toBe(false);
    });
  });
});
