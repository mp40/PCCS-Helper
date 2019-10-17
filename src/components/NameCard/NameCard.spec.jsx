import React from 'react';
import { mount } from 'enzyme';
import { mountAppWithStore, storeWithCreateCharacterView } from '../../helpers/testHelpers';

import NameCard from './component';

describe('<NameCard>', () => {
  describe('NameCard behaviour', () => {
    const changeCharacterName = jest.fn();
    const wrapper = mount(<NameCard changeCharacterName={changeCharacterName} />);
    it('should render with default of empty string', () => {
      expect(wrapper.find('.current-character-name').text()).toBe('');
    });
    it('should be possible to open text input', () => {
      expect(wrapper.find('.current-character-name').exists()).toBe(true);
      wrapper.find('.current-character-name').simulate('click');
      expect(wrapper.find('.current-character-name').exists()).toBe(false);
      expect(wrapper.find('.character-name-input').exists()).toBe(true);
    });
    it('should close the open text input when enter is pressed', () => {
      expect(wrapper.find('TextInput').exists()).toBe(true);
      wrapper.find('.textInput').simulate('keyUp', { target: { value: 13 },
        key: 'Enter' });
      expect(wrapper.find('TextInput').exists()).toBe(false);
    });
  });
  describe('handleSubmitName gaurd clause', () => {
    const changeCharacterName = jest.fn();
    const wrapper = mount(<NameCard changeCharacterName={changeCharacterName} />);
    wrapper.find('.current-character-name').simulate('click');
    it('should not close text input if "Enter" not pressed', () => {
      expect(wrapper.find('.character-name-input').exists()).toBe(true);
      wrapper.find('.character-name-input input').simulate('keyUp', { key: 'Space' });
      expect(wrapper.find('.character-name-input').exists()).toBe(true);
    });
  });
  describe('NameCard intergration test', () => {
    const wrap = mountAppWithStore(storeWithCreateCharacterView());
    const wrappedNameCard = wrap.find('.character-name-card-container');
    it('should open name text input', () => {
      wrappedNameCard.find('.current-character-name').simulate('click');
      expect(wrap.find('.character-name-input').exists()).toBe(true);
    });
    it('should be possible to update name', () => {
      wrap.find('.character-name-input input').simulate('change', { target: { value: 'Biggles' } });
      wrap.find('.character-name-input input').simulate('keyUp', { key: 'Enter' });
      expect(wrappedNameCard.text()).toContain('Biggles');
    });
    it('should close the text input box', () => {
      expect(wrap.find('TextInput').exists()).toBe(false);
    });
  });
});