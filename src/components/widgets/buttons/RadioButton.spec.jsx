import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';

describe('the RadioButton component', () => {
  const func = jest.fn();
  const wrapper = shallow(<RadioButton checked={false} onClick={func} />);

  it('should call function when clicked', () => {
    wrapper.find('button').simulate('click');

    expect(func).toHaveBeenCalled();
  });

  it('should not apply active to class name if checked is false', () => {
    expect(wrapper.props().className).toBe('-radioButtonContainer ');
  });

  it('should apply active to class name if checked is true', () => {
    wrapper.setProps({ checked: true });

    expect(wrapper.props().className).toBe('-radioButtonContainer active');
  });
});
