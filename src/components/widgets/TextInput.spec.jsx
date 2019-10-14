import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

const idRef = () => 'equipNameInput';
const heading = () => 'Equipment Name';
const equipmentValue = () => '';
const onChange = jest.fn();
const onKeyUpEnter = jest.fn();

describe('TextInput Component', () => {
  const newWrapper = () => shallow(<TextInput
    onChange={onChange}
    equipmentValue={equipmentValue()}
    heading={heading()}
    idRef={idRef()}
    onKeyUp={onKeyUpEnter}
  />);
  describe('the behaviour of TextInput', () => {
    const wrapper = newWrapper();
    it('should have the correct id', () => {
      expect(wrapper.find('#equipNameInput').exists()).toBe(true);
    });
    it('should render the correct heading', () => {
      expect(wrapper.text()).toContain(heading());
    });
    it('should render the correct stat value', () => {
      expect(wrapper.find('.textInput').text()).toBe(String(equipmentValue()));
    });
  });
});
