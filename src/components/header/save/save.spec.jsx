import React from 'react';
import { shallow } from 'enzyme';

import Save from './index';
import SaveIcon from './SaveIcon';

describe('Save', () => {
  describe('signed in', () => {
    const wrapper = shallow(
      <Save
        signedIn
      />);

    it('should render the save button when signed in', () => {
      expect(wrapper.find('button').exists()).toBe(true);
    });

    it('should open the modal', () => {
      wrapper.find('button').simulate('click');

      expect(wrapper.find('Connect(HeaderSaveModal)').exists()).toBe(true);
    });

    it('should close the modal', () => {
      wrapper.find('Connect(HeaderSaveModal)').props().setShowSaveCharacter(false);

      expect(wrapper.find('Connect(HeaderSaveModal)').exists()).toBe(false);
    });
  });

  describe('signed out', () => {
    const wrapper = shallow(
      <Save
        signedIn={false}
      />);

    it('should no render the save button when signed out', () => {
      expect(wrapper.find('button').exists()).toBe(false);
    });
  });

  describe('save icon', () => {
    const wrapper = shallow(
      <SaveIcon />);

    it('should render svg icon', () => {
      expect(wrapper.find('svg').exists()).toBe(true);
    });
  });
});
