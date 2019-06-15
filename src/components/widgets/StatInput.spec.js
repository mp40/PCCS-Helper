import React from 'react';
import { shallow } from 'enzyme';
import StatInput from './StatInput';
import { isValidAttributeStat } from '../../helpers/gaurds';

const statLevel = () => 0;
const statName = () => 'Gun';
const id = () => 'updateGun';
const action = jest.fn();

describe('StatInput Component', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const newWrapper = () => shallow(<StatInput
    statLevel={statLevel()}
    statName={statName()}
    idRef={id()}
    isValid={isValidAttributeStat}
    action={action}
  />);
  describe('the behavior of StatInput', () => {
    const wrapper = newWrapper();
    it('should have the correct id', () => {
      expect(wrapper.find('#updateGun').exists()).toBe(true);
    });
    it('should render the correct stat name', () => {
      expect(wrapper.text()).toContain(statName());
    });
    it('should render the correct stat value', () => {
      expect(wrapper.find('.attValue').text()).toBe(String(statLevel()));
    });
    it('should render an input feild when handleToggleInput is clicked', () => {
      wrapper.find('.attValue').simulate('click');
      expect(wrapper.find('.attInput').exists()).toBe(true);
    });
    it('should call handleUpdateValue when Enter key pressed', () => {
      const newValue = 13;
      const instance = wrapper.instance();
      const spyOnMethod = jest.spyOn(instance, 'handleUpdateValue');
      wrapper.find('.attInput').simulate('keyUp', { target: { value: newValue },
        key: 'Enter' });
      expect(spyOnMethod).toHaveBeenCalled();
      spyOnMethod.mockRestore();
    });
    it('should close the text input when Enter is pressed', () => {
      expect(wrapper.find('.attInput').exists()).toBe(false);
    });
  });

  describe('the gaurd clauses', () => {
    let wrapper;
    beforeEach(() => {
      action.mockClear();
      wrapper = newWrapper();
      wrapper.find('.attValue').simulate('click');
    });
    it('should call the action if the value is valid', () => {
      const validValue = 13;
      wrapper.find('.attInput').simulate('keyUp', { target: { value: validValue },
        key: 'Enter' });
      expect(action).toHaveBeenCalled();
    });
    it('should not call the action if the value is not valid', () => {
      const invalidValue = 2;
      wrapper.find('.attInput').simulate('keyUp', { target: { value: invalidValue },
        key: 'Enter' });
      expect(action).not.toHaveBeenCalled();
    });
  });
});
