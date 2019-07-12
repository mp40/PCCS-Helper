import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

const idRef = () => 'equipNameInput';
const heading = () => 'Equipment Name';
const equipmentValue = () => '';
const onChange = jest.fn();

describe('TextInput Component', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const newWrapper = () => shallow(<TextInput
    onChange={onChange}
    equipmentValue={equipmentValue()}
    heading={heading()}
    idRef={idRef()}
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
      expect(wrapper.find('.equipInput').text()).toBe(String(equipmentValue()));
    });
  });
});
