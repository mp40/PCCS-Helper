import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

const heading = () => 'Equipment Name';
const equipmentValue = () => '';
const onChange = jest.fn();
const onKeyUpEnter = jest.fn();

describe('TextInput Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TextInput
      onChange={onChange}
      value={equipmentValue()}
      heading={heading()}
      onKeyUp={onKeyUpEnter}
    />);
  });

  it('should render the correct heading', () => {
    expect(wrapper.text()).toContain(heading());
  });

  it('should render the correct stat value', () => {
    expect(wrapper.find('.textInput').text()).toBe(String(equipmentValue()));
  });
});
