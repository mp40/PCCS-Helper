import React from 'react';
import { shallow } from 'enzyme';

import ModifyPage from './index';

describe('modify page', () => {
  it('should render modify card connected to store', () => {
    const wrapper = shallow(<ModifyPage firearmIndex={0} />);

    expect(wrapper.find('Connect(ModifyCard)').exists()).toBe(true);
  });
});
