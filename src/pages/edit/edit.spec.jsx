import React from 'react';
import { shallow } from 'enzyme';

import CharacterGeneration from './component';

describe('Character Generation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CharacterGeneration
      totalWeight={69}
      signedIn={false}
    />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not show save character button if not signed in', () => {
    expect(wrapper.find('Save').exists()).toBe(false);
  });

  it('should show save character button if signed in', () => {
    wrapper.setProps({ signedIn: true });

    expect(wrapper.find('Save').exists()).toBe(true);
  });
});
