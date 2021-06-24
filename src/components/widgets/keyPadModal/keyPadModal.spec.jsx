import React from 'react';
import { shallow } from 'enzyme';

import KeyPadModal from './index';

describe('Key Pad Modal', () => {
  let wrapper;

  const setSelection = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<KeyPadModal keyText={['a1', 'b2', 'c3']} setSelection={setSelection} selected={undefined} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the correct text on keys', () => {
    expect(wrapper.text()).toBe('a1b2c3');
  });

  it('should call the set method when key pressed', () => {
    wrapper.find('button[children="b2"]').simulate('click');

    expect(setSelection).toHaveBeenCalledWith('b2');
  });

  it('should apply slected class name if selected value provided', () => {
    wrapper.setProps({ selected: 'b2' });

    expect(wrapper.find('button[children="a1"]').hasClass('selected')).toBe(false);
    expect(wrapper.find('button[children="b2"]').hasClass('selected')).toBe(true);
    expect(wrapper.find('button[children="c3"]').hasClass('selected')).toBe(false);
  });
});
