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

    it('should render with default of empty string', () => {
      expect(wrapper.find('.character-name-card-container').childAt(1).text()).toBe('');
    });

    it('should be possible to open text input', () => {
      wrapper.find('.character-name-card-container').childAt(1).simulate('click');

      expect(wrapper.find('.character-name-input').exists()).toBe(true);
    });

    it('should close the open text input when enter is pressed', () => {
      const input = wrapper.find('TextInput').dive();

      input.find('input').simulate('keyUp', { target: { value: 13 },
        key: 'Enter' });

      expect(wrapper.find('TextInput').exists()).toBe(false);
    });
  });

  describe('handleSubmitName gaurd clause', () => {
    const wrapper = shallow(<NameCard changeCharacterName={changeCharacterName} />);

    it('should not close text input if "Enter" not pressed', () => {
      wrapper.find('.character-name-card-container').childAt(1).simulate('click');
      const input = wrapper.find('TextInput').dive();

      input.find('input').simulate('keyUp', { target: { value: 13 },
        key: 'Space' });

      expect(wrapper.find('TextInput').exists()).toBe(true);
    });
  });

  describe('NameCard intergration test', () => {
    const store = getStore();

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedNameCard />
      </Provider>,
    );

    it('should be possible to open open input for new name', () => {
      wrapper.find('.changeName').simulate('click');
    });

    it('should be possible to update name', () => {
      wrapper.find('.character-name-input input').simulate('change', { target: { value: 'Biggles' } });
      wrapper.find('.character-name-input input').simulate('keyUp', { key: 'Enter' });
      expect(wrapper.text()).toContain('Biggles');
    });

    it('should close the text input box', () => {
      expect(wrapper.find('TextInput').exists()).toBe(false);
    });
  });
});
