import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { getStore } from '../../helpers/testHelpers';

import NameCard from './component';
import ConnectedNameCard from '.';

describe('<NameCard>', () => {
  const changeCharacterName = jest.fn();

  describe('NameCard behaviour', () => {
    const wrapper = shallow(<NameCard changeCharacterName={changeCharacterName} />);

    it('should be possible to open text input', () => {
      wrapper.find('button').simulate('click');

      expect(wrapper.find('TextInput').exists()).toBe(true);
    });

    it('should close the open text input when submit button clicked', () => {
      wrapper.find('button[children="Submit"]').simulate('click');

      expect(wrapper.find('TextInput').exists()).toBe(false);
    });
  });

  describe('NameCard intergration test', () => {
    const store = getStore();

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedNameCard />
      </Provider>,
    );

    it('should be possible to update name', () => {
      wrapper.find('button').simulate('click');

      wrapper.find('input').simulate('change', { target: { value: 'Biggles' } });

      wrapper.find('button[children="Submit"]').simulate('click');

      expect(wrapper.text()).toContain('Biggles');
    });
  });
});
