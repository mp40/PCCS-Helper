import React from 'react';
import { shallow } from 'enzyme';
import StatInput from './StatInput';

const statLevel = () => 0;
const statName = () => 'Gun';
const id = () => 'updateGun';

describe('StatInput Component', () => {
  const wrapper = shallow(<StatInput
    statLevel={statLevel()}
    statName={statName()}
    id={id()}
  />);
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
});
