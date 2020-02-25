import React from 'react';
import { shallow } from 'enzyme';
import StatInput from './StatInput';
import { isValidAttributeStat } from '../../helpers/gaurds';

const statLevel = () => 0;
const statName = () => 'Gun';
const action = jest.fn();

describe('StatInput Component', () => {
  const newWrapper = () => shallow(<StatInput
    statLevel={statLevel()}
    statName={statName()}
    isValid={isValidAttributeStat}
    action={action}
  />);
  describe('the behavior of StatInput', () => {
    const wrapper = newWrapper();
    const enterValue13 = (finalKey) => wrapper.find('.statInput').simulate('keyUp', { target: { value: 13 },
      key: finalKey });
    const setSpy = () => jest.spyOn(wrapper.instance(), 'handleUpdateValue');
    it('should render the correct stat name', () => {
      expect(wrapper.text()).toContain(statName());
    });
    it('should render the correct stat value', () => {
      expect(wrapper.find('.statValue').text()).toBe(String(statLevel()));
    });
    it('should render an input feild when handleToggleInput is clicked', () => {
      wrapper.find('.statValue').simulate('click');
      expect(wrapper.find('.statInput').exists()).toBe(true);
    });
    it('should not call handleUpdateValue if Enter key not pressed', () => {
      const spyOnMethod = setSpy();
      enterValue13('Space');
      expect(spyOnMethod).not.toHaveBeenCalled();
      spyOnMethod.mockRestore();
    });
    it('should call handleUpdateValue when Enter key pressed', () => {
      const spyOnMethod = setSpy();
      enterValue13('Enter');
      expect(spyOnMethod).toHaveBeenCalled();
      spyOnMethod.mockRestore();
    });
    it('should close the text input when Enter is pressed', () => {
      expect(wrapper.find('.statInput').exists()).toBe(false);
    });
  });

  describe('the gaurd clauses', () => {
    let wrapper;
    beforeEach(() => {
      action.mockClear();
      wrapper = newWrapper();
      wrapper.find('.statValue').simulate('click');
    });
    it('should call the action if the value is valid', () => {
      const validValue = 13;
      wrapper.find('.statInput').simulate('keyUp', { target: { value: validValue },
        key: 'Enter' });
      expect(action).toHaveBeenCalled();
    });
    it('should not call the action if the value is not valid', () => {
      const invalidValue = 2;
      wrapper.find('.statInput').simulate('keyUp', { target: { value: invalidValue },
        key: 'Enter' });
      expect(action).not.toHaveBeenCalled();
    });
  });
});
