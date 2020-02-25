import React from 'react';
import { shallow } from 'enzyme';
import CheckBox from './CheckBox';

describe('the CheckBox component', () => {
  const func = jest.fn();
  const wrapper = shallow(<CheckBox name="test" onClick={func} isActive={false} />);
  it('should default without "active" class name', () => {
    expect(wrapper.find('.active').exists()).toBe(false);
  });
  it('should call function when clicked', () => {
    wrapper.simulate('click');
    expect(func).toHaveBeenCalled();
  });
  it('should apply "active" class name after click', () => {
    expect(wrapper.find('.active').exists()).toBe(true);
  });
});
